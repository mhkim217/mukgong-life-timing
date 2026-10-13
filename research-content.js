// 묵공 주석: 최신 학업·적성 원고, 작명 샘플과 대운·세운 공개용 수정본을 소개합니다.
(() => {
  const profiles={
    study:{title:'학업 및 적성',lead:'묵공식 배움·재능·진로 — 잠재적성을 살펴보고 실제 배움의 경험으로 확인합니다.',leadInIntroduction:true},
    naming:{title:'작명',lead:'이름의 뜻과 소리, 수리와 오행을 연결하여 삶의 방향을 풀이합니다.',leadInIntroduction:true},
    timing:{title:'대운·세운',lead:'대운과 세운의 흐름을 분석 사례로 살펴봅니다.',leadInIntroduction:true},
    'study/1':{title:'학업 및 적성 · 사례 1',lead:'2012년생 남학생 · 2026년 병오(丙午)년 · 6년 분석의 1년차'},
    'study/2':{title:'학업 및 적성 · 사례 2',lead:'2012년생 남학생 · 2029년 기유(己酉)년 · 6년 분석의 4년차'},
    'study/3':{title:'학업 및 적성 · 사례 3',lead:'1988년생 여성 · 2007년 정해(丁亥)년 · 6년 분석의 최종 6년차'},
    'timing/1':{title:'대운·세운 · 사례 1',lead:'1959년생 남성 — 신유대운과 2026년 병오세운 해설'}
  };
  // 묵공 주석: 승인한 홍보 문안과 공개용 분석 안내를 각 분야 상단에 표시합니다.
  const introductions={
    study:{title:'나의 적성은? 나에게 맞는 배움과 진로를 찾아보세요.',paragraphs:[
      '어떤 공부 방식이 나에게 맞을까요? 어떤 분야에서 나의 가능성을 키울 수 있을까요?',
      '묵공의 학업·적성 분석은 출생년월일시를 바탕으로 배움의 방식, 집중과 표현의 특징, 잠재적성, 전공과 진로의 방향을 살펴봅니다. 15세부터 20세까지 6년 동안 해마다 이어지는 학업의 과제와 성장의 흐름을 알기 쉽게 풀어, 학생이 자신을 이해하고 배움과 진로를 준비하는 길잡이를 제공합니다.'
    ],notes:[
      '본 분석은 학교성적을 반영하여 실제 진학 여부를 결정하는 도구가 아니라, 출생년월일시 정보를 바탕으로 잠재적성·학습성향·전공 및 진로 가능성을 분석하는 체계입니다. 학교성적, 학교기록, 희망전공, 실제 진학결과, 회고자료 등은 출생기반 적성판정의 입력값으로 사용하지 않으며, 이후 실제 발현·성과전환·검증을 확인하기 위한 별도 자료로 활용합니다. 따라서 본 결과는 특정 대학·학과의 합격 가능성을 판정하거나 실제 진학결정을 대신하는 자료가 아니며, 실제 진학은 성적·지원조건·희망·환경 등 현실자료와 함께 별도로 판단해야 합니다.',
      '위 소개에 표기한 나이는 만 나이가 아니며, 태어난 해에 1세를 부여하여 세는 나이입니다.'
    ]},
    naming:{title:'이름에 담긴 뜻, 삶에서 가꾸어 갈 방향을 살펴보세요.',paragraphs:[
      '이름은 한 사람을 부르고 기억하는 말입니다. 그 뜻과 소리에는 이름을 지어 준 마음과 성장에 대한 바람이 담겨 있습니다.',
      '묵공의 작명은 한자의 뜻과 소리, 획수에 따른 수리와 오행, 출생정보와의 조화를 함께 검토합니다. 이름의 구성과 의미를 알기 쉽게 풀이하여, 그 이름에 담은 뜻과 지향하는 삶의 방향을 전해 드립니다.'
    ],notes:[
      '작명 해설은 성명학의 전통 이론과 적용 기준에 따른 해석입니다. 이름만으로 성격이나 삶의 결과가 결정된다고 단정하거나, 성공·재물·건강 등을 보장하는 자료는 아닙니다. 이름에 담긴 뜻과 지향점을 이해하는 참고자료로 활용해 주세요. 실제 삶은 배움과 경험, 환경과 관계, 자신의 선택과 실천을 통해 가꾸어 갑니다.'
    ]},
    timing:{title:'삶의 흐름을 이해하고, 지금의 선택을 준비하세요.',paragraphs:[
      '계절에 따라 준비와 성장, 결실의 시간이 달라지듯, 삶에서도 때에 맞는 점검과 준비가 필요합니다.',
      '묵공의 대운·세운 분석은 출생년월일시를 바탕으로 긴 시기의 흐름과 해당 연도의 주제를 함께 살펴봅니다.',
      '대운에서는 10년간의 운의 흐름과 방향을 살피고, 세운에서는 내가 지향하고자 하는 그 해의 방향성과 주변 환경, 그리고 일과 관계·재물·생활 리듬에서 무엇을 살피고 보완하면 좋을지 알기 쉽게 풀어드립니다. 이를 통해 기회를 활용하고 어려움에 대비하는 방향을 안내합니다.'
    ],notes:[
      '대운·세운 해설은 제공된 출생정보와 전통 이론의 적용 기준에 따른 해석으로, 특정 사건의 발생이나 그 결과를 확정·보장하는 자료는 아닙니다. 같은 사주라도 환경과 경험, 개인의 선택과 노력에 따라 삶의 모습은 달라질 수 있습니다. 해설은 자신의 상황을 점검하고 준비하는 참고자료로 활용하시며, 중요한 결정은 실제 조건과 확인된 정보를 함께 살펴 판단해 주세요.'
    ]}
  };
  const studyItems=[
    ['나의 배움 방식','자신이 납득한 기준으로 탐색하고 실행하는 방식, 주도적으로 공부할 때의 강점과 필요한 기초훈련을 살펴봅니다. 이해한 내용을 실제 과제와 결과물로 연결하는 과정도 함께 확인합니다.'],
    ['이해와 표현의 특징','핵심 개념 → 근거 → 과정 → 결론 → 피드백의 순서로 생각을 정리합니다. 알고 있는 내용을 설명하고 새로운 조건에 적용한 뒤, 피드백을 받아 수정하는 방식까지 살펴봅니다.'],
    ['집중력이 살아나는 조건','공부한 시간뿐 아니라 무엇을 완성했는지를 봅니다. 계획·실행·수정을 반복하고, 이해·연습·재현·시간관리·검토 중 어느 단계에서 어려움이 생기는지 확인합니다.'],
    ['성적과 잠재력의 차이','출생정보를 바탕으로 읽은 잠재적성과 현재 학교성적을 구별합니다. 분석값이 높다고 특정 과목의 성적이 높다고 단정하지 않으며, 낮은 성적만으로 가능성을 배제하지도 않습니다.'],
    ['해당 연도의 배움과 성장의 흐름','전년도에 익힌 학습기술이 해당 연도에 어떻게 이어지는지 살펴봅니다. 관심과 선택, 지속성, 재도전, 결과물과 피드백을 기록하여 해석과 실제 경험의 일치·불일치를 확인합니다.'],
    ['시험·평가 대응','문제의 조건 확인 → 풀이 계획 → 답안 작성 → 단위·표기·논리 검토 → 오답원인 기록의 다섯 단계를 활용합니다. 시험 뒤에는 같은 실수가 줄었는지, 기록이 다음 학습의 수정으로 이어졌는지도 봅니다.'],
    ['재능·적성 우선순위','가까운 점수의 후보는 함께 유지하고, 어느 분야에서 자발적인 탐색과 반복 선택이 이어지는지 확인합니다. 수치 순위와 실제 행동증거를 구별한 뒤 주된 적성축과 보조 기능축을 정리합니다.'],
    ['전공 선택 방향','학과 이름보다 그 분야에서 요구하는 공부 방식을 비교합니다. 설계·구현, 정밀관찰·기록, 목표·자원 관리, 질문·가설·검증 가운데 어떤 활동을 오래 이어가며 결과물을 남기는지 살펴봅니다.'],
    ['20대 진로와 성장 방향','직업명을 미리 확정하기보다 구조 이해, 문제 분석, 정보 탐색, 실행·검증, 결과물 완성, 피드백 반영의 기능이 어떻게 결합하는지를 봅니다. 실제 관심과 지속적인 학습, 환경과의 적합성을 함께 확인합니다.'],
    ['주변 조언·성장 멘토링','부모·교사·멘토는 학생의 선택 근거와 막힌 단계를 함께 살펴봅니다. 필요한 기초훈련과 도구, 피드백을 연결하여 학생이 자신의 선택을 스스로 확인하고 보완하도록 돕습니다.']
  ];
  const namingSamples=[
    {id:'sohyeon',name:'박소현',hanja:'朴素賢',middle:'소',character:'素',meaning:'본디 소 · 흴 소',radical:'糸',elements:'木 · 金',subtitle:'소박하고 진실한 바탕 위에 지혜와 덕을 갖추어 가는 이름',paragraphs:[
      '본디 소(素)는 꾸밈없는 바탕과 순수함을, 어질 현(賢)은 어진 품성과 지혜로운 역량을 나타냅니다. 두 글자가 만나 겉으로 드러나는 화려함보다 내면의 충실함을 중시하고, 자신의 좋은 바탕을 배움과 실천으로 성숙시켜 가는 삶의 방향을 담고 있습니다.',
      '주운 16수는 사람들과 화합하여 신망을 얻고, 협력으로 일을 발전시키는 힘을 강조합니다. 진실한 태도와 차분한 판단으로 서로의 의견을 존중하며, 맡은 역할을 성실히 수행하고 성과를 나누는 자세로 풀이합니다.',
      '부운 25수는 재능과 기회를 살리면서도 겸손과 신중함을 지키는 태도로 주운을 뒷받침합니다. 약속과 신의를 소홀히 하지 않고, 다른 사람의 장점을 인정하며 자신의 부족함을 보완하는 방향입니다.',
      '외운 21수는 어려움 속에서도 뜻을 지키고, 경험을 통해 역량을 기르며 때에 맞게 자신의 길을 펼치는 방향으로 해석합니다. 소박함이 소극성에 머물지 않도록 필요한 때에는 의견을 분명하게 표현하고, 따뜻한 마음과 단단한 기준을 함께 갖추는 것이 좋겠습니다.',
      '총운 31수는 지혜와 어짊을 함께 기르고, 성실한 실천에 용기를 더하여 삶의 기반을 오래 지키는 의미를 담고 있습니다. 진실한 마음으로 주변과 조화를 이루고, 꾸준한 배움으로 판단력을 기르며 실력과 신뢰를 함께 쌓아 가는 이름이라 하겠습니다.'
    ]}
  ];
  const documentExamples={
    naming:{title:'박소현 작명 원고',count:9,width:1132,height:1600,prefix:'naming-page-',padding:1},
    'study-case-1':{title:'2012년생 남학생 · 2026년 1년차 학업운·전공적성 분석',count:11,width:1224,height:1584,prefix:'study-case-1-full-page-',padding:2,extension:'png'},
    'study-case-2':{title:'2012년생 남학생 · 2029년 4년차 학업운·전공적성 분석',count:11,width:1224,height:1584,prefix:'study-case-2-page-',padding:2,extension:'png'},
    'study-case-3':{title:'1988년생 여성 · 2007년 최종 6년차 학업운·전공적성 분석',count:13,width:1224,height:1584,prefix:'study-case-3-page-',padding:2,extension:'png'},
    'timing-general':{title:'신유대운·2026년 병오세운 — 일반인용',count:25,width:1132,height:1600,prefix:'timing-v15-general-page-',padding:2,extension:'webp'},
    'timing-expert':{title:'신유대운·2026년 병오세운 — 전문가용',count:34,width:1132,height:1600,prefix:'timing-v15-expert-page-',padding:2,extension:'webp'}
  };
  const publishedCases={
    study:[
      {id:'1',title:profiles['study/1'].lead,description:'모범 형식에 맞춘 1년차 분석입니다. 표지와 본문 10쪽, 전체 11쪽을 읽으실 수 있습니다.'},
      {id:'2',title:profiles['study/2'].lead,description:'모범 형식에 맞춘 4년차 분석입니다. 표지와 본문 10쪽, 전체 11쪽을 읽으실 수 있습니다.'},
      {id:'3',title:profiles['study/3'].lead,description:'세 사례의 모범 편집 기준으로 정한 최종 6년차 원고입니다. 표지를 포함한 전체 13쪽을 읽으실 수 있습니다.'}
    ],
    timing:[{id:'1',title:'1959년생 남성 — 신유대운(2022~2031년)과 2026년 병오세운',description:'일반인용 25쪽과 전문가용 34쪽을 차례로 읽으실 수 있습니다.'}]
  };
  const numberReadings=[
    ['주운(主運)','16','박 + 중간자','和衆得望 協力興業 以德領人 成果共享','화중득망 협력흥업 이덕령인 성과공향','사람들과 화합하여 신망을 얻고 협력하여 일을 발전시키며, 덕으로 사람을 이끌고 성과를 함께 나눕니다.'],
    ['부운(副運)','25','중간자 + 현','才機相遇 謙慎持身 修和補缺 穩進成事','재기상우 겸신지신 수화보결 온진성사','재능과 기회를 살리되 겸손하고 신중하게 처신합니다. 신의와 화합으로 부족함을 보완하며 안정적으로 일을 이루어 갑니다.'],
    ['외운(外運)','21','박 + 현','百折持志 歷難養成 待時舒展 春至花開','백절지지 역난양성 대시서전 춘지화개','여러 어려움에도 뜻을 지키고 경험을 통해 역량을 기릅니다. 때를 살펴 자신의 길을 펼치며 꾸준한 노력의 결실을 가꾸어 갑니다.'],
    ['총운(總運)','31','박 + 중간자 + 현','智仁兼養 勇於篤行 漸進有成 厚基長守','지인겸양 용어독행 점진유성 후기장수','지혜와 어짊을 함께 기르고 성실한 실천에 용기를 냅니다. 차츰 성과를 쌓으며 두터운 삶의 기반과 신뢰를 오래 지켜 갑니다.']
  ];
  function el(tag,className,text) {const node=document.createElement(tag);if(className)node.className=className;if(text!==undefined)node.textContent=text;return node;}
  function section(title) {const node=el('section','research-section');node.append(el('h2','',title));return node;}
  function paragraph(host,text,className='') {host.append(el('p',className,text));}
  function renderIntroduction(host,key) {
    const info=introductions[key],intro=el('section','research-promo'),heading=el('header','research-promo-heading'),title=el('h2','research-promo-title',info.title),subtitle=el('p','research-promo-subtitle',profiles[key].lead);
    title.id='researchPromoTitle-'+key;subtitle.id='researchPromoSubtitle-'+key;intro.setAttribute('aria-labelledby',title.id);intro.setAttribute('aria-describedby',subtitle.id);heading.append(title,subtitle);intro.append(heading);
    info.paragraphs.forEach(text=>paragraph(intro,text));
    const guide=el('aside','research-analysis-guide'),label=el('h3','','분석 안내');label.id='researchGuideTitle-'+key;
    guide.setAttribute('aria-labelledby',label.id);guide.append(label);info.notes.forEach(text=>paragraph(guide,text));intro.append(guide);host.append(intro);
  }
  function renderCaseList(host,key) {
    const list=section('분석 사례');list.classList.add('research-case-list');
    publishedCases[key].forEach(entry=>{
      const card=el('section','research-case-card');card.append(el('h3','','<사례 '+entry.id+'>'),el('p','research-sample-lead',entry.title));
      paragraph(card,entry.description);
      const link=el('a','teal-button','<사례 '+entry.id+'> 읽기');link.href='content.html#'+key+'/'+entry.id;card.append(link);list.append(card);
    });host.append(list);
  }
  function table(host,caption,headers,rows) {
    const wrap=el('div','research-table-wrap'),t=el('table','research-table');t.append(el('caption','',caption));
    const head=el('thead'),hr=el('tr');headers.forEach(text=>{const c=el('th','',text);c.scope='col';hr.append(c);});head.append(hr);t.append(head);
    const body=el('tbody');rows.forEach(row=>{const tr=el('tr');row.forEach((text,i)=>{const c=el(i===0?'th':'td','',text);if(i===0)c.scope='row';tr.append(c);});body.append(tr);});t.append(body);wrap.append(t);host.append(wrap);
  }
  // 묵공 주석: 업로드 원고의 모든 쪽을 본문에 표시하고, 확대도 같은 페이지 안에서 제공합니다.
  let documentViewer;
  function getDocumentViewer() {
    if(documentViewer)return documentViewer;
    const dialog=el('dialog','document-dialog');dialog.setAttribute('aria-labelledby','documentViewerTitle');
    const header=el('div','document-dialog-header'),title=el('h2');title.id='documentViewerTitle';
    const close=el('button','document-dialog-close','닫기');close.type='button';close.addEventListener('click',()=>dialog.close());header.append(title,close);
    const toolbar=el('div','document-dialog-toolbar'),zoom=el('button','document-dialog-zoom','글씨 크게 보기');zoom.type='button';
    const hint=el('p','','확대한 화면은 좌우로 움직여 읽으실 수 있습니다.');toolbar.append(zoom,hint);
    const scroll=el('div','document-dialog-scroll'),img=el('img','document-dialog-image');scroll.append(img);dialog.append(header,toolbar,scroll);document.body.append(dialog);
    let trigger,previousOverflow='';
    zoom.addEventListener('click',()=>{
      const enlarged=img.classList.toggle('is-enlarged');zoom.textContent=enlarged?'화면에 맞추기':'글씨 크게 보기';
      scroll.scrollTo({top:0,left:enlarged?(scroll.scrollWidth-scroll.clientWidth)/2:0,behavior:'instant'});
    });
    dialog.addEventListener('close',()=>{document.body.style.overflow=previousOverflow;if(trigger?.isConnected)trigger.focus({preventScroll:true});});
    window.addEventListener('hashchange',()=>{if(dialog.open)dialog.close();});
    documentViewer={open(source,button){
      trigger=button;previousOverflow=document.body.style.overflow;
      title.textContent=source.alt;img.src=source.src;img.alt=source.alt;img.width=source.width;img.height=source.height;
      img.classList.remove('is-enlarged');zoom.textContent='글씨 크게 보기';
      dialog.showModal();document.body.style.overflow='hidden';scroll.scrollTo({top:0,left:0,behavior:'instant'});
    }};
    return documentViewer;
  }
  function renderDocumentExample(host,key,options={}) {
    const info=documentExamples[key],example=section(options.heading||'<예제>');example.id=key+'-example';example.classList.add('document-example');
    example.append(el('h3','document-example-title',info.title));
    if(options.description)paragraph(example,options.description);
    paragraph(example,'아래에서 원고 전체를 바로 읽으실 수 있습니다. 글씨가 작으면 해당 쪽을 누른 뒤 ‘글씨 크게 보기’를 선택하세요.','document-example-guide');
    const pages=el('div','document-pages');
    for(let page=1;page<=info.count;page++){
      const figure=el('figure','document-page'),button=el('button','document-page-open'),img=el('img');button.type='button';
      img.src='assets/examples/'+info.prefix+String(page).padStart(info.padding,'0')+'.'+(info.extension||'jpg');
      img.alt=info.title+' — '+page+'쪽 / 전체 '+info.count+'쪽';img.width=info.width;img.height=info.height;img.loading='lazy';img.decoding='async';
      button.setAttribute('aria-label',page+'쪽 전체 화면으로 보기 · '+info.title);button.setAttribute('aria-haspopup','dialog');
      button.append(img);button.addEventListener('click',()=>getDocumentViewer().open(img,button));
      figure.append(button,el('figcaption','',page+' / '+info.count+'쪽 · 눌러서 전체 화면 보기'));pages.append(figure);
    }
    example.append(pages);host.append(example);return example;
  }
  function timing(host) {
    renderIntroduction(host,'timing');
    paragraph(host,'아래 사례에서 일반인용 해설을 먼저 읽고, 전문가용 해설을 통해 분석의 이론과 근거를 함께 확인하실 수 있습니다.');
    renderCaseList(host,'timing');
  }
  function timingCase1(host) {
    const intro=section('<사례 1>');intro.id='timing-example';
    paragraph(intro,'1959년생 남성의 신유대운(2022~2031년)과 2026년 병오세운을 살펴본 해설입니다.','research-sample-lead');
    paragraph(intro,'일반인용 해설을 먼저 싣고, 그 분석의 이론과 근거를 담은 전문가용 해설을 이어서 소개합니다. 두 문서의 모든 쪽을 아래에서 읽으실 수 있습니다.');
    const jumps=el('nav','research-actions timing-jumps');jumps.setAttribute('aria-label','대운·세운 예제 바로가기');intro.append(jumps);host.append(intro);
    for(const [key,label,heading,description] of [
      ['timing-general','일반인용 읽기','일반인용 방향판단·AI 실행상담 · 전체 25쪽','일반인용은 전문가용의 분석 내용을 일상적인 말로 풀어 쓴 해설입니다. 대운과 세운의 흐름, 생활 영역별 점검과 실천 방향을 살펴보실 수 있습니다.'],
      ['timing-expert','전문가용 읽기','전문가용 방향판단·AI 실행상담 · 전체 34쪽','앞의 일반인용 해설은 이 전문가용에 제시된 이론과 분석 근거에 따라 작성했습니다. 전문가용에는 원국·오행·대운·세운을 살펴본 근거와 전문 용어를 담았습니다.']
    ]){
      const example=renderDocumentExample(host,key,{heading,description});
      const title=example.querySelector('h2');title.id=key+'-title';title.tabIndex=-1;
      const button=el('button','teal-button',label);button.type='button';button.setAttribute('aria-controls',title.id);
      button.addEventListener('click',()=>{title.scrollIntoView({block:'start'});title.focus({preventScroll:true});});jumps.append(button);
    }
    paragraph(host,'묵공 주석: 같은 사례를 생활 속에서 읽기 쉬운 일반인용과 분석 근거를 살펴보는 전문가용으로 나누었습니다. 실제 상담에서는 의뢰인의 상황과 질문을 함께 확인하여 해설을 구체화합니다.','research-source');
  }
  function study(host) {
    renderIntroduction(host,'study');
    const items=section('10개 항목으로 이어지는 배움과 성장');
    studyItems.forEach(([title,text],i)=>{const item=el('section','research-topic');item.append(el('h3','',String(i+1).padStart(2,'0')+' · '+title));paragraph(item,text);items.append(item);});host.append(items);
    renderCaseList(host,'study');
    const example=section('2012년생 연속 분석의 구성 예시');
    paragraph(example,'2012년생을 대상으로 2026~2031년의 학업·전공적성 흐름을 연결한 원고입니다. 아래는 2031년 최종연도 분석의 핵심을 정리한 것입니다. 향후 흐름을 검토하는 연구 예시이며, 실제 6년간의 관찰 결과가 확인된 사례를 뜻하지 않습니다.');
    table(example,'출생기반 잠재적성 — 주요 후보군',['후보군','연구 모형의 잠재점수'],[['공학·기술·정보','62.70'],['생명·의학·정밀','62.62'],['경영·경제·전략','61.73'],['과학·연구','61.03']]);
    paragraph(example,'첫 두 후보의 차이는 0.08점으로 사실상 동률입니다. 숫자 순위만으로 한 전공을 확정하지 않고, 설계·구현과 정밀관찰·반복기록 중 어느 공부 방식이 실제로 지속되는지 확인합니다. 위 값은 묵공의 연구 모형에 따른 잠재점수이며, 학교성적이나 합격확률을 뜻하지 않습니다.');
    table(example,'6년 분석을 연결하는 성장 과제',['연도','해당 연도에 살펴볼 흐름'],[['2026년','표현·실행·완성의 출발'],['2027년','소통·조율과 기준 대응'],['2028년','탐구·정보 구조화와 심화'],['2029년','이해의 결과화·성과전환'],['2030년','현실환경·진로 기준 재검토'],['2031년','전문학습·장기전문성 연결']]);
    paragraph(example,'최종연도에는 핵심 후보 1~2개를 유지하며 심화학습 → 장기 프로젝트 → 멘토 피드백 → 전문성 준비로 연결합니다. 어떤 분야에서 스스로 탐색하고, 실패 뒤에도 다시 시도하며, 결과물을 수정했는지를 확인하는 것이 중심입니다.');host.append(example);
    const evidence=section('실제 경험을 이렇게 기록해 보세요');
    table(evidence,'잠재적성과 실제 배움의 경험을 대조하기',['관찰할 내용','기록할 질문'],[['관심·탐색','평가가 없어도 찾아본 주제와 스스로 넓혀 본 자료는 무엇인가요?'],['지속·재도전','흥미가 줄거나 어려움이 생긴 뒤에도 다시 선택한 활동은 무엇인가요?'],['행동·결과물','문제풀이·제작·실험·설명 가운데 무엇을 완성하고 수정했나요?'],['적합·성과','잘하는 활동과 다시 하고 싶은 활동이 같은가요? 학교생활과 선택에서 어떤 차이가 나타났나요?']]);
    paragraph(evidence,'묵공 주석: 출생기반 잠재분석과 실제 행동증거를 구별한 뒤 함께 읽습니다. 외부 진로 연구는 관심·행동·선택·성과를 확인하는 과정의 참고자료로 활용하며, 출생기반 판정식의 직접 근거와는 구별합니다.','research-source');host.append(evidence);
    paragraph(host,'설명의 정리 기준: 2026.09.17 수정보완판 R2 · 전공적성 분기 및 검증 모듈 v2.5 · M-CAVE v1.0 · 2012년생 2031년 최종연도 원고.','research-source');
  }
  function studyCase(host,id) {
    const entry=publishedCases.study.find(item=>item.id===id);
    renderDocumentExample(host,'study-case-'+id,{heading:'<사례 '+id+'>',description:entry.description});
    paragraph(host,id==='1'
      ?'묵공 주석: 다시 제공한 2012년생 남학생의 2026년 1년차 재분석본입니다. 1988년생 여성 6년차의 모범 편집 형식에 맞춰 원고 전체 11쪽을 게시하였습니다. 분석값과 해설은 제공한 원고를 기준으로 보존하였습니다.'
      :id==='2'
      ?'묵공 주석: 1988년생 여성 6년차 원고의 글꼴·제목 띠·상자 정렬·본문 간격을 기준으로 편집하였습니다. 4년차 원고의 분석 내용은 보존하였습니다.'
      :'묵공 주석: 묵공이 제공한 1988년생 여성의 2007년 丁亥년 최종 6년차 편집본입니다. 다른 두 사례의 편집 형식은 이 원고를 기준으로 맞추었습니다.', 'research-source');
  }
  function naming(host) {
    renderIntroduction(host,'naming');
    paragraph(host,'아래는 묵공이 작업한 박소현의 작명 총론과 작명 해제 샘플입니다. 글자의 뜻과 획수, 수리와 오행이 이름에 담긴 성장의 방향으로 어떻게 연결되는지 살펴보실 수 있습니다.');
    namingSamples.forEach(sample=>{
      const part=section(sample.name+'('+sample.hanja+')');part.id='naming-'+sample.id;
      paragraph(part,sample.subtitle,'research-sample-lead');
      sample.paragraphs.forEach(text=>paragraph(part,text));
      table(part,'작명 해제 — 글자의 뜻과 구성',['구분','성씨','중간자','끝 자'],[['한글','박',sample.middle,'현'],['한자','朴',sample.character,'賢'],['음훈','성씨 박',sample.meaning,'어질 현'],['획수','6','10','15'],['부수','木',sample.radical,'貝'],['자원오행 · 소리오행','木 · 水',sample.elements,'土 · 火']]);
      paragraph(part,'자원오행은 글자의 구성과 의미를 읽는 기준이며, 소리오행은 이름의 자음을 분류하는 기준입니다. 두 기준을 구별하여 위 표에 함께 표시했습니다.');host.append(part);
    });
    renderDocumentExample(host,'naming');
    const readings=section('박소현의 수리 해제');
    table(readings,'주운·부운·외운·총운',['구분','수리','구성'],numberReadings.map(row=>row.slice(0,3)));
    numberReadings.forEach(([title,number,composition,verse,reading,text])=>{
      const item=el('section','naming-reading');item.append(el('h3','',title+' '+number+'수'),el('p','naming-verse',verse),el('p','naming-reading-sound',reading));paragraph(item,text);readings.append(item);
    });host.append(readings);
    const comment=el('aside','research-note');comment.append(el('h2','','묵공 주석'));
    paragraph(comment,'소리오행은 모음을 제외하고 자음으로 구분하며, 초성과 받침의 순서로 표기합니다. 16자 해석문은 묵공의 현대 해석문으로, 고전의 직접 인용과 구별하여 읽습니다.');
    paragraph(comment,'작명 해제는 이름에 담은 뜻과 지향하는 성장의 방향을 설명합니다. 실제 삶에서는 배움과 경험, 관계와 선택을 통해 그 의미를 가꾸어 갑니다.');host.append(comment);
    paragraph(host,'예제 원고: 묵공이 제공한 「박소현」 PDF(2026.10.11). 설명의 정리 자료: 묵공의 박소현 작명 원고와 「묵공식 작명 절차와 적용 기준」.','research-source');
  }
  function renderArticle(container,key) {const article=el('div','research-article research-'+key.split('/')[0]);({study,naming,timing,'study/1':host=>studyCase(host,'1'),'study/2':host=>studyCase(host,'2'),'study/3':host=>studyCase(host,'3'),'timing/1':timingCase1})[key](article);container.append(article);}
  window.MukgongResearch=Object.freeze({profiles,renderArticle});
})();
