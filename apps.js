// 묵공 주석: 1호앱 소개는 제공된 Google Play 설명과 묵공님의 10개 분석 항목을 기준으로 작성합니다.
(() => {
  const storeUrl = 'https://play.google.com/store/apps/details?id=com.mukgong.lifetiming';
  const profile = {
    title:'1호앱 「출생시를 몰라도」',
    lead:'생년월일과 성별만으로 나의 기본성향과 생활 리듬을 간편하게 살펴보세요.'
  };
  const analysisTopics = [
    {id:'disposition',title:'기본성향',description:'나의 판단 방식과 행동 특성, 일상에서 드러나는 기본성향을 살펴봅니다.'},
    {id:'emotion',title:'감정·관계',description:'감정을 표현하는 방식과 사람을 대하는 성향을 이해하는 데 참고합니다.'},
    {id:'community',title:'친구·사회·단체 관계',description:'친구, 사회, 단체 속에서 나타나는 관계의 특성과 어울리는 방식을 살펴봅니다.'},
    {id:'ambition',title:'사회적 성공과 야망',description:'목표를 세우고 성취를 추구하는 태도와 사회적 활동의 성향을 살펴봅니다.'},
    {id:'career',title:'적성·진로',description:'관심과 강점을 돌아보고 자신에게 어울리는 활동과 진로 방향을 탐색합니다.'},
    {id:'wealth',title:'재물운',description:'돈을 대하는 태도와 재물 관리의 성향을 이해하는 데 참고합니다.'},
    {id:'work',title:'관직운·사업운',description:'직장과 조직에서의 역할, 책임감과 사업 활동에 나타나는 성향을 살펴봅니다.'},
    {id:'rhythm',title:'건강·생활 리듬',description:'활동과 휴식의 균형, 일상의 생활 습관을 돌아보는 단서를 확인합니다.'},
    {id:'balance',title:'생활 보완',description:'강점을 살리고 부족한 부분을 보완하는 생활 방향을 살펴봅니다.'},
    {id:'mentoring',title:'최종 멘토링',description:'분석 내용을 종합하여 자기이해와 일상생활에 도움이 되는 멘토링을 확인합니다.'}
  ];
  // 묵공 주석: 실제 앱 화면이 제공되면 등록합니다. 화면이나 분석 결과를 임의로 제작하지 않습니다.
  // 각 항목: {id, src, width, height, alt, caption}. id가 input이면 상단, 나머지는 분석 항목 아래에 배치합니다.
  const screenshots = [];

  function element(tag,className,text) {
    const node=document.createElement(tag);
    if(className) node.className=className;
    if(text) node.textContent=text;
    return node;
  }
  function storeLink() {
    const link=element('a','app-store-badge');
    link.href=storeUrl;link.target='_blank';link.rel='noopener noreferrer';
    link.setAttribute('aria-label','Google Play에서 출생시를 몰라도 앱 보기 (새 창)');
    // 묵공 주석: 새로 제공된 선명한 원본을 사용하고, 이전 이미지 캐시와 구별합니다.
    const image=element('img');image.src='assets/apps/google-play-badge-uploaded.png?rev=20261009-clear';
    image.width=463;image.height=128;image.alt='Google Play에서 앱 보기';
    link.append(image);
    return link;
  }
  function screenshotFigure(screen) {
    const figure=element('figure','app-screen');
    const link=element('a','app-screen-link');link.href=screen.src;link.target='_blank';link.rel='noopener noreferrer';
    link.setAttribute('aria-label',screen.caption+' 크게 보기 (새 창)');
    const image=element('img');image.src=screen.src;image.width=screen.width;image.height=screen.height;
    image.alt=screen.alt;image.loading='lazy';image.decoding='async';
    link.append(image);figure.append(link,element('figcaption','',screen.caption));
    return figure;
  }
  function section(title,id) {
    const node=element('section','app-detail-section');
    node.setAttribute('aria-labelledby',id);
    const heading=element('h2','',title);heading.id=id;node.append(heading);
    return node;
  }
  function renderIntro(container) {
    const body=element('div','app-detail-body');
    const hero=element('section','app-detail-hero');hero.setAttribute('aria-labelledby','app-intro-title');
    const intro=element('div','app-detail-intro');
    intro.append(element('p','app-detail-eyebrow','Mukgong Life Timing · 첫 번째 앱'));
    const heading=element('h2','','출생시를 몰라도 괜찮습니다.');heading.id='app-intro-title';intro.append(heading);
    intro.append(element('p','','「출생시를 몰라도」는 출생시각 없이 생년월일과 성별로 이용하는 생활 멘토링 앱입니다.'));
    intro.append(element('p','','생년·월·일의 사주 정보를 바탕으로 기본성향부터 관계, 적성·진로, 생활 보완까지 10개 분야의 분석 내용을 확인할 수 있습니다.'));
    const features=element('ul','app-feature-tags');
    ['출생시각 없이 이용','양력·음력 지원','앱 내 광고 없음'].forEach(text=>features.append(element('li','',text)));
    intro.append(features);
    const actions=element('div','app-download-actions');
    actions.append(storeLink(),element('span','app-store-caption','Google Play에서 앱 보기'));
    intro.append(actions);
    const facts=element('aside','app-detail-facts');facts.setAttribute('aria-label','앱 이용 정보');
    const inputScreen=screenshots.find(screen=>screen.id==='input');
    if(inputScreen) facts.append(screenshotFigure(inputScreen));
    facts.append(element('p','app-detail-eyebrow','입력은 간단하게'));
    const list=element('dl');
    [['입력','생년월일 · 성별'],['달력','양력 또는 음력'],['결과','10개 분야의 분석'],['이용','회원가입 없이'],['개발','묵공오행연구소']].forEach(([label,value])=>{
      const row=element('div');row.append(element('dt','',label),element('dd','',value));list.append(row);
    });facts.append(list);hero.append(intro,facts);body.append(hero);

    const how=section('어떻게 이용하나요?','app-how-title');
    const steps=element('ol','app-input-steps');
    [['달력 선택','양력 또는 음력을 선택합니다.'],['정보 입력','생년월일과 성별을 입력합니다.'],['결과 확인','분석 결과를 항목별로 읽습니다.']].forEach(([title,text],index)=>{
      const step=element('li');step.append(element('span','app-step-number',String(index+1)),element('h3','',title),element('p','',text));steps.append(step);
    });how.append(steps,element('p','app-section-note','출생시각을 모르더라도 입력을 시작할 수 있습니다. 복잡한 가입 절차 없이 간편하게 이용하세요.'));body.append(how);

    const analysis=section('10개 분야에서 살펴보는 나의 모습','app-analysis-title');
    analysis.append(element('p','app-section-intro','성향과 관계를 이해하고, 적성과 생활 방향을 돌아보는 내용을 함께 제공합니다.'));
    const cards=element('ol','app-analysis-grid');
    analysisTopics.forEach((topic,index)=>{
      const card=element('li','app-analysis-card');card.dataset.analysisId=topic.id;
      card.append(element('span','app-analysis-number',String(index+1).padStart(2,'0')),element('h3','',topic.title),element('p','',topic.description));cards.append(card);
    });analysis.append(cards);body.append(analysis);
    const resultScreens=screenshots.filter(screen=>screen.id!=='input');
    if(resultScreens.length) {
      const gallery=section('앱에서 보는 분석 화면','app-screens-title');
      gallery.append(element('p','app-section-intro','이미지를 누르면 실제 앱 화면을 크게 볼 수 있습니다.'));
      const grid=element('div','app-screen-gallery');resultScreens.forEach(screen=>grid.append(screenshotFigure(screen)));
      gallery.append(grid);body.append(gallery);
    }

    const audience=section('이런 분께 권합니다','app-audience-title');
    const recommendations=element('ul','app-audience-list');
    ['출생시각을 몰라 기존 분석 앱 이용이 어려웠던 분','자신의 기본성향과 생활 리듬을 살펴보고 싶은 분','관계, 적성·진로, 일상생활의 방향을 돌아보고 싶은 분','간단하고 직관적인 자기이해 앱을 원하는 분'].forEach(text=>recommendations.append(element('li','',text)));
    audience.append(recommendations);body.append(audience);

    const note=section('앱 이용 안내','app-guide-title');note.classList.add('app-guide');
    note.append(element('p','','본 앱은 생년월일과 성별을 바탕으로 기본성향과 생활 리듬을 이해하는 데 도움을 주기 위한 생활 멘토링 앱입니다. 분석 내용은 자기이해와 일상생활을 위한 참고 자료로 활용해 주세요.'));
    note.append(element('p','app-guide-credit','개발: 묵공오행연구소 · 브랜드: Mukgong Life Timing'));
    const bottom=element('div','app-download-actions');bottom.append(storeLink(),element('span','app-store-caption','「출생시를 몰라도」 앱 살펴보기'));note.append(bottom);body.append(note);
    const next=element('p','app-followup-note','후속앱의 연구·개발 안내는 준비되는 대로 이 페이지에 추가하겠습니다.');body.append(next);
    container.append(body);
  }
  window.MukgongApps=Object.freeze({profile,analysisTopics,screenshots,renderIntro});
})();
