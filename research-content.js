// 묵공 주석: 최신 학업·적성 원고, 작명 샘플과 대운·세운 공개용 수정본을 소개합니다.
(() => {
  const profiles={
    mentoring:{title:'AI 보조 멘토링 · 사계절의 길이',lead:'천문학 주제를 통해 개념을 구분하고 근거를 확인하는 AI 연구 보조 과정을 살펴봅니다.'},
    study:{title:'학업 및 적성',lead:'묵공식 배움·재능·진로 — 독립 분석과 방향 판단을 학습 실행·재검증으로 이어갑니다.',leadInIntroduction:true},
    naming:{title:'작명',lead:'이름의 뜻과 소리, 수리와 오행을 연결하여 삶의 방향을 풀이합니다.',leadInIntroduction:true},
    timing:{title:'대운·세운',lead:'대운과 세운의 흐름을 분석 사례로 살펴봅니다.',leadInIntroduction:true},
    'study/1':{title:'학업 및 적성 · 사례 1',lead:'학업 및 적성 · 2026년 병오(丙午)년 · 6년 분석의 1년차'},
    'study/2':{title:'학업 및 적성 · 사례 2',lead:'학업 및 적성 · 2029년 기유(己酉)년 · 6년 분석의 4년차'},
    'study/3':{title:'학업 및 적성 · 사례 3',lead:'학업 및 적성 · 2007년 정해(丁亥)년 · 6년 분석의 최종 6년차'},
    'timing/1':{title:'대운·세운 · 사례 1',lead:'신유대운과 2026년 병오세운 해설'}
  };
  // 묵공 주석: 승인한 홍보 문안과 공개용 분석 안내를 각 분야 상단에 표시합니다.
  const introductions={
    study:{title:'나의 적성은? 나에게 맞는 배움과 진로를 찾아보세요.',paragraphs:[
      '어떤 공부 방식이 나에게 맞을까요? 올해의 가능성을 어떻게 살리고, 부족한 점은 어떻게 보완할 수 있을까요?',
      '묵공의 학업·적성 분석은 출생년월일시를 바탕으로 배움의 방식과 잠재적성, 전공·진로의 가능성을 독립적으로 살펴봅니다. 15세부터 20세까지 6년 동안 해마다 이어지는 학업의 과제와 성장의 흐름을 분석합니다.',
      '먼저 해당 연도의 분석을 충분히 마친 뒤, 그 근거와 가능성·방향성을 판단하는 기준을 제시합니다. 이를 바탕으로 상향·하향·기회와 부담 병존 가운데 어떤 흐름이 우세한지 판정하며, 미리 정해 놓은 결론에 분석을 맞추지 않습니다.',
      '판정 수준에 맞춘 AI 학습 실행 프롬프트 3개를 제공합니다. 학생은 자신의 학습 상황과 과제·시간·실수 기록 등 현실자료를 직접 입력하여 부족한 점을 발견하고, 보완방법을 선택하여 실행합니다. 일정 기간 후 결과를 다시 확인하며 자신의 배움과 진로 준비를 구체화합니다.'
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
    'study-case-1':{title:'학업적성 사례 1 · 2026년 1년차 분석',count:11,width:1224,height:1584,prefix:'study-20261014-case-1-page-',padding:2,extension:'webp',pdfHref:'assets/public-pdfs/study-case-1.pdf'},
    'study-case-2':{title:'학업적성 사례 2 · 2029년 4년차 분석',count:11,width:1224,height:1584,prefix:'study-20261014-case-2-page-',padding:2,extension:'webp',pdfHref:'assets/public-pdfs/study-case-2.pdf'},
    'study-case-3':{title:'학업적성 사례 3 · 최종 6년차 분석',count:13,width:1224,height:1584,prefix:'study-20261014-case-3-page-',padding:2,extension:'webp',pdfHref:'assets/public-pdfs/study-case-3.pdf'},
    'timing-general':{title:'대운·세운 사례 1 · 일반인용',count:25,width:1132,height:1600,prefix:'timing-v15-general-page-',padding:2,extension:'webp',pdfHref:'assets/public-pdfs/timing-case-1-general.pdf'},
    'timing-expert':{title:'대운·세운 사례 1 · 전문가용',count:34,width:1132,height:1600,prefix:'timing-v15-expert-page-',padding:2,extension:'webp',pdfHref:'assets/public-pdfs/timing-case-1-expert.pdf'}
  };
  const publishedCases={
    study:[
      {id:'1',title:profiles['study/1'].lead,description:'방향 판단과 AI 학습 실행상담을 반영한 R4 1년차 분석입니다. 전체 11쪽을 읽으실 수 있습니다.'},
      {id:'2',title:profiles['study/2'].lead,description:'방향 판단과 AI 학습 실행상담을 반영한 R4 4년차 분석입니다. 전체 11쪽을 읽으실 수 있습니다.'},
      {id:'3',title:profiles['study/3'].lead,description:'최종 6년차 R3 원고입니다. 전체 13쪽을 읽으실 수 있습니다.'}
    ],
    timing:[{id:'1',title:'신유대운과 2026년 병오세운 사례',description:'일반인용 16쪽과 전문가용 25쪽을 차례로 읽으실 수 있습니다.'}]
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
    if(info.pdfHref){paragraph(example,'출생정보를 가린 공개용 PDF입니다. 아래 링크에서 전체 문서를 열거나 내려받으실 수 있습니다.','document-example-guide');const downloads=el('p','research-actions'),open=el('a','teal-button','출생정보 가림 PDF 열기'),download=el('a','teal-button','PDF 다운로드');open.href=info.pdfHref;open.target='_blank';open.rel='noopener';download.href=info.pdfHref;download.download='';downloads.append(open,download);example.append(downloads);host.append(example);return example;}
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
    paragraph(intro,'신유대운(2022~2031년)과 2026년 병오세운을 살펴본 해설입니다.','research-sample-lead');
    paragraph(intro,'일반인용 해설을 먼저 싣고, 그 분석의 이론과 근거를 담은 전문가용 해설을 이어서 소개합니다. 두 문서의 모든 쪽을 아래에서 읽으실 수 있습니다.');
    const jumps=el('nav','research-actions timing-jumps');jumps.setAttribute('aria-label','대운·세운 예제 바로가기');intro.append(jumps);host.append(intro);
    for(const [key,label,heading,description] of [
      ['timing-general','일반인용 읽기','일반인용 방향판단·AI 실행상담 · 전체 16쪽','일반인용은 전문가용의 분석 내용을 일상적인 말로 풀어 쓴 해설입니다. 대운과 세운의 흐름, 생활 영역별 점검과 실천 방향을 살펴보실 수 있습니다.'],
      ['timing-expert','전문가용 읽기','전문가용 방향판단·AI 실행상담 · 전체 25쪽','앞의 일반인용 해설은 이 전문가용에 제시된 이론과 분석 근거에 따라 작성했습니다. 전문가용에는 원국·오행·대운·세운을 살펴본 근거와 전문 용어를 담았습니다.']
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
    const process=section('분석에서 실행·재검증까지');
    table(process,'학업·적성 분석의 진행 순서',['단계','확인할 내용'],[
      ['1. 출생기반 독립 분석','출생정보를 바탕으로 해당 연도의 학업 흐름과 과제를 먼저 충분히 분석합니다.'],
      ['2. 가능성·방향성의 판단기준','분석 근거와 강화·약화 조건을 제시하고, 현실에서 확인할 신호를 정리합니다.'],
      ['3. 방향 판정','상향·하향·기회와 부담 병존 가운데 우세한 흐름과 그 조건을 설명합니다.'],
      ['4. AI 학습 실행 프롬프트 3개','판정 수준에 맞춰 학생의 현실자료를 입력할 질문과 보완·실행 과제를 제공합니다.'],
      ['5. 실행과 재검증','보완방법을 선택해 실천하고, 일정 기간 후 변화와 남은 과제를 다시 확인합니다.']
    ]);
    paragraph(process,'출생기반 분석을 먼저 마친 뒤 방향을 판단합니다. 학생이 입력하는 현실자료는 출생기반 판정을 거꾸로 맞추는 자료가 아니라, 부족한 점과 보완방법을 구체화하고 실행 결과를 재확인하는 자료입니다.');
    paragraph(process,'아래 세 사례의 원고에서 연도별 분석, 방향 판단과 실행 안내를 확인하실 수 있습니다.','research-source');host.append(process);
    const evidence=section('실제 경험을 이렇게 기록해 보세요');
    table(evidence,'잠재적성과 실제 배움의 경험을 대조하기',['관찰할 내용','기록할 질문'],[['관심·탐색','평가가 없어도 찾아본 주제와 스스로 넓혀 본 자료는 무엇인가요?'],['지속·재도전','흥미가 줄거나 어려움이 생긴 뒤에도 다시 선택한 활동은 무엇인가요?'],['행동·결과물','문제풀이·제작·실험·설명 가운데 무엇을 완성하고 수정했나요?'],['적합·성과','잘하는 활동과 다시 하고 싶은 활동이 같은가요? 학교생활과 선택에서 어떤 차이가 나타났나요?']]);
    paragraph(evidence,'묵공 주석: 출생기반 잠재분석과 실제 행동증거를 구별한 뒤 함께 읽습니다. 외부 진로 연구는 관심·행동·선택·성과를 확인하는 과정의 참고자료로 활용하며, 출생기반 판정식의 직접 근거와는 구별합니다.','research-source');host.append(evidence);
    paragraph(host,'묵공 주석: 2026년 10월 14일 제공 원고 기준 — 1년차·4년차 R4와 최종 6년차 R3 사례를 게시합니다. 실행과 재검증의 결과는 학생의 실제 기록을 통해 별도로 확인합니다.','research-source');
  }
  function studyCase(host,id) {
    const entry=publishedCases.study.find(item=>item.id===id);
    renderDocumentExample(host,'study-case-'+id,{heading:'<사례 '+id+'>',description:entry.description});
    const revision=id==='3'?'R3':'R4';
    paragraph(host,'묵공 주석: 2026년 10월 14일 제공한 '+revision+' 원고를 전체 게시하였습니다. 분석 내용과 편집은 업로드한 PDF를 기준으로 보존하였습니다.','research-source');
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
  function renderMentoring(host) {
    const intro=el('section','research-section mentoring-article');
    intro.append(el('h2','','사계절의 길이(천문학적 길이)'));
    paragraph(intro,'AI를 연구 보조도구로 활용할 때는 질문의 범위를 분명히 하고, 서로 다른 원인을 구분한 뒤, 자료로 사실을 확인하는 과정이 필요합니다. 이 글에서는 지구의 자전축 기울기와 타원 궤도가 사계절에 어떤 영향을 주는지 살펴봅니다.');
    host.append(intro);

    const cause=section('1. 사계절은 왜 생길까요?');
    paragraph(cause,'사계절이 생기는 주된 이유는 지구의 자전축이 기울어진 채 태양 주위를 공전하기 때문입니다. 지구의 자전축은 공전 궤도면에 수직인 방향에서 약 23.4° 기울어져 있습니다. 그 결과 한 해 동안 북반구와 남반구가 받는 햇빛의 각도와 낮의 길이가 달라집니다. 북반구가 태양 쪽으로 기울어 있을 때는 북반구의 여름이고, 반대쪽으로 기울어 있을 때는 겨울입니다. 남반구는 계절이 반대로 나타납니다.');
    paragraph(cause,'지구 궤도가 타원형이라는 사실도 계절을 이해할 때 중요하지만, 타원 궤도가 사계절을 만들어 내는 것은 아닙니다. 타원 궤도는 주로 천문학적 계절의 길이가 서로 달라지는 데 영향을 줍니다.');
    host.append(cause);

    const definition=section('2. 천문학에서는 계절을 어떻게 나눌까요?');
    paragraph(definition,'천문학적 계절은 지구에서 보이는 태양의 황경을 기준으로 춘분·하지·추분·동지를 경계로 나눕니다. 황경은 지구에서 본 태양의 겉보기 위치를 나타내는 좌표입니다.');
    table(definition,'천문학적 사계절의 기준',['구분','태양의 황경','북반구에서 시작하는 계절'],[
      ['춘분','0°','봄'],['하지','90°','여름'],['추분','180°','가을'],['동지','270°','겨울']
    ]);
    paragraph(definition,'춘분과 추분에는 태양의 직사광선이 적도 부근에 도달해 낮과 밤의 길이가 거의 같아집니다. 하지 무렵에는 태양의 직사광선이 북회귀선 부근에, 동지 무렵에는 남회귀선 부근에 도달합니다. 북반구에서는 하지에 낮이 가장 길고 동지에 밤이 가장 깁니다.');
    host.append(definition);

    const duration=section('3. 계절의 길이는 왜 서로 다를까요?');
    paragraph(duration,'지구는 태양 주위를 타원 궤도로 공전하며, 태양과 가까운 근일점 부근에서는 더 빠르게 움직이고 먼 원일점 부근에서는 더 느리게 움직입니다. 케플러의 제2법칙에 따르면 태양과 행성을 잇는 선은 같은 시간 동안 같은 면적을 쓸고 지나갑니다. 따라서 공전 궤도상의 위치에 따라 지구의 움직임이 빨라지거나 느려집니다.');
    paragraph(duration,'천문학적 계절은 황경이 90°씩 변하는 구간으로 나뉘지만, 지구가 각 구간을 지나는 데 걸리는 시간은 같지 않습니다. 북반구의 여름은 지구가 원일점 부근에서 상대적으로 느리게 움직이는 구간을 포함해 긴 편이고, 겨울은 근일점 부근에서 빠르게 움직이는 구간을 포함해 짧은 편입니다.');
    host.append(duration);

    const lengths=section('4. 계절별 대표 길이');
    paragraph(lengths,'현재 시기의 대표적인 근삿값으로 보면 북반구의 천문학적 계절은 다음과 같이 서로 길이가 다릅니다. 실제 계절 길이는 해당 연도의 춘분·하지·추분·동지 시각에 따라 조금씩 달라집니다.');
    table(lengths,'현재 시기 북반구 천문학적 계절의 대표 길이',['계절','시작과 끝','대표 길이'],[
      ['봄','춘분부터 하지까지','약 92.8일'],
      ['여름','하지부터 추분까지','약 93.6일'],
      ['가을','추분부터 동지까지','약 89.8일'],
      ['겨울','동지부터 다음 춘분까지','약 89.0일']
    ]);
    paragraph(lengths,'북반구에서는 여름이 겨울보다 대략 4.6~4.7일 긴 편입니다. 표의 값은 각각 반올림한 근삿값이며, 정확한 계절 길이는 각 연도의 천문 현상 시각을 기준으로 계산해야 합니다.');
    host.append(lengths);

    const points=section('5. 근일점과 원일점');
    paragraph(points,'지구는 보통 1월 초에 태양과 가장 가까운 근일점을 지나고, 7월 초에 가장 먼 원일점을 지납니다. 거리는 근일점에서 약 1억 4,710만 km, 원일점에서 약 1억 5,210만 km 정도이며 날짜와 거리는 해마다 조금씩 달라질 수 있습니다.');
    paragraph(points,'북반구에서는 태양과 가까운 시기가 겨울이고 먼 시기가 여름입니다. 그러므로 태양과의 거리만으로 계절의 더위와 추위를 설명할 수는 없습니다. 계절을 만드는 중심 원인은 자전축의 기울기이며, 타원 궤도와 공전 속도 차이는 계절의 길이에 영향을 주는 요소입니다.');
    host.append(points);

    const south=section('6. 남반구의 계절');
    paragraph(south,'남반구에서는 북반구와 계절이 반대로 나타납니다. 따라서 북반구 겨울에 해당하는 짧은 구간이 남반구의 여름이고, 북반구 여름에 해당하는 긴 구간이 남반구의 겨울입니다.');
    paragraph(south,'다만 실제 기온과 날씨는 바다와 대륙의 분포, 해류, 대기 순환 등에도 영향을 받습니다. 계절의 천문학적 길이만으로 어느 지역의 여름이 더 덥거나 겨울이 더 춥다고 판단해서는 안 됩니다.');
    host.append(south);

    const application=section('명리학 연구와 구분할 점');
    paragraph(application,'이 글에서 다루는 사계절은 춘분·하지·추분·동지를 경계로 삼는 천문학적 계절입니다. 명리학에서 월령과 절입을 적용하는 기준은 별도의 체계이므로, 두 기준을 같은 것으로 혼동하지 않도록 구분해야 합니다. AI의 답변을 연구에 활용할 때도 먼저 용어와 기준을 확인하고, 질문한 분야에 맞는 근거를 따져 보는 것이 중요합니다.');
    host.append(application);

    const practice=section('AI와 함께 확인해 볼 질문');
    const prompts=[
      '이 글에서 사계절이 생기는 원인과 계절 길이가 달라지는 원인을 각각 한 문장으로 구분해 설명해 주세요.',
      '특정 연도의 춘분·하지·추분·동지 시각을 찾아 각 천문학적 계절의 길이를 계산하고, 위 대표 근삿값과 비교해 주세요.',
      '천문학적 계절과 명리학의 월령·절입 기준이 어떻게 다른지, 두 기준을 혼동하면 어떤 해석 오류가 생길 수 있는지 설명해 주세요.'
    ];
    const list=el('ol','mentoring-prompts');
    prompts.forEach(text=>list.append(el('li','',text)));
    practice.append(list);host.append(practice);

    const references=section('참고 자료');
    const refs=[
      ['NASA Space Place · What Causes the Seasons?','https://spaceplace.nasa.gov/seasons/en/'],
      ['U.S. Naval Observatory · The Seasons and the Earth’s Orbit','https://aa.usno.navy.mil/faq/seasons_orbit'],
      ['NOAA NCEI · Meteorological Versus Astronomical Seasons','https://www.ncei.noaa.gov/news/meteorological-versus-astronomical-seasons'],
      ['NASA Science · Chapter 2: Reference Systems','https://science.nasa.gov/learn/basics-of-space-flight/chapter2-1/']
    ];
    const links=el('ul','research-source-list');
    refs.forEach(([label,url])=>{const li=el('li'),a=el('a','',label);a.href=url;a.target='_blank';a.rel='noopener noreferrer';li.append(a);links.append(li);});
    references.append(links);
    paragraph(references,'묵공 주석: 천문학적 정의와 공전 궤도에 관한 자료를 확인하고, 천문학적 계절과 명리학의 월령·절입 기준을 구별하여 정리했습니다.','research-source');
    host.append(references);
  }
  function renderSeasonalTerms(host) {
    const basics=section('1. 24절기는 태양의 황경을 기준으로 합니다');
    paragraph(basics,'24절기(二十四節氣)는 지구에서 보이는 태양의 겉보기 황경을 기준으로 한 해를 24개 지점으로 나눈 체계입니다. 황경은 황도 위에서 태양의 위치를 각도로 나타낸 값이며, 춘분점을 0°로 삼습니다. 황경이 15°씩 바뀔 때마다 절기 하나가 돌아오므로 한 절기 사이의 간격은 대략 15일입니다. 다만 지구의 공전 속도가 일정하지 않아 날짜 간격이 매번 정확히 같지는 않습니다.');
    paragraph(basics,'춘분에서 다음 춘분까지의 평균 간격인 회귀년(태양년)은 약 365일 5시간 48분 45초, 즉 365.2422일입니다. 24절기는 이 태양년 동안 황경이 15°씩 달라지는 지점을 따라 배치됩니다.');
    paragraph(basics,'태양이 실제로 지구 주위를 도는 것은 아닙니다. 지구가 공전하기 때문에 지구에서 본 태양이 황도 위를 이동하는 것처럼 보이며, 이 겉보기 위치가 24절기의 기준이 됩니다.');
    paragraph(basics,'지구의 자전축은 공전 궤도면에 수직인 방향에서 약 23.4° 기울어져 있습니다. 이 기울기로 북반구와 남반구가 받는 햇빛의 각도와 낮의 길이가 달라져 계절이 생깁니다. 24절기는 이 계절의 흐름을 태양의 위치로 표시하며, 계절을 만드는 직접 원인은 지구와 태양 사이의 거리 변화가 아니라 자전축의 기울기입니다.');
    host.append(basics);

    const kinds=section('2. 절(節)과 중기(中氣)');
    paragraph(kinds,'24개의 지점은 전통 역법에서 절(節) 12개와 중기(中氣) 12개로 번갈아 배열됩니다. 일상적으로는 24개 전체를 통틀어 절기라고 부르지만, 절과 중기는 구분되는 명칭입니다. 입춘·입하·입추·입동은 각 계절의 시작을 알리는 절이고, 춘분·하지·추분·동지는 계절의 가운데 지점에 해당하는 중기입니다.');
    paragraph(kinds,'태양의 황경은 춘분 0°, 하지 90°, 추분 180°, 동지 270°입니다. 춘분과 추분 무렵에는 태양의 중심이 천구의 적도를 지나며, 하지와 동지 무렵에는 태양의 적위가 각각 북쪽과 남쪽으로 가장 크게 치우칩니다.');
    table(kinds,'절과 중기의 대표 구분',['구분','해당 절기'],[
      ['절(節) · 12개','입춘, 경칩, 청명, 입하, 망종, 소서, 입추, 백로, 한로, 입동, 대설, 소한'],
      ['중기(中氣) · 12개','우수, 춘분, 곡우, 소만, 하지, 대서, 처서, 추분, 상강, 소설, 동지, 대한']
    ]);
    host.append(kinds);

    const figureSection=section('3. 지구 공전 궤도 그림');
    const figure=el('figure','mentoring-figure');
    const image=el('img');
    image.src='assets/mentoring/earth-orbit-24-terms.png';
    image.alt='황경 0°, 90°, 180°, 270°와 춘분·하지·추분·동지의 관계를 단순화해 나타낸 지구 공전 궤도 개념도';
    image.loading='lazy';image.decoding='async';
    figure.append(image);
    figure.append(el('figcaption','','그림 1. 지구 공전 궤도와 사계절의 위치를 설명하는 개념도. 실제 궤도 모양과 태양의 초점 위치, 거리 비율을 정밀하게 나타낸 도면은 아닙니다.'));
    figureSection.append(figure);
    paragraph(figureSection,'그림에 표시된 황경은 지구에서 관측한 태양의 겉보기 위치를 기준으로 합니다. 따라서 그림 속 지구의 위치를 태양 황경과 같은 각도의 실제 지구 공전 좌표로 읽어서는 안 됩니다. 실제 지구 궤도는 원에 매우 가까운 타원이며, 태양은 타원의 한 초점에 있습니다.');
    host.append(figureSection);

    const calendar=section('4. 2025년 24절기 시각');
    paragraph(calendar,'다음 표는 한국천문연구원 달력자료에 수록된 2025년 절기 시각을 한국 표준시(KST)로 정리한 것입니다. 태양의 황경 값은 각 절기의 기준점이며, 시각은 태양이 해당 황경에 도달하는 순간입니다. 날짜와 시각은 해마다 달라집니다.');
    table(calendar,'2025년 24절기와 태양 황경',['절기','구분','태양 황경','날짜·시각(KST)'],[
      ['소한','절','285°','1월 5일 11:33'],['대한','중기','300°','1월 20일 05:00'],
      ['입춘','절','315°','2월 3일 23:10'],['우수','중기','330°','2월 18일 19:07'],
      ['경칩','절','345°','3월 5일 17:07'],['춘분','중기','0°','3월 20일 18:01'],
      ['청명','절','15°','4월 4일 21:49'],['곡우','중기','30°','4월 20일 04:56'],
      ['입하','절','45°','5월 5일 14:57'],['소만','중기','60°','5월 21일 03:55'],
      ['망종','절','75°','6월 5일 18:57'],['하지','중기','90°','6월 21일 11:42'],
      ['소서','절','105°','7월 7일 05:05'],['대서','중기','120°','7월 22일 22:29'],
      ['입추','절','135°','8월 7일 14:52'],['처서','중기','150°','8월 23일 05:34'],
      ['백로','절','165°','9월 7일 17:52'],['추분','중기','180°','9월 23일 03:19'],
      ['한로','절','195°','10월 8일 09:41'],['상강','중기','210°','10월 23일 12:51'],
      ['입동','절','225°','11월 7일 13:04'],['소설','중기','240°','11월 22일 10:36'],
      ['대설','절','255°','12월 7일 06:05'],['동지','중기','270°','12월 22일 00:03']
    ]);
    paragraph(calendar,'묵공 주석: 한국천문연구원 2025 달력자료 페이지는 해당 자료가 공식 월력요항 발표 전 참고자료라고 안내합니다. 분 단위의 공식 역서 값이 필요한 연구·달력 작업에서는 우주항공청이 발표한 해당 연도의 월력요항을 우선 확인해 주세요.','research-source');
    host.append(calendar);

    const lunar=section('5. 절기와 음력은 무엇이 다를까요?');
    paragraph(lunar,'24절기는 태양의 겉보기 위치를 기준으로 하고, 음력의 한 달은 달의 위상이 한 번 되풀이되는 주기를 기준으로 합니다. 한 삭망월은 평균 약 29.53일이며, 음력 12개월은 약 354.37일입니다. 이는 계절의 순환을 나타내는 태양년보다 약 10.9일 짧습니다.');
    paragraph(lunar,'달의 주기만으로 달력을 만들면 계절과 달의 날짜가 해마다 어긋나므로, 동아시아의 태음태양력은 윤달을 넣어 음력월과 계절의 흐름을 맞춥니다. 19년 동안 윤달을 7번 두는 방식은 그 차이를 줄이는 근사 주기이며, 윤달이 정확히 3년마다 돌아오는 것은 아닙니다. 전통 역법에서는 중기가 들지 않는 음력월을 윤달로 정하는 원칙도 사용합니다.');
    paragraph(lunar,'따라서 24절기를 음력 날짜와 같은 것으로 보거나, 매년 양력의 같은 날짜에 고정된다고 이해하면 안 됩니다. 절기는 태양 위치로 계산되므로 해마다 시각이 달라지고, 양력 날짜가 하루 정도 앞뒤로 달라질 수 있습니다.');
    host.append(lunar);

    const application=section('명리학 연구에서 구분할 점');
    paragraph(application,'일반적인 사주명리의 월주 경계를 살필 때는 24절기 전체가 아니라 입춘·경칩·청명·입하·망종·소서·입추·백로·한로·입동·대설·소한의 12개 절이 드는 시각을 기준으로 삼습니다. 날짜만으로 경계를 정하지 말고 해당 연도의 절입 시각을 확인해야 합니다. 달력의 절·중기 구분과 명리학의 적용 기준을 함께 확인하면 용어와 계산 경계를 혼동하는 일을 줄일 수 있습니다.');
    host.append(application);

    const references=section('참고 자료');
    const refs=[
      ['한국천문연구원 · 2025년 달력자료(24절기)','https://astro.kasi.re.kr/kor/life/post/calendarData?search_year=2025'],
      ['한국천문연구원 · 월력요항 안내','https://astro.kasi.re.kr/kor/life/post/almanac'],
      ['한국천문연구원 · 2025년도 월력요항 발표 안내','https://www.kasi.re.kr/publication/post/newsMaterial/30071?cPage=8'],
      ['U.S. Naval Observatory · The Tropical Year','https://aa.usno.navy.mil/faq/asa_glossary'],
      ['NASA · Facts About Earth (자전축 기울기와 계절)','https://science.nasa.gov/earth/facts/']
    ];
    const links=el('ul','research-source-list');
    refs.forEach(([label,url])=>{const item=el('li'),link=el('a','',label);link.href=url;link.target='_blank';link.rel='noopener noreferrer';item.append(link);links.append(item);});
    references.append(links);host.append(references);
  }

  function renderSeasonalFoods(host) {
    const premise=section('1. 절기와 제철 식재료를 읽는 방법');
    paragraph(premise,'24절기는 태양의 황경을 기준으로 계절의 흐름을 표시하는 달력상의 기준입니다. 절기가 바뀌는 날이 전국의 날씨나 농수산물 출하 시점을 똑같이 바꾸는 것은 아닙니다. 실제 제철은 지역의 기후, 재배·어획 방식, 그해 날씨와 유통 여건에 따라 달라집니다.');
    paragraph(premise,'따라서 절기마다 하나의 음식이나 특정 지역의 대표 음식을 정답처럼 붙이기보다, 그 무렵 구하기 쉬운 식재료를 살펴 식탁에 다양하게 활용하는 편이 알맞습니다. 아래 목록은 전통적으로 정해진 절식 목록이 아니라 계절별 식재료를 떠올리기 위한 메뉴 아이디어입니다.');
    host.append(premise);

    const foods=section('2. 24절기별 식탁 아이디어');
    table(foods,'계절에 따라 살펴볼 식재료와 음식 예시',['계절·절기','식탁 아이디어(예시)'],[
      ['봄 · 입춘','달래·냉이 나물, 봄나물밥'],['봄 · 우수','봄동 겉절이, 무나물'],
      ['봄 · 경칩','미나리무침, 쑥국'],['봄 · 춘분','딸기, 봄나물 비빔밥'],
      ['봄 · 청명','바지락국, 미나리전'],['봄 · 곡우','두릅·취나물 무침, 녹차'],
      ['여름 · 입하','열무김치, 보리밥'],['여름 · 소만','감자조림, 오이무침'],
      ['여름 · 망종','완두콩밥, 보리 음식'],['여름 · 하지','오이냉국, 토마토'],
      ['여름 · 소서','수박, 참외'],['여름 · 대서','옥수수, 가지볶음'],
      ['가을 · 입추','복숭아, 옥수수'],['가을 · 처서','포도, 감자 요리'],
      ['가을 · 백로','배, 버섯 요리'],['가을 · 추분','밤밥, 고구마'],
      ['가을 · 한로','사과, 무 요리'],['가을 · 상강','배추·무 반찬, 새우 요리'],
      ['겨울 · 입동','배추김치, 무국'],['겨울 · 소설','귤, 고구마'],
      ['겨울 · 대설','굴국, 시래기밥'],['겨울 · 동지','팥죽'],
      ['겨울 · 소한','귤, 배추국'],['겨울 · 대한','시래기나물, 따뜻한 콩 요리']
    ]);
    paragraph(foods,'표의 식재료는 계절을 감각적으로 살펴보기 위한 일반적인 예시입니다. 실제 구매 때는 원산지와 생산·어획 시기, 신선도와 가격을 함께 확인하고, 알레르기나 개인의 건강 상태에 맞춰 선택하세요.');
    host.append(foods);

    const traditions=section('3. 세시 음식과 지역 음식문화');
    paragraph(traditions,'절기와 관련된 전통 음식은 지역과 시대에 따라 다르게 전해집니다. 한국민속대백과사전은 입춘 음식으로 궁중의 오신반, 민가의 세생채, 함경도의 명태순대 등을 소개합니다. 동지에는 팥죽을 쑤어 나누어 먹던 풍속이 전해집니다. 이 사례들은 각 절기의 음식문화가 하나의 전국 공통 메뉴로만 설명되지 않음을 보여 줍니다.');
    paragraph(traditions,'반면 “입추에는 어느 지역의 전어”, “한로에는 어느 지역의 도토리 음식”처럼 24절기마다 특정 지역 음식을 일대일로 연결하려면 지역별 문헌이나 조사 자료가 필요합니다. 근거가 확인되지 않은 조합은 전통으로 단정하지 않고, 계절에 따라 즐길 수 있는 음식 제안과 구분하는 것이 좋습니다.');
    host.append(traditions);

    const care=section('4. 건강 정보와 식품 안전');
    paragraph(care,'달래가 간 기능을 강화한다거나 특정 차가 알레르기를 예방한다는 식으로 개별 음식에 질병 예방·치료 효과를 단정하기는 어렵습니다. 제철 음식은 식재료를 다양하게 접하는 방법으로 소개하고, 건강한 식생활은 여러 식품군을 균형 있게 먹는 원칙과 개인별 필요를 중심으로 살펴보세요.');
    paragraph(care,'기온이 높아지는 시기에는 계절 음식 선택과 별도로 식품 안전을 챙겨야 합니다. 식품의약품안전처는 흐르는 물에 비누로 30초 이상 손 씻기, 날음식과 조리음식 구분, 충분히 익혀 먹기, 조리기구 세척·소독, 냉장·냉동 보관 온도 지키기 등을 안내합니다.');
    host.append(care);

    const refs=section('참고 자료');
    const links=el('ul','research-source-list');
    [
      ['한국민속대백과사전 · 입춘','https://folkency.nfm.go.kr/topic/입춘'],
      ['한국민속대백과사전 · 동지팥죽','https://folkency.nfm.go.kr/topic/detail/3649?keyword=팥죽&pageType=search'],
      ['식품의약품안전처 · 식중독 예방 6대 요령','https://www.mfds.go.kr/brd/m_827/view.do?seq=3609'],
      ['농식품 올바로 · 건강식단관리','https://koreanfood.rda.go.kr/kfi/mgnNewDietQuality/DietQualityEvaluation'],
      ['한국농수산식품유통공사 · 봄철 딸기와 제철 농수산물','https://www.at.or.kr/article/apko362000/view.action?articleId=30815&at.condition.currentPage=290&at.condition.currentPage=477'],
      ['한국농수산식품유통공사 · 여름철 수박','https://www.at.or.kr/article/apko362000/view.action?articleId=31847&at.condition.currentPage=255']
    ].forEach(([label,url])=>{const item=el('li'),link=el('a','',label);link.href=url;link.target='_blank';link.rel='noopener noreferrer';item.append(link);links.append(item);});
    refs.append(links);
    paragraph(refs,'묵공 주석: 건강 효능을 단정한 표현과 근거가 확인되지 않은 절기별 지역 음식 배정을 정리하고, 세시 음식의 문헌 기록과 일반적인 제철 식재료 아이디어를 구분했습니다.','research-source');
    host.append(refs);
  }

  function renderMentoringIndex(host) {
    const preface=section('서문 | AI를 연구 보조도구로 활용한다는 것');
    paragraph(preface,'AI는 연구자의 경험과 판단을 대신하지 않습니다. 대화를 나누는 것만으로 연구 기준을 완전히 익히거나 답변의 정확성을 보장하는 것도 아닙니다. 그러나 질문을 구체적으로 세우고, 답변을 자료와 대조해 검토하며, 확인된 기준과 자료를 정리해 다시 활용하면 연구의 생각을 넓히고 표현을 다듬는 데 도움을 받을 수 있습니다.');
    paragraph(preface,'이 메뉴에는 명리학 연구 과정에서 AI의 답변을 그대로 받아들이기보다, 용어와 근거를 확인하고 묵공의 연구 기준에 따라 수정·보완한 내용을 기록합니다. AI는 연구를 돕는 도구로 활용하며, 해석과 최종 판단은 연구자가 맡습니다.');
    host.append(preface);

    const sectionNode=el('section','mentoring-index');
    const heading=el('h2','','게시글');
    const list=el('ul','mentoring-article-list');
    [
      ['사계절의 길이(천문학적 길이)','content.html#mentoring/season-length'],
      ['24절기의 개념','content.html#mentoring/seasonal-terms'],
      ['24절기별 제철 음식','content.html#mentoring/seasonal-foods']
    ].forEach(([title,url])=>{const item=el('li'),link=el('a','',title);link.href=url;item.append(link);list.append(item);});
    sectionNode.append(heading,list);host.append(sectionNode);
  }
  function renderArticle(container,key) {const article=el('div','research-article research-'+key.split('/')[0]);({mentoring:renderMentoring,'mentoring/season-length':renderMentoring,'mentoring/seasonal-terms':renderSeasonalTerms,'mentoring/seasonal-foods':renderSeasonalFoods,study,naming,timing,'study/1':host=>studyCase(host,'1'),'study/2':host=>studyCase(host,'2'),'study/3':host=>studyCase(host,'3'),'timing/1':timingCase1})[key](article);container.append(article);}
  window.MukgongResearch=Object.freeze({profiles,renderArticle});
})();
