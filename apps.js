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
  // 묵공 주석: 각 항목에 이해·생활 적용·실천을 돕는 질문 3개를 제공합니다.
  const questions = {
    disposition:[
      '이 분석에서 설명하는 제 기본성향을 강점과 주의할 점으로 나누어 쉬운 말로 풀어 주세요.',
      '분석에 나타난 성향이 일상에서 어떻게 드러날 수 있는지 상황 예시 3개를 들어 주세요. 제 경험과 비교할 질문도 함께 해 주세요.',
      '이 분석을 참고하여 강점을 살리고 보완할 부분을 살펴보는 일주일 실천 계획을 만들어 주세요.'
    ],
    emotion:[
      '이 분석에서 감정을 표현하고 갈등에 반응하는 방식에 관한 내용을 찾아 쉽게 설명해 주세요.',
      '가까운 사람과의 대화에서 이 성향이 도움이 되는 점과 오해를 만들 수 있는 점을 상황 예시로 설명해 주세요.',
      '제가 최근 겪은 갈등을 먼저 물어본 뒤, 제 감정을 정리할 질문 3개와 상대에게 차분하게 전할 문장 예시를 만들어 주세요.'
    ],
    community:[
      '이 분석에서 친구·사회·단체 관계의 핵심을 정리하고, 편안하게 관계를 맺는 방식에 관해 설명해 주세요.',
      '모임이나 단체에서 발휘할 수 있는 강점과 무리하기 쉬운 부분을 이 분석과 연결하여 설명해 주세요.',
      '새로운 모임에 참여할 때 이 분석을 참고하여 첫 만남, 역할 선택, 관계 유지에서 실천할 작은 행동을 제안해 주세요.'
    ],
    ambition:[
      '이 분석에 나타난 목표의식과 성취 성향을 설명하고, 강점과 스스로 점검할 부분을 정리해 주세요.',
      '제가 원하는 성공의 모습을 구체적으로 생각해 볼 수 있도록 이 분석과 연결한 질문 5개를 만들어 주세요.',
      '저의 현재 목표와 활용할 수 있는 시간을 먼저 물어본 뒤, 이 분석을 참고하여 우선순위와 한 달 실천 계획을 함께 정리해 주세요.'
    ],
    career:[
      '이 분석이 제시하는 적성과 진로의 핵심을 쉽게 설명하고, 잘 맞을 수 있는 활동의 특성을 정리해 주세요.',
      '제가 관심 있는 진로 두 가지와 관련 경험을 먼저 물어본 뒤, 이 분석을 참고하여 흥미·강점·현실 조건을 비교할 질문을 만들어 주세요.',
      '이 분석에서 제시된 적성을 실제 경험과 비교해 보고 싶습니다. 비용과 부담이 적은 체험 3가지와 체험 후 돌아볼 질문을 제안해 주세요.'
    ],
    wealth:[
      '이 재물운 분석을 돈을 대하는 태도와 관리 습관의 관점에서 쉬운 말로 설명해 주세요.',
      '이 분석을 참고하여 소비·저축·예산 관리에서 스스로 점검할 질문 5개를 만들어 주세요.',
      '일주일 동안 지출 습관을 관찰하며 이 분석과 제 실제 생활을 비교하고 싶습니다. 간단한 기록 항목과 점검 방법을 제안해 주세요.'
    ],
    work:[
      '이 분석을 직장·조직에서의 역할과 사업 활동의 성향이라는 관점에서 쉽게 설명해 주세요.',
      '조직에 속하여 일할 때와 스스로 일을 추진할 때 나타날 수 있는 강점과 어려움을 이 분석과 연결하여 설명해 주세요.',
      '제 업무 경험과 관심 있는 일을 먼저 물어본 뒤, 이 분석을 참고하여 살펴볼 일의 방향과 작게 시도할 방법을 제안해 주세요.'
    ],
    rhythm:[
      '이 분석을 활동·휴식·생활 습관의 관점에서 설명하고, 일상에서 돌아볼 부분을 정리해 주세요.',
      '제 수면·식사·활동 시간을 먼저 물어본 뒤, 이 분석을 참고하여 무리 없이 살펴볼 생활 리듬 점검표를 만들어 주세요.',
      '일주일 동안 수면·활동·휴식을 기록하며 제 생활 리듬을 살펴보고 싶습니다. 간단한 기록 양식과 자기관찰 질문을 제안해 주세요.'
    ],
    balance:[
      '이 생활 보완 분석의 핵심 제안을 쉽게 설명하고, 바로 실천할 수 있는 것과 시간을 두고 살펴볼 것을 나누어 주세요.',
      '제 생활환경과 바꾸고 싶은 습관을 먼저 물어본 뒤, 이 분석에서 지금 우선해 볼 보완 방향을 한두 가지 고르도록 도와주세요.',
      '이 분석을 참고하여 작은 습관 한 가지를 일주일 동안 실천하고 싶습니다. 꾸준히 할 구체적인 행동과 확인 방법을 제안해 주세요.'
    ],
    mentoring:[
      '이 최종 멘토링의 핵심을 세 문장으로 요약하고, 제 상황에 맞춰 더 생각해 볼 질문을 만들어 주세요.',
      '최종 멘토링과 관련 항목의 분석을 연결하여 반복되는 강점과 주의할 점을 정리해 주세요. 필요한 다른 항목의 내용이 있다면 먼저 요청해 주세요.',
      '제가 가장 고민하는 주제를 먼저 물어본 뒤, 이 멘토링을 참고하여 앞으로 한 달 동안 실천할 작은 목표와 점검 방법을 함께 정리해 주세요.'
    ]
  };
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
  function questionPrompt(topic,question) {
    return [
      `「출생시를 몰라도」 앱의 「${topic.title}」 결과를 이해하고 싶습니다.`,
      '함께 첨부한 해당 항목의 앱 결과 PDF·화면 또는 아래 분석 내용을 기준으로, 쉬운 한국어와 존댓말로 답해 주세요.',
      '앱에 적힌 내용과 설명을 위한 예시·제안을 구분해 주세요. 출생시각·시주를 추정하거나 제공되지 않은 사주 정보를 추가하지 마세요.',
      '자료가 없거나 읽기 어려우면 먼저 해당 내용을 요청해 주세요.',
      '', '[질문]', question, '',
      `[앱의 「${topic.title}」 분석 결과]`,
      '(해당 항목의 결과 PDF 또는 앱 화면을 함께 첨부하거나, 분석 내용을 이곳에 붙여넣어 주세요.)'
    ].join('\n');
  }
  function topicQuestions(topic) {
    const details=element('details','app-topic-questions');
    const summary=element('summary','','GPT 질문 3개');details.append(summary);
    const list=element('ol','app-question-items');
    questions[topic.id].forEach((question,index)=>{
      const item=element('li');item.append(element('p','app-question-text',question));
      const button=element('button','app-question-copy','질문 복사');button.type='button';
      button.setAttribute('aria-label',`${topic.title} 질문 ${index+1} 복사`);
      const manual=element('textarea','app-question-manual');manual.readOnly=true;manual.hidden=true;manual.rows=7;
      manual.setAttribute('aria-label',`${topic.title} 질문 ${index+1} 전체 프롬프트`);
      const status=element('p','app-question-status');status.setAttribute('aria-live','polite');
      button.addEventListener('click',async()=>{
        const prompt=questionPrompt(topic,question);button.disabled=true;
        try {
          await navigator.clipboard.writeText(prompt);manual.hidden=true;
          status.textContent='질문을 복사했습니다. ChatGPT에 해당 결과 PDF를 첨부하고 질문을 붙여넣으세요.';
        } catch {
          manual.value=prompt;manual.hidden=false;manual.focus();manual.select();
          status.textContent='아래 질문을 직접 복사하여 해당 앱 결과 PDF·분석 내용·화면과 함께 사용하세요.';
        } finally {button.disabled=false;}
      });
      item.append(button,status,manual);list.append(item);
    });details.append(list);return details;
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
    const questionGuide=element('div','app-question-guide');
    questionGuide.append(element('h3','','앱 결과를 더 깊이 이해하고 싶다면'));
    questionGuide.append(element('p','','각 항목의 「GPT 질문 3개」를 열고 궁금한 질문을 복사하세요. 복사한 질문과 앱에서 저장한 해당 결과 PDF를 ChatGPT에 전달해 주세요. 분석 내용이나 앱 화면으로도 질문할 수 있습니다.'));
    const usageLink=element('a','app-question-usage-link','PDF 저장과 질문 사용법 보기');usageLink.href='#app-question-usage';
    usageLink.addEventListener('click',event=>{event.preventDefault();document.getElementById('app-question-usage').scrollIntoView({behavior:'smooth',block:'start'});});
    questionGuide.append(usageLink);
    analysis.append(questionGuide);
    const cards=element('ol','app-analysis-grid');
    analysisTopics.forEach((topic,index)=>{
      const card=element('li','app-analysis-card');card.dataset.analysisId=topic.id;
      const summary=element('div','app-analysis-summary');summary.append(element('h3','',topic.title),element('p','',topic.description));
      card.append(element('span','app-analysis-number',String(index+1).padStart(2,'0')),summary,topicQuestions(topic));cards.append(card);
    });analysis.append(cards);
    // 묵공 주석: 묵공님이 안내한 인쇄·PDF 저장 순서를 10개 항목의 끝에 설명합니다.
    const usage=element('section','app-question-guide app-question-usage');usage.id='app-question-usage';
    usage.setAttribute('aria-labelledby','app-question-usage-title');
    const usageHeading=element('h3','','항목별 질문 3개, 이렇게 사용하세요');usageHeading.id='app-question-usage-title';usage.append(usageHeading);
    const usageSteps=element('ol','app-question-usage-steps');
    [
      ['앱에서 분석 항목 열기','앱을 설치한 뒤 생년월일과 성별을 입력하고, 궁금한 항목을 엽니다. 예를 들어 「기본성향」을 선택합니다.'],
      ['PDF 파일로 저장하기','분석 화면 아래의 「인쇄하기」를 누릅니다. 인쇄 화면에서 「PDF 파일로 저장」을 선택하고, 파일 이름과 저장 위치를 정해 저장합니다.'],
      ['홈페이지에서 질문 복사하기','이 페이지에서 같은 항목의 「GPT 질문 3개」를 펼친 뒤, 원하는 질문의 「질문 복사」를 누릅니다. 먼저 질문 한 개를 골라 사용하시면 됩니다.'],
      ['ChatGPT에 파일과 질문 보내기','ChatGPT 대화를 열고 저장한 PDF 파일을 첨부합니다. 복사한 질문을 입력란에 붙여넣고, 파일 첨부를 확인한 뒤 함께 전송합니다.']
    ].forEach(([title,text])=>{
      const step=element('li');step.append(element('h4','',title),element('p','',text));usageSteps.append(step);
    });usage.append(usageSteps);
    usage.append(element('p','app-question-usage-example','예: 「기본성향」 결과 PDF를 첨부하고 「기본성향」의 첫 번째 질문을 붙여넣어 전송합니다.'));
    usage.append(element('p','','답변을 읽은 뒤 두 번째·세 번째 질문을 이어서 보내거나, 자신의 상황과 경험을 추가하며 자유롭게 질문하실 수 있습니다. 다른 항목을 질문할 때에는 해당 결과 PDF도 함께 첨부해 주세요.'));
    analysis.append(usage);body.append(analysis);
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
  window.MukgongApps=Object.freeze({profile,analysisTopics,screenshots,questions,renderIntro});
})();
