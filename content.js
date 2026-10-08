// 묵공 주석: 메뉴 분류는 승인 시안 그대로 유지합니다. 미확정 원고·비용·사례를 임의로 채우지 않습니다.
(() => {
  const pending = title => ({title,status:'원고 준비 중',lead:'이 항목의 안내 내용을 순서대로 정리하고 있습니다.',paragraphs:['안내 원고가 확정되면 이 페이지에 추가하겠습니다.']});
  const topics = {
    board:{...pending('게시판'),lead:'공지와 연구소 소식을 안내하는 공간입니다.',paragraphs:['게시판의 운영 방식과 게시 내용을 준비하고 있습니다.']},
    disposition:pending('기본 성향'), study:pending('학업'), career:pending('20대 적성 및 진로'),
    timing:pending('대운·세운'), relationship:pending('건강 및 궁합'), life:pending('인생 총평'),
    publishing:pending('출판 작업'),
    cases:{...pending('실제 분석 사례'),lead:'분석의 구성과 해설 방식을 소개할 예정입니다.',paragraphs:['공개할 실제 사례를 선정하고 내용을 확인한 후 추가하겠습니다.']},
    intake:{title:'전문 분석 안내·접수',status:'접수 안내 준비 중',lead:'분석 분야와 진행 절차를 안내할 공간입니다.',paragraphs:['분석 분야·비용·접수 방법·진행 절차를 정리하고 있습니다.','접수 안내가 확정되면 이 페이지에서 확인하실 수 있습니다.'],links:[['기존 문의 연락처','content.html#contact']]},
    about:{title:'묵공오행연구소',lead:'서비스 브랜드: 묵공 Life Timing',paragraphs:['묵공오행연구소는 출생 정보를 바탕으로 자신의 기본 성향과 생활의 흐름을 살펴보는 Mukgong Life Timing 시리즈를 연구·개발하고 있습니다.','전통 동양학 연구를 현대적인 데이터 구조와 이해하기 쉬운 설명으로 정리하는 것을 목표로 합니다.'],links:[['연구 활동','content.html#research'],['앱 안내','content.html#apps']]},
    apps:{title:'1호앱 출시 및 후속앱 개발',lead:'출생시를 몰라도, 생년월일로 시작하는 나를 이해하는 시간',paragraphs:['「출생시를 몰라도」는 Mukgong Life Timing 시리즈의 첫 번째 앱입니다. 성별과 양력 또는 음력 생년월일을 바탕으로 기본 성향과 생활 리듬을 살펴봅니다.','출생시·이름 입력과 회원가입 없이 이용할 수 있으며, 앱은 한국어와 English를 지원합니다. 양력·음력 날짜 변환, 달력, 지원 환경에서 인쇄와 PDF 저장 기능을 제공합니다.','후속앱의 세부 안내는 순서대로 추가할 예정입니다.'],links:[['Google Play에서 앱 보기','https://play.google.com/store/apps/details?id=com.mukgong.lifetiming']]},
    research:{title:'연구 활동',lead:'앱 개발, 출판 작업, 명리학 연구를 위한 AI 보조 멘토링',paragraphs:['각 연구 활동의 안내를 아래 항목에서 확인하실 수 있습니다.'],links:[['1호앱 출시 및 후속앱 개발','content.html#apps'],['출판 작업','content.html#publishing'],['명리학 연구를 위한 AI 보조 멘토링','content.html#mentoring']]},
    mentoring:{title:'명리학 연구를 위한 AI 보조 멘토링',lead:'전통 이론의 정리와 연구·개발을 돕는 보조도구',paragraphs:['AI는 분석 구조 정리, 데이터 체계화, 문장 구성과 검토, 일관성 점검 및 결과 표현 개선을 위한 연구·개발 보조도구로 활용됩니다.','이 항목의 멘토링 범위와 이용 안내는 원고 검토 후 추가하겠습니다.']},
    contact:{title:'고객센터',lead:'서비스 및 이용 안내에 관한 문의',paragraphs:['기존 이용약관에 안내된 문의 이메일입니다. 전문 분석의 유료 접수 절차는 별도로 준비 중입니다.'],links:[['mhkim217@gmail.com','mailto:mhkim217@gmail.com'],['이용약관','terms.html'],['개인정보처리방침','privacy.html'],['데이터 삭제 안내','data-deletion.html']]},
    exchange:{title:'환율 안내',status:'정보 연결 준비 중',lead:'USD / KRW 환율 안내 공간입니다.',paragraphs:['환율 정보 제공처와 갱신 방식을 확인한 후 연결할 예정입니다. 현재 환율·기준 일시·출처는 표시하지 않습니다.']},
    visitors:{title:'방문 현황',status:'집계 연결 준비 중',lead:'오늘 방문과 누적 방문을 안내할 공간입니다.',paragraphs:['방문 집계 방식과 집계 시작일을 정한 후 연결할 예정입니다. 현재 방문 수는 표시하지 않습니다.']}
  };
  function render() {
    const key = decodeURIComponent(location.hash.slice(1));
    const topic = topics[key] || topics.research;
    document.title = `${topic.title} | 묵공오행연구소`;
    document.getElementById('topicTitle').textContent = topic.title;
    document.getElementById('topicLead').textContent = topic.lead;
    const status = document.getElementById('topicStatus'); status.replaceChildren();
    if (topic.status) {const badge=document.createElement('span');badge.className='draft-status';badge.textContent=topic.status;status.append(badge);}
    const copy=document.getElementById('topicContent');copy.replaceChildren();
    topic.paragraphs.forEach(text => {const p=document.createElement('p');p.textContent=text;copy.append(p);});
    if (topic.links) {
      const links=document.createElement('nav');links.className='content-topic-links';links.setAttribute('aria-label','관련 안내');
      topic.links.forEach(([label,url])=>{const a=document.createElement('a');a.textContent=label;a.href=url;if(url.startsWith('https:')){a.target='_blank';a.rel='noopener noreferrer';}links.append(a);});
      copy.append(links);
    }
    if (render.hasRendered) {document.querySelector('.detail-page').scrollIntoView({block:'start'});}
    render.hasRendered=true;
  }
  window.addEventListener('hashchange',render);render();
})();
