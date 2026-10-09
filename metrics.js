// 묵공 주석: 환율은 공개 일일 자료, 방문 현황은 외부 서버에 저장된 페이지 조회 횟수입니다.
// 로컬 미리보기에서는 집계하지 않으며, 상세 화면의 새로 확인 버튼도 방문 수를 올리지 않습니다.
(() => {
  const exchangeSources = [
    'https://latest.currency-api.pages.dev/v1/currencies/usd.min.json',
    'https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/usd.min.json'
  ];
  const counterUrl = 'https://mhkim217.github.io/mukgong-life-timing/?visits-start=20261010';
  const counterStart = '2026-10-10';
  const counterApi = 'https://hitscounter.dev/api/';
  const countPublicVisit = location.protocol === 'https:' && location.hostname === 'mhkim217.github.io' && location.pathname.startsWith('/mukgong-life-timing/');
  const number = new Intl.NumberFormat('ko-KR');
  const money = new Intl.NumberFormat('ko-KR', {minimumFractionDigits:2, maximumFractionDigits:2});
  const state = {
    exchange:{loading:true, data:null, error:''},
    visitors:{loading:true, data:null, error:'', warning:''}
  };
  let exchangeTask, visitorTask, recorded = false;
  const koreanDay = () => {
    const parts = new Intl.DateTimeFormat('en-US', {timeZone:'Asia/Seoul',year:'numeric',month:'2-digit',day:'2-digit'}).formatToParts(new Date());
    const part = key => parts.find(item => item.type === key).value;
    return `${part('year')}-${part('month')}-${part('day')}`;
  };
  const displayDate = day => day.replaceAll('-', '.');
  const validDay = value => typeof value === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(value) && new Date(`${value}T00:00:00Z`).toISOString().slice(0,10) === value;
  const validCount = value => Number.isSafeInteger(value) && value >= 0;
  function setText(selector, value) {
    document.querySelectorAll(selector).forEach(element => {element.textContent = value;});
  }
  async function readJson(url) {
    const controller = new AbortController();
    // 묵공 주석: 첫 집계 응답에 약 16초가 걸리는 경우를 확인하여 20초까지 기다립니다. 본문은 즉시 표시됩니다.
    const timer = setTimeout(() => controller.abort(), 20000);
    try {
      const response = await fetch(url, {signal:controller.signal,cache:'no-store',credentials:'omit',referrerPolicy:'no-referrer'});
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      return await response.json();
    } finally {clearTimeout(timer);}
  }
  function paint() {
    const exchange = state.exchange;
    const visitors = state.visitors;
    const rates = exchange.data?.rates;
    setText('[data-exchange-short]', rates ? `1 USD = ${money.format(rates.usd)}원` : exchange.loading ? '환율 확인 중…' : '환율 연결 확인 필요');
    setText('[data-exchange-date]', exchange.data ? `${displayDate(exchange.data.date)} 기준 · ${exchange.error ? '이전 조회값' : '일일 환율'}` : '버튼을 눌러 자세히 보기');
    for (const code of ['usd','eur','jpy','cny']) {
      setText(`[data-exchange-${code}]`, rates ? `${money.format(rates[code])}원` : exchange.loading ? '확인 중…' : '확인할 수 없음');
    }
    setText('[data-exchange-status]', exchange.loading ? '환율을 확인하고 있습니다.' : exchange.error || `자료 기준일: ${displayDate(exchange.data.date)} · 금액 단위: 대한민국 원`);
    const visit = visitors.data;
    setText('[data-visitors-short]', visit ? `오늘 ${number.format(visit.today)}회 · 누적 ${number.format(visit.total)}회` : visitors.loading ? '방문 집계 확인 중…' : '방문 집계 연결 확인 필요');
    setText('[data-visitors-date]', visit ? `${displayDate(visit.day)} · ${visitors.error ? '이전 조회값' : '한국 시간 기준'}` : '버튼을 눌러 집계 방법 보기');
    setText('[data-visitors-today]', visit ? `${number.format(visit.today)}회` : visitors.loading ? '확인 중…' : '확인할 수 없음');
    setText('[data-visitors-total]', visit ? `${number.format(visit.total)}회` : visitors.loading ? '확인 중…' : '확인할 수 없음');
    setText('[data-visitors-status]', visitors.loading ? '방문 집계를 확인하고 있습니다.' : visitors.error || `${displayDate(visit.day)} · 한국 시간 기준${visitors.warning ? ` / ${visitors.warning}` : ''}`);
    for (const key of ['exchange','visitors']) {
      document.querySelectorAll(`[data-metric-refresh="${key}"]`).forEach(button => {
        button.disabled = state[key].loading;
        button.textContent = state[key].loading ? '확인 중…' : '새로 확인';
      });
    }
  }
  function refreshExchange() {
    if (exchangeTask) return exchangeTask;
    state.exchange.loading = true; state.exchange.error = ''; paint();
    exchangeTask = (async () => {
      for (const url of exchangeSources) {
        try {
          const result = await readJson(url);
          if (!validDay(result.date) || result.date > koreanDay()) throw new Error('Invalid rate date');
          const usd = result.usd;
          if (!usd || !['krw','eur','jpy','cny'].every(code => Number.isFinite(usd[code]) && usd[code] > 0)) throw new Error('Invalid rates');
          state.exchange.data = {date:result.date,rates:{usd:usd.krw,eur:usd.krw/usd.eur,jpy:100*usd.krw/usd.jpy,cny:usd.krw/usd.cny}};
          return;
        } catch (_) { /* 묵공 주석: 한 제공 경로가 실패하면 같은 자료의 다른 제공 경로를 한 번 확인합니다. */ }
      }
      state.exchange.error = state.exchange.data ? '새 자료를 확인하지 못했습니다. 아래 기준일의 이전 조회값을 표시합니다.' : '환율을 불러오지 못했습니다. 잠시 후 새로 확인해 주세요.';
    })().finally(() => {state.exchange.loading=false;exchangeTask=null;paint();});
    return exchangeTask;
  }
  function refreshVisitors(recordVisit = false) {
    if (visitorTask) return visitorTask;
    state.visitors.loading = true; state.visitors.error = ''; state.visitors.warning = ''; paint();
    visitorTask = (async () => {
      if (recordVisit && !recorded) {
        recorded = true;
        const params = new URLSearchParams({url:counterUrl,tz:'Asia/Seoul',output:'json'});
        try {await readJson(`${counterApi}hit?${params}`);}
        catch (_) {
          // 묵공 주석: 통신 실패 때 서버에 이미 기록되었을 수도 있으므로 증가 요청을 재시도하지 않습니다.
          state.visitors.warning = '이번 조회의 기록 여부는 확인하지 못했습니다.';
        }
      }
      try {
        const params = new URLSearchParams({url:counterUrl});
        const result = await readJson(`${counterApi}history?${params}`);
        if (!validCount(result.total_hits) || !Array.isArray(result.history)) throw new Error('Invalid counter');
        const day = koreanDay();
        let today = 0;
        for (const entry of result.history) {
          if (!validDay(entry.hit_date) || !validCount(entry.hit_count)) throw new Error('Invalid history');
          // 묵공 주석: 제공처의 첫 기록만 UTC 날짜로 저장되는 동작을 실제 응답으로 확인했습니다.
          // 이 전용 집계는 한국 시간 10월 10일에 시작하므로 첫 UTC 날짜(10월 9일)를 시작일에 합산합니다.
          // 서버의 숫자는 변경하지 않으며 이후 일자는 tz=Asia/Seoul로 저장됩니다. is_today(UTC)는 사용하지 않습니다.
          const hitDay = entry.hit_date === '2026-10-09' ? counterStart : entry.hit_date;
          if (hitDay === day) today += entry.hit_count;
        }
        if (!validCount(today) || today > result.total_hits) throw new Error('Inconsistent counter snapshot');
        state.visitors.data = {today,total:result.total_hits,day};
      } catch (_) {
        state.visitors.error = state.visitors.data ? '새 집계를 확인하지 못했습니다. 이전 조회값을 표시합니다.' : '방문 집계를 불러오지 못했습니다. 잠시 후 새로 확인해 주세요.';
      }
    })().finally(() => {state.visitors.loading=false;visitorTask=null;paint();});
    return visitorTask;
  }
  function element(tag, className, text) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text) node.textContent = text;
    return node;
  }
  function valueCard(label, attribute) {
    const card=element('div','metric-detail-card');
    card.append(element('dt','',label));
    const value=element('dd','','확인 중…');value.setAttribute(attribute,'');card.append(value);
    return card;
  }
  function link(label, href) {
    const anchor=element('a','',label);anchor.href=href;anchor.target='_blank';anchor.rel='noopener noreferrer';return anchor;
  }
  function renderDetail(host, key) {
    const panel=element('section','metrics-detail');
    panel.setAttribute('aria-label',key==='exchange'?'환율 상세 안내':'방문 집계 상세 안내');
    const values=element('dl','metric-detail-values');
    const status=element('p','metric-detail-status');status.setAttribute(`data-${key}-status`,'');status.setAttribute('role','status');
    if (key==='exchange') {
      values.append(valueCard('미국 달러 · 1 USD','data-exchange-usd'),valueCard('유로 · 1 EUR','data-exchange-eur'),valueCard('일본 엔 · 100 JPY','data-exchange-jpy'),valueCard('중국 위안 · 1 CNY','data-exchange-cny'));
    } else {
      values.append(valueCard('오늘 방문 횟수','data-visitors-today'),valueCard('누적 방문 횟수','data-visitors-total'));
    }
    panel.append(values,status);
    const actions=element('div','metrics-detail-actions');
    const refresh=element('button','teal-button','새로 확인');refresh.type='button';refresh.dataset.metricRefresh=key;
    refresh.addEventListener('click',()=>key==='exchange'?refreshExchange():refreshVisitors());actions.append(refresh);
    actions.append(key==='exchange'?link('환율 자료 출처','https://github.com/fawazahmed0/exchange-api'):link('방문 집계 제공처','https://hitscounter.dev/'));
    if (key==='visitors') actions.append(link('개인정보 안내','privacy.html#website'));
    panel.append(actions);
    if (key==='exchange') {
      panel.append(element('p','metrics-explanation','위 금액은 공개 자료의 기준일에 해당하는 일일 참고 환율입니다. 실시간 시세나 은행의 현찰·송금 환율과는 차이가 있을 수 있습니다.'));
      panel.append(element('p','metrics-explanation','유로·엔·위안은 같은 자료의 미국 달러 기준 환율을 원화로 환산합니다. 엔은 100엔 기준으로 표시합니다.'));
    } else {
      panel.append(element('h2','','집계 방법'));
      panel.append(element('p','metrics-explanation',`집계 시작일: ${displayDate(counterStart)}. 이전 방문 기록은 포함하지 않습니다.`));
      panel.append(element('p','metrics-explanation','대문과 메뉴별 안내 페이지가 열린 횟수를 합산합니다. 새로고침하거나 다시 열면 추가로 집계되며, 메뉴별 안내 페이지 안에서 버튼만 이동할 때는 추가되지 않습니다. 아래의 「새로 확인」도 숫자를 올리지 않습니다.'));
      panel.append(element('p','metrics-explanation','「오늘」은 한국 시간 자정부터의 조회 횟수입니다. 실제 방문한 사람 수를 구분하는 통계는 아니며, 자동 접속과 운영·검수 과정의 접속도 포함될 수 있습니다.'));
      panel.append(element('p','metrics-explanation','환율 조회와 방문 집계는 외부 제공처에 연결됩니다. 이름·생년월일·분석 결과를 보내지 않으며, 인터넷 접속에 필요한 IP 주소 등의 요청 정보는 제공처에서 처리할 수 있습니다.'));
    }
    host.append(panel);paint();
    if (key==='visitors' && state.visitors.data?.day!==koreanDay()) refreshVisitors();
  }
  window.MukgongMetrics = {renderDetail,refreshExchange,refreshVisitors};
  paint();refreshExchange();refreshVisitors(countPublicVisit);
  let midnightTimer;
  function scheduleMidnight() {
    clearTimeout(midnightTimer);
    const now=Date.now(), next=new Date(now);
    next.setUTCHours(15,0,0,0); // 한국 자정은 UTC 오후 3시입니다.
    if (next.getTime()<=now) next.setUTCDate(next.getUTCDate()+1);
    midnightTimer=setTimeout(()=>refreshVisitors().finally(scheduleMidnight),next.getTime()-now+500);
  }
  scheduleMidnight();
  // 묵공 주석: 한국 자정과 절전 후 복귀 때 읽기만 갱신하며 방문 증가 요청은 보내지 않습니다.
  document.addEventListener('visibilitychange',()=>{
    if (!document.hidden && state.visitors.data?.day!==koreanDay()) refreshVisitors();
    if (!document.hidden) scheduleMidnight();
  });
})();
