// 묵공 주석: 2026-10-11 메뉴 개편과 확인된 연구 원고를 반영합니다. 미확정 비용·접수 내용을 임의로 채우지 않습니다.
(() => {
  const pending = title => ({title,status:'원고 준비 중',lead:'이 항목의 안내 내용을 순서대로 정리하고 있습니다.',paragraphs:['안내 원고가 확정되면 이 페이지에 추가하겠습니다.']});
  const topics = {
    board:{title:'공지사항',lead:'연구소 공식 소식과 이용 안내를 전해 드립니다.',paragraphs:[]},
    'free-board':{title:'자유게시판',lead:'방문자들이 자유롭게 의견을 나눌 수 있는 공간입니다.',status:'게시글 작성 기능 준비 중',paragraphs:['아직 등록된 게시글이 없습니다. 게시글 작성과 관리 기능을 준비하고 있습니다.']},
    disposition:{...window.MukgongDisposition.profile,paragraphs:[]},
    study:{...window.MukgongResearch.profiles.study,paragraphs:[]},
    naming:{...window.MukgongResearch.profiles.naming,paragraphs:[]},
    timing:{...window.MukgongResearch.profiles.timing,paragraphs:[]},
    'study/1':{...window.MukgongResearch.profiles['study/1'],paragraphs:[]},
    'study/2':{...window.MukgongResearch.profiles['study/2'],paragraphs:[]},
    'study/3':{...window.MukgongResearch.profiles['study/3'],paragraphs:[]},
    'timing/1':{...window.MukgongResearch.profiles['timing/1'],paragraphs:[]},
    publishing:{...window.MukgongPublishing.profile,paragraphs:[]},
    classics:{title:'고전연구',lead:'고전의 원문과 해석을 검토하며 연구 내용을 차례로 기록합니다.',paragraphs:[]},
    cases:{...pending('실제 분석 사례'),lead:'분석의 구성과 해설 방식을 소개할 예정입니다.',paragraphs:['공개할 실제 사례를 선정하고 내용을 확인한 후 추가하겠습니다.']},
    intake:{title:'전문 분석 안내·접수',lead:'신청서를 작성하여 이메일로 접수해 주세요.',paragraphs:[],links:[['고객센터 · 상담 접수','content.html#contact']]},
    about:{title:'묵공오행연구소',lead:'서비스 브랜드: 묵공 Life Timing',paragraphs:['묵공오행연구소는 출생 정보를 바탕으로 자신의 기본 성향과 생활의 흐름을 살펴보는 Mukgong Life Timing 시리즈를 연구·개발하고 있습니다.','전통 동양학 연구를 현대적인 데이터 구조와 이해하기 쉬운 설명으로 정리하는 것을 목표로 합니다.'],links:[['연구 활동','content.html#research'],['앱 안내','content.html#apps']]},
    apps:{...window.MukgongApps.profile,paragraphs:[]},
    research:{title:'연구 활동',lead:'앱 개발, 출판 작업, 고전연구, AI 보조 멘토링',paragraphs:['각 연구 활동의 안내를 아래 항목에서 확인하실 수 있습니다.'],links:[['1호앱 출시 및 후속앱 개발','content.html#apps'],['기본성향 · 1호앱 활용','content.html#disposition'],['출판 작업','content.html#publishing'],['고전연구','content.html#classics'],['명리학 연구를 위한 AI 보조 멘토링','content.html#mentoring']]},
    mentoring:{title:'명리학 연구를 위한 AI 보조 멘토링',lead:'AI를 연구 보조도구로 활용해 개념을 구분하고 근거를 확인하는 과정을 기록합니다.',paragraphs:[]},
    'mentoring/season-length':{title:'사계절의 길이(천문학적 길이)',lead:'천문학 주제를 통해 개념을 구분하고 근거를 확인하는 AI 연구 보조 과정을 살펴봅니다.',paragraphs:[]},
    'mentoring/seasonal-terms':{title:'24절기의 개념',lead:'태양의 황경을 기준으로 나누는 24절기의 원리와 달력에서의 쓰임을 살펴봅니다.',paragraphs:[]},
    'mentoring/seasonal-foods':{title:'24절기별 제철 음식',lead:'절기와 제철 식재료의 관계, 전통 음식문화와 안전한 식생활을 함께 살펴봅니다.',paragraphs:[]},
    contact:{title:'고객센터 · 상담 접수',lead:'학업·적성, 대운·세운, 작명 상담을 이메일로 접수합니다.',paragraphs:[],links:[['mhkim@paran.com','mailto:mhkim@paran.com'],['이용약관','terms.html'],['개인정보처리방침','privacy.html'],['데이터 삭제 안내','data-deletion.html']]},
    exchange:{title:'환율 안내',lead:'미국 달러·유로·엔·위안의 원화 환율을 기준일과 함께 확인합니다.',paragraphs:[]},
    visitors:{title:'방문 현황',lead:'오늘과 누적 방문 횟수를 한국 시간 기준으로 안내합니다.',paragraphs:[]}
  };
  function render() {
    const key = decodeURIComponent(location.hash.slice(1));
    document.body.classList.toggle('mentoring-article-page', key === 'mentoring/season-length');
    const moved={career:'study',relationship:'research',life:'research',thesis:'research'};
    if(moved[key]) {location.replace('content.html#'+moved[key]);return;}
    const noticeId = key.startsWith('notice/') ? key.slice(7) : null;
    const notice = window.MukgongNotices?.entries.find(entry => entry.id === noticeId);
    const classicId = key.startsWith('classics/') ? key.slice(9) : null;
    const classic = window.MukgongClassics?.articles.find(article => article.id === classicId);
    const caseParent=key.startsWith('study/')?'study':key.startsWith('timing/')?'timing':null;
    let topic = topics[key] || topics.research;
    if(caseParent&&!topics[key])topic={title:'사례를 찾을 수 없습니다',lead:'분야별 안내에서 게시된 사례를 확인해 주세요.',paragraphs:[],links:[[topics[caseParent].title+' 안내','content.html#'+caseParent]]};
    if (noticeId !== null) topic = notice ? {title:notice.title,lead:'묵공오행연구소 공지사항',paragraphs:[]} : {title:'공지사항을 찾을 수 없습니다',lead:'공지사항 목록에서 게시된 글을 확인해 주세요.',paragraphs:[],links:[['공지사항 전체 보기','content.html#board']]};
    if (classicId !== null) topic = classic ? {...classic,paragraphs:[]} : {title:'연구 글을 찾을 수 없습니다',lead:'고전연구 목록에서 게시된 글을 확인해 주세요.',paragraphs:[],links:[['고전연구 목록','content.html#classics']]};
    const back=document.querySelector('.back-link');
    back.href=classicId!==null?'content.html#classics':caseParent?'content.html#'+caseParent:key.startsWith('mentoring/')?'content.html#mentoring':key==='disposition'?'content.html#apps':'index.html';
    back.textContent=classicId!==null?'← 고전연구 목록으로':caseParent?'← '+topics[caseParent].title+' 안내로':key.startsWith('mentoring/')?'← 멘토링 목록으로':key==='disposition'?'← 1호앱 소개로':'← 대문으로 돌아가기';
    document.title = `${topic.title} | 묵공오행연구소`;
    document.getElementById('topicTitle').textContent = topic.title;
    const lead=document.getElementById('topicLead');lead.textContent=topic.leadInIntroduction?'':topic.lead;lead.hidden=Boolean(topic.leadInIntroduction);
    const status = document.getElementById('topicStatus'); status.replaceChildren();
    if (topic.status) {const badge=document.createElement('span');badge.className='draft-status';badge.textContent=topic.status;status.append(badge);}
    const copy=document.getElementById('topicContent');copy.replaceChildren();
    if (key === 'board') {const board=document.createElement('div');board.className='board-notices';window.MukgongNotices.renderList(board);copy.append(board);}
    if (notice) window.MukgongNotices.renderDetail(copy,notice);
    if (key === 'classics') window.MukgongClassics.renderIndex(copy);
    if (classic) window.MukgongClassics.renderArticle(copy,classic);
    if (key === 'apps') window.MukgongApps.renderIntro(copy);
    if (key === 'publishing') window.MukgongPublishing.renderIntro(copy);
    if (key === 'disposition') window.MukgongDisposition.renderArticle(copy);
    if (key === 'mentoring') window.MukgongResearch.renderMentoringIndex(copy);
    else if (Object.hasOwn(window.MukgongResearch.profiles,key) || key === 'mentoring/season-length' || key === 'mentoring/seasonal-terms' || key === 'mentoring/seasonal-foods') window.MukgongResearch.renderArticle(copy,key);
    if (key === 'exchange' || key === 'visitors') window.MukgongMetrics.renderDetail(copy,key);
    if (key === 'contact' || key === 'intake') {
      // 묵공 주석: 신청 내용 확인 후 비용·범위·일정을 협의하며 자동 접수·결제하지 않습니다.
      const heading=document.createElement('h2');heading.textContent='상담 접수 절차';copy.append(heading);
      const steps=document.createElement('ol');
      ['아래 신청서를 다운로드하여 작성합니다. 인쇄하여 작성한 뒤 스캔하거나 사진으로 첨부하셔도 됩니다.',
       '작성한 신청서를 mhkim@paran.com으로 보내 주세요. 동일 항목을 이메일 본문에 적어 보내셔도 됩니다.',
       '수신 후 1주일 이내에 접수 확인·보완사항·진행 가능 여부를 이메일로 회신합니다.',
       '비용·분석 범위·결과 제공 일정은 접수 내용을 확인한 후 별도로 협의합니다.'].forEach(text=>{const li=document.createElement('li');li.textContent=text;steps.append(li);});copy.append(steps);
      const download=document.createElement('a');download.className='teal-button';download.href='assets/forms/mukgong-consultation-form.pdf';download.download='묵공오행연구소_상담신청서.pdf';download.textContent='상담 신청서 다운로드 (PDF · 2쪽)';copy.append(download);
      const h=document.createElement('h2');h.textContent='신청서 작성 항목';copy.append(h);
      ['성명: 한글 이름과 한자(아는 경우), 성별, 신청인과 분석 대상의 관계',
       '출생정보: 생년월일시, 양력·음력, 음력 윤달 여부. 출생시를 모르면 “출생시 모름”으로 표시합니다.',
       '학업·적성: 분석 희망 나이 또는 기간. 기본 분석은 15~20세의 6년이며, 태어난 해에 1세를 부여하여 세는 나이입니다.',
       '대운·세운: 분석 희망 연도·기간과 중점 관심사(재물, 승진, 이사, 결혼, 궁합, 소송, 계약 등)',
       '작명: 출산 예정일 또는 실제 출생일, 성씨의 한글·한자, 희망 이름과 담고 싶은 뜻. 희망 이름이 작명 원칙에 맞지 않으면 해당 이름으로 작명을 진행하지 않습니다.',
       '연락처: 이메일은 필수이며 휴대전화는 선택입니다. 미성년자의 신청은 보호자가 작성하거나 보호자와 함께 진행해 주세요.',
       '묵공 주석: 1주일 이내 회신은 접수 안내 기준이며 최종 분석 결과 제공 기한은 별도 협의합니다. 신분증·주민등록번호는 보내지 마세요. 상담자료 공개는 별도의 동의를 받은 경우에만 진행합니다.'].forEach(text=>{const p=document.createElement('p');p.textContent=text;copy.append(p);});
    }
    topic.paragraphs.forEach(text => {const p=document.createElement('p');p.textContent=text;copy.append(p);});
    if (topic.links) {
      const links=document.createElement('nav');links.className='content-topic-links';links.setAttribute('aria-label','관련 안내');
      topic.links.forEach(([label,url])=>{const a=document.createElement('a');a.textContent=label;a.href=url;if(url.startsWith('https:')){a.target='_blank';a.rel='noopener noreferrer';}links.append(a);});
      copy.append(links);
    }
    if (render.hasRendered) {document.querySelector('.detail-page').scrollIntoView({block:'start',behavior:caseParent||key==='study'||key==='timing'?'instant':'auto'});}
    render.hasRendered=true;
  }
  window.addEventListener('hashchange',render);render();
})();
