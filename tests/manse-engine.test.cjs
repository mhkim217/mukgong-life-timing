// 묵공 주석: 운영 계산 코드에 대한 공식 날짜·샘플·서울 경계 회귀 검수.
// 양음력·일진 기준: 한국천문연구원 음양력변환 /life/solc의 2026-10-08 대조 응답.
const assert=require('node:assert/strict');
const fs=require('node:fs');
const path=require('node:path');
const engine=require('../manse-engine.js');
let checks=0;
function eq(actual,expected,label){assert.deepEqual(actual,expected,label); checks++;}
function fails(input,pattern,label){assert.throws(()=>engine.calculate(input),pattern,label); checks++;}
const base={mode:'solar',year:2016,month:8,day:3,hour:22,minute:0};
const calc=(p={})=>engine.calculate({...base,...p});
const four=r=>r.pillars.map(p=>p.ganZhi);
const fixtures=[
 [[1950,1,1],[1949,11,13,false],'丙申'],
 [[1960,2,17],[1960,1,21,false],'乙亥'],
 [[2016,8,3],[2016,7,1,false],'丁巳'],
 [[2017,6,24],[2017,5,1,true],'壬午'],
 [[2023,3,22],[2023,2,1,true],'己卯'],
 [[2050,12,31],[2050,11,18,false],'乙酉']
];
for(const [solar,lunar,day] of fixtures){
 const result=calc({year:solar[0],month:solar[1],day:solar[2],hour:12});
 eq(result.lunarDate,{year:lunar[0],month:lunar[1],day:lunar[2],intercalation:lunar[3]},'KASI 양력→음력 '+solar);
 eq(result.pillars[2].ganZhi,day,'KASI 일진 '+solar);
 const reverse=calc({mode:'lunar',year:lunar[0],month:lunar[1],day:lunar[2],leap:lunar[3],hour:12});
 eq(reverse.solarDate,{year:solar[0],month:solar[1],day:solar[2]},'KASI 음력→양력 '+solar);
 eq(four(reverse),four(result),'입력 역법과 무관하게 동일한 네 기둥 '+solar);
}
eq(four(calc()),['丙申','乙未','丁巳','辛亥'],'2016 샘플 전체');
// 묵공 확정: 서울 23:32부터 자시·다음 일주, 01:32부터 축시. 초 경계까지 확인합니다.
for(const [day,hour,minute,second,dayPillar,hourPillar] of [
 [3,22,0,0,'丁巳','辛亥'],[3,23,30,0,'丁巳','辛亥'],[3,23,31,59,'丁巳','辛亥'],
 [3,23,32,0,'戊午','壬子'],[3,23,59,59,'戊午','壬子'],[4,0,0,0,'戊午','壬子'],
 [4,1,31,59,'戊午','壬子'],[4,1,32,0,'戊午','癸丑']
]){
 const result=calc({day,hour,minute,second});
 eq(four(result),['丙申','乙未',dayPillar,hourPillar],`서울 경계 ${day} ${hour}:${minute}:${second}`);
 eq(result.solarDate,{year:2016,month:8,day},'원래 출생 날짜 보존');
 eq(result.lunarDate.day,day-2,'음력 출생 날짜 보존');
}
const rolled=calc({hour:23,minute:32});
eq(rolled.dayChanged,true,'자시 변경 안내');
eq(engine.dateText(rolled.sajuDay),'2016-08-04','일주 적용일');
eq(calc({day:4,hour:0,minute:0}).dayChanged,false,'자정 뒤 원래 날짜와 일주 날짜 일치');
eq(four(calc({month:12,day:31,hour:23,minute:32})).slice(2),four(calc({year:2017,month:1,day:1,hour:0,minute:0})).slice(2),'연말 자시 연속성');
// KASI 분 공표 시각 직전/직후. 내부 계산 시각은 초를 유지하므로 ±1분을 사용합니다.
for(const [year,month,day,hour,minute,before,after] of [
 [2016,2,4,18,46,['乙未','己丑'],['丙申','庚寅']],
 [2016,8,7,10,53,['丙申','乙未'],['丙申','丙申']],
 [2026,2,4,5,2,['乙巳','己丑'],['丙午','庚寅']],
 [2026,8,7,20,43,['丙午','乙未'],['丙午','丙申']]
]){
 eq(four(calc({year,month,day,hour,minute:minute-1})).slice(0,2),before,'KASI 절입 직전');
 eq(four(calc({year,month,day,hour,minute:minute+1})).slice(0,2),after,'KASI 절입 직후');
}
eq(calc({day:7,hour:10}).pillars[1].ganZhi,'乙未','중국 시간 때문에 입추가 1시간 빨라지는 오류 방지');
eq(calc({month:2,day:4,hour:18,minute:47}).pillars[1].ganZhi,'庚寅','서울 32분 보정이 절입까지 늦추지 않음');
eq(calc({month:2,day:4,hour:18,minute:46}).nearTerm,true,'초 단위 절입 주의 안내');
const expectedHours=['子','丑','寅','卯','辰','巳','午','未','申','酉','戌','亥'];
for(let i=1;i<12;i++){
 const hour=i*2-1;
 eq(calc({hour,minute:31,second:59}).pillars[3].branch.hanja,expectedHours[i-1],'2시간 경계 직전 '+i);
 eq(calc({hour,minute:32}).pillars[3].branch.hanja,expectedHours[i],'2시간 경계 시작 '+i);
}
for(const [p,pattern] of [
 [{hour:NaN},/모두 정수/],[{minute:NaN},/모두 정수/],[{hour:24},/0~23/],[{hour:-1},/0~23/],
 [{minute:60},/0~59/],[{minute:-1},/0~59/],[{hour:22.5},/모두 정수/],
 [{month:2,day:30},/존재하지/],[{year:2023,month:2,day:29},/존재하지/],
 [{mode:'lunar',year:2016,month:5,day:1,leap:true},/윤달/],
 [{mode:'lunar',year:1949,month:1,day:1},/지원 범위/],[{year:2051},/지원 범위/],
 [{year:1988,month:5,day:8,hour:2,minute:30},/존재하지 않는 시각/],
 [{year:1988,month:10,day:9,hour:2,minute:30},/두 번 있었던 시각/],
 [{year:1954,month:3,day:20,hour:23,minute:45},/두 번 있었던 시각/],
 [{year:1961,month:8,day:10,hour:0,minute:15},/존재하지 않는 시각/]
]) fails({...base,...p},pattern,'잘못된 입력·시계 변경 거부');
eq(calc({year:2024,month:2,day:29}).solarDate.day,29,'양력 윤년');
for(const [year,month,day,offset,correction] of [[1960,2,17,510,2],[1960,8,17,570,62],[1988,6,1,600,92],[2016,8,3,540,32]]){
 const result=calc({year,month,day,hour:12});
 eq([result.utcOffsetMinutes,result.correctionMinutes],[offset,correction],'과거 표준시·서머타임 '+year);
}
const koreanGod={比肩:'비견',劫财:'겁재',食神:'식신',伤官:'상관',偏财:'편재',正财:'정재',七杀:'편관',正官:'정관',偏印:'편인',正印:'정인'};
const vendor=require('../assets/vendor/lunar-javascript-1.7.7.js');
for(const a of ['甲','乙','丙','丁','戊','己','庚','辛','壬','癸'])for(const b of ['甲','乙','丙','丁','戊','己','庚','辛','壬','癸']){
 eq(engine.tenGod(a,b),koreanGod[vendor.LunarUtil.SHI_SHEN[a+b]],'십신 대조 '+a+b);
}
const timezoneFixtures=JSON.parse(fs.readFileSync(path.join(__dirname,'seoul-timezone-fixtures.json')));
for(const row of timezoneFixtures) eq(engine.offsetAt(Date.parse(row.utc)),row.offset,'독립 zoneinfo 시차 '+row.utc);
console.log(JSON.stringify({checks,passed:checks,failed:0}));
