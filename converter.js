// 묵공 주석: 한 번의 계산 결과로 양·음력 날짜와 연월일시 표를 함께 갱신합니다.
(() => {
  'use strict';
  let converterMode = 'solar';
  let lastResult = null;
  const byId = id => document.getElementById(id);
  const form = byId('manseForm');
  const fields = ['year','month','day','hour','minute'];
  const resultBox = byId('converterResult');
  const errorBox = byId('converterError');
  const status = byId('resultStatus');
  const pad = value => String(value).padStart(2,'0');
  const readableDate = p => `${p.year}년 ${p.month}월 ${p.day}일`;
  function markPending() {
    resultBox.hidden = true;
    byId('resultPlaceholder').hidden = false;
    errorBox.classList.remove('show');
    status.textContent = '입력 후 만세력 보기를 눌러 주세요.';
    status.classList.remove('calculated');
    lastResult = null;
  }
  function setConverterMode(mode, preserveDate = true) {
    if (!['solar','lunar'].includes(mode)) return;
    const snapshot = lastResult;
    if (preserveDate && lastResult && mode!==converterMode) {
      const date = mode==='solar' ? lastResult.solarDate : lastResult.lunarDate;
      ['year','month','day'].forEach(key => { byId(key+'Input').value=date[key]; });
      byId('leapInput').checked = mode==='lunar' && lastResult.lunarDate.intercalation;
    }
    converterMode = mode;
    ['solar','lunar'].forEach(key => {
      byId(key+'Mode').classList.toggle('active',mode===key);
      byId(key+'Mode').setAttribute('aria-pressed',String(mode===key));
    });
    byId('leapRow').hidden=mode!=='lunar';
    byId('yearInput').min=mode==='lunar'?'1949':'1950';
    if (mode==='solar') byId('leapInput').checked=false;
    markPending();
    if (preserveDate && snapshot) lastResult = snapshot;
  }
  function renderPillars(result) {
    const table = document.createElement('table');
    table.className='pillar-table';
    const caption = document.createElement('caption');
    caption.className='sr-only';
    caption.textContent='사주표. 왼쪽부터 시주, 일주, 월주, 년주 순서입니다.';
    table.append(caption);
    const columns = [...result.pillars].reverse();
    const head = table.createTHead().insertRow();
    columns.forEach(pillar => {
      const th=document.createElement('th');
      th.scope='col'; th.textContent=pillar.label;
      th.dataset.pillar=pillar.key;
      if (pillar.key==='day') th.className='day-column';
      head.append(th);
    });
    const body = table.createTBody();
    const gods=body.insertRow(); gods.className='ten-gods';
    columns.forEach(pillar => {
      const cell=gods.insertCell(); cell.textContent=pillar.tenGod;
      if (pillar.key==='day') cell.className='day-column';
    });
    ['stem','branch'].forEach(key => {
      const row=body.insertRow(); row.className=key+'-row';
      columns.forEach(pillar => {
        const cell=row.insertCell();
        const char=pillar[key];
        cell.className=`element-${char.element}${char.bright?' element-bright':''}${pillar.key==='day'?' day-column':''}`;
        cell.dataset.pillar=pillar.key;
        const symbol=document.createElement('span');
        symbol.className='pillar-character'+(key==='stem'&&pillar.key==='day'?' day-master':'');
        symbol.textContent=char.hanja;
        const reading=document.createElement('span');
        reading.className='pillar-reading';
        reading.textContent=`${char.reading} · ${char.elementName}`;
        cell.append(symbol,reading);
      });
    });
    byId('pillarChart').replaceChildren(table);
  }
  function renderResult(result, sample) {
    const engine=window.MukgongManse;
    byId('solarResult').textContent=`양력 ${engine.dateText(result.solarDate)} ${pad(result.original.hour)}:${pad(result.original.minute)}`;
    byId('lunarResult').textContent=`음력 ${engine.dateText(result.lunarDate)} · ${result.lunarDate.intercalation?'윤달':'평달'}`;
    renderPillars(result);
    byId('correctionResult').textContent=`서울 계산 시각 ${engine.timeText(result.corrected)} · ${result.correctionMinutes}분 보정`;
    byId('dayChangeResult').textContent=result.dayChanged ? `출생 날짜는 그대로 두고, 자시 기준 ${readableDate(result.sajuDay)}의 일주를 적용합니다.` : '';
    byId('dayChangeResult').hidden=!result.dayChanged;
    byId('termResult').textContent=`월주 기준 절입: ${result.previousJie.name} ${engine.timeText(result.previousJie.recordedTime)}`;
    byId('historicalResult').hidden=result.contemporaryStandard;
    byId('historicalResult').textContent='당시 표준시·서머타임을 반영하여 현대와 다른 시간 보정을 적용했습니다.';
    byId('termBoundaryResult').hidden=!result.nearTerm;
    byId('termBoundaryResult').textContent='절입 경계 1분 이내입니다. 출생 시각의 초에 따라 년주·월주가 달라질 수 있습니다.';
    resultBox.hidden=false;
    byId('resultPlaceholder').hidden=true;
    errorBox.classList.remove('show');
    status.textContent=sample?'샘플 · 2016.08.03 22:00':'입력한 날짜로 계산됨';
    status.classList.add('calculated');
    lastResult=result;
  }
  function calculate(sample=false) {
    markPending();
    try {
      if (!window.MukgongManse) throw new Error('만세력 계산 기능을 불러오지 못했습니다. 페이지를 새로고침해 주세요.');
      const input={mode:converterMode,leap:byId('leapInput').checked};
      for (const key of fields) {
        const value=byId(key+'Input').value.trim();
        input[key]=value===''?NaN:Number(value);
      }
      renderResult(window.MukgongManse.calculate(input),sample);
    } catch (error) {
      errorBox.textContent=error.message||'입력한 날짜와 시각을 확인해 주세요.';
      errorBox.classList.add('show');
      status.textContent='입력값을 확인해 주세요.';
    }
  }
  form.addEventListener('submit',event => {event.preventDefault(); calculate();});
  form.addEventListener('input',markPending);
  byId('solarMode').addEventListener('click',()=>setConverterMode('solar'));
  byId('lunarMode').addEventListener('click',()=>setConverterMode('lunar'));
  byId('sampleButton').addEventListener('click',()=>{
    setConverterMode('solar',false);
    [2016,8,3,22,0].forEach((value,i)=>{byId(fields[i]+'Input').value=value;});
    calculate(true);
  });
  setConverterMode('solar',false);
  calculate(true);
})();
