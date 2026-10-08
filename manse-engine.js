// 묵공 주석: 한국 음력, 절입 순간, 서울 일주·시주를 구별하여 계산합니다.
// 현대 서울은 시계에서 32분을 빼고 자시 시작에 일주도 함께 바꿉니다.
(function (root, factory) {
  if (typeof module === 'object' && module.exports) {
    module.exports = factory(require('./assets/vendor/korean-lunar-calendar-0.4.0.min.js'), require('./assets/vendor/lunar-javascript-1.7.7.js').Solar);
  } else {
    root.MukgongManse = factory(root.KoreanLunarCalendar, root.Solar);
  }
})(typeof globalThis !== 'undefined' ? globalThis : this, function (KoreanCalendar, Solar) {
  'use strict';
  const MINUTE = 60000;
  const SEOUL_LONGITUDE_MINUTES = 508; // UTC+8:28: 현대 UTC+9에서 정확히 32분 차감.
  // IANA tzdb Asia/Seoul·ROK 기록. 브라우저의 현지 시간대나 DST 구현에 의존하지 않습니다.
  const transitions = [
    ['1950-03-31T15:00:00Z',600], ['1950-09-09T14:00:00Z',540],
    ['1951-05-05T15:00:00Z',600], ['1951-09-08T14:00:00Z',540],
    ['1954-03-20T15:00:00Z',510], ['1955-05-04T15:30:00Z',570],
    ['1955-09-08T14:30:00Z',510], ['1956-05-19T15:30:00Z',570],
    ['1956-09-29T14:30:00Z',510], ['1957-05-04T15:30:00Z',570],
    ['1957-09-21T14:30:00Z',510], ['1958-05-03T15:30:00Z',570],
    ['1958-09-20T14:30:00Z',510], ['1959-05-02T15:30:00Z',570],
    ['1959-09-19T14:30:00Z',510], ['1960-04-30T15:30:00Z',570],
    ['1960-09-17T14:30:00Z',510], ['1961-08-09T15:30:00Z',540],
    ['1987-05-09T17:00:00Z',600], ['1987-10-10T17:00:00Z',540],
    ['1988-05-07T17:00:00Z',600], ['1988-10-08T17:00:00Z',540]
  ].map(([instant, offset]) => [Date.parse(instant), offset]);
  const stems = ['甲','乙','丙','丁','戊','己','庚','辛','壬','癸'];
  const readings = {甲:'갑',乙:'을',丙:'병',丁:'정',戊:'무',己:'기',庚:'경',辛:'신',壬:'임',癸:'계',子:'자',丑:'축',寅:'인',卯:'묘',辰:'진',巳:'사',午:'오',未:'미',申:'신',酉:'유',戌:'술',亥:'해'};
  const elements = {甲:'wood',乙:'wood',丙:'fire',丁:'fire',戊:'earth',己:'earth',庚:'metal',辛:'metal',壬:'water',癸:'water',子:'water',丑:'earth',寅:'wood',卯:'wood',辰:'earth',巳:'fire',午:'fire',未:'earth',申:'metal',酉:'metal',戌:'earth',亥:'water'};
  const elementNames = {wood:'목',fire:'화',earth:'토',metal:'금',water:'수'};
  const jieNames = {小寒:'소한',立春:'입춘',惊蛰:'경칩',清明:'청명',立夏:'입하',芒种:'망종',小暑:'소서',立秋:'입추',白露:'백로',寒露:'한로',立冬:'입동',大雪:'대설'};
  const pad = value => String(value).padStart(2,'0');
  function dateText(date) { return `${date.year}-${pad(date.month)}-${pad(date.day)}`; }
  function wallParts(ms) {
    const date = new Date(ms);
    return {year:date.getUTCFullYear(),month:date.getUTCMonth()+1,day:date.getUTCDate(),hour:date.getUTCHours(),minute:date.getUTCMinutes(),second:date.getUTCSeconds()};
  }
  function wallMs(p) { return Date.UTC(p.year,p.month-1,p.day,p.hour||0,p.minute||0,p.second||0); }
  function timeText(p) { return `${dateText(p)} ${pad(p.hour)}:${pad(p.minute)}`; }
  function solarAtWall(ms) {
    const p = wallParts(ms);
    return Solar.fromYmdHms(p.year,p.month,p.day,p.hour,p.minute,p.second);
  }
  function offsetAt(utc) {
    let offset = 540;
    for (const [instant, nextOffset] of transitions) {
      if (utc < instant) break;
      offset = nextOffset;
    }
    return offset;
  }
  function resolveRecordedTime(wall) {
    const candidates = [510,540,570,600].map(offset => ({utc:wall-offset*MINUTE,offset})).filter(p => offsetAt(p.utc)===p.offset);
    if (candidates.length === 0) throw new Error('당시 시계 변경으로 존재하지 않는 시각입니다. 출생 기록의 날짜와 시각을 확인해 주세요.');
    if (candidates.length > 1) throw new Error('당시 시계 변경으로 두 번 있었던 시각입니다. 표준시·서머타임 여부를 확인해야 정확히 계산할 수 있습니다.');
    return candidates[0];
  }
  function tenGod(dayStem, otherStem) {
    const a = stems.indexOf(dayStem), b = stems.indexOf(otherStem);
    const relation = (Math.floor(b/2)-Math.floor(a/2)+5)%5;
    return [['비견','겁재'],['식신','상관'],['편재','정재'],['편관','정관'],['편인','정인']][relation][a%2===b%2 ? 0 : 1];
  }
  function character(hanja) {
    return {hanja,reading:readings[hanja],element:elements[hanja],elementName:elementNames[elements[hanja]],bright:hanja==='乙'||hanja==='寅'};
  }
  function termResult(term) {
    const solar = term.getSolar();
    const utc = Date.UTC(solar.getYear(),solar.getMonth()-1,solar.getDay(),solar.getHour(),solar.getMinute(),solar.getSecond())-480*MINUTE;
    return {name:jieNames[term.getName()]||term.getName(),utc,recordedTime:wallParts(utc+offsetAt(utc)*MINUTE)};
  }
  function calculate(input) {
    if (typeof KoreanCalendar !== 'function' || !Solar) throw new Error('만세력 계산 기능을 불러오지 못했습니다. 페이지를 새로고침해 주세요.');
    for (const key of ['year','month','day','hour','minute']) {
      if (!Number.isInteger(input[key])) throw new Error('년·월·일·시·분을 모두 정수로 입력해 주세요.');
    }
    const second = input.second === undefined ? 0 : input.second;
    if (!Number.isInteger(second)||second<0||second>59||input.hour<0||input.hour>23||input.minute<0||input.minute>59) throw new Error('시는 0~23, 분은 0~59로 입력해 주세요.');
    if (!['solar','lunar'].includes(input.mode)) throw new Error('양력 또는 음력을 선택해 주세요.');
    if (input.year<1949||input.year>2050) throw new Error('지원 범위는 양력 1950년 1월 1일~2050년 12월 31일입니다.');
    const calendar = new KoreanCalendar();
    const ok = input.mode==='lunar' ? calendar.setLunarDate(input.year,input.month,input.day,input.leap===true) : calendar.setSolarDate(input.year,input.month,input.day);
    if (!ok) throw new Error('존재하지 않는 날짜 또는 윤달입니다. 입력한 날짜를 확인해 주세요.');
    const solarDate = calendar.getSolarCalendar(), lunarDate = calendar.getLunarCalendar();
    if (input.mode==='lunar' && lunarDate.intercalation !== (input.leap===true)) throw new Error('해당 날짜에는 선택하신 윤달이 없습니다. 평달·윤달을 확인해 주세요.');
    if (solarDate.year<1950||solarDate.year>2050) throw new Error('변환한 양력 날짜가 지원 범위(1950~2050년)를 벗어났습니다.');
    const original = {...solarDate,hour:input.hour,minute:input.minute,second};
    const birth = resolveRecordedTime(wallMs(original));
    // 절입은 원래 출생 순간을 UTC+8 계산 소스에 맞춥니다. 경도 보정과 날짜 변경을 적용하지 않습니다.
    const yearMonthLunar = solarAtWall(birth.utc+480*MINUTE).getLunar();
    // 일주·시주는 서울 보정 시각을 사용합니다. 자시에서 두 기둥을 함께 바꾸는 단일 기준입니다.
    const correctedWall = birth.utc+SEOUL_LONGITUDE_MINUTES*MINUTE;
    const corrected = wallParts(correctedWall);
    const dayHour = solarAtWall(correctedWall).getLunar().getEightChar();
    dayHour.setSect(1);
    const dayStem = dayHour.getDayGan();
    const pairs = [yearMonthLunar.getYearInGanZhiExact(),yearMonthLunar.getMonthInGanZhiExact(),dayHour.getDay(),dayHour.getTime()];
    const pillarKeys = ['year','month','day','hour'], labels = ['년주','월주','일주','시주'];
    const pillars = pairs.map((ganZhi,i) => ({key:pillarKeys[i],label:labels[i],ganZhi,stem:character(ganZhi[0]),branch:character(ganZhi[1]),tenGod:i===2?'일간':tenGod(dayStem,ganZhi[0])}));
    const sajuDay = wallParts(correctedWall+(corrected.hour===23?24*60*MINUTE:0));
    const previousJie = termResult(yearMonthLunar.getPrevJie(false));
    const nextJie = termResult(yearMonthLunar.getNextJie(false));
    return {
      input:{...input,second},solarDate,lunarDate,original,utc:birth.utc,utcOffsetMinutes:birth.offset,
      corrected,correctionMinutes:birth.offset-SEOUL_LONGITUDE_MINUTES,sajuDay,
      dayChanged:dateText(sajuDay)!==dateText(solarDate),pillars,previousJie,nextJie,
      nearTerm:Math.min(Math.abs(birth.utc-previousJie.utc),Math.abs(nextJie.utc-birth.utc))<MINUTE,
      contemporaryStandard:birth.offset===540
    };
  }
  return {calculate,dateText,timeText,tenGod,offsetAt};
});
