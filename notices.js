// 묵공 주석: 공지 원고가 확정되면 이 목록에 추가합니다. 대문과 게시판은 같은 데이터를 사용합니다.
// 각 항목: {id:'고유영문ID', title:'제목', date:'YYYY-MM-DD', paragraphs:['본문 문단']}
// 확인되지 않은 공지·게시일·댓글 수를 예시로 공개하지 않습니다.
(() => {
  const entries = [{
    id:'homepage-renewal-20261009',
    title:'홈페이지 개편 안내',
    date:'2026-10-09',
    paragraphs:[
      '묵공 Life Timing 홈페이지를 새롭게 정비했습니다.',
      '앱 소개와 서비스 안내를 보기 쉽게 구성하고, 연구소 소식을 전하는 공지사항과 고전연구 공간을 마련했습니다.',
      '고전연구에서는 『삼명통회』 「논삼형」 원문 이미지와 연구 검토 내용을 확인하실 수 있습니다. 각 메뉴의 내용과 연구 자료는 앞으로 차례로 보완해 나가겠습니다.',
      '방문해 주셔서 감사합니다.'
    ]
  }];
  const ordered = [...entries].sort((a, b) => b.date.localeCompare(a.date));
  const formatDate = date => date.replaceAll('-', '.');
  const noticeUrl = entry => `content.html#notice/${encodeURIComponent(entry.id)}`;
  function renderList(container, limit = ordered.length) {
    container.replaceChildren();
    if (!ordered.length) {
      const empty = document.createElement('p');
      empty.className = 'notice-empty';
      empty.textContent = '등록된 공지사항이 없습니다.';
      const hint = document.createElement('span');
      hint.textContent = '연구소 소식과 이용 안내를 이곳에 전해 드립니다.';
      empty.append(hint);container.append(empty);return;
    }
    const list = document.createElement('ul');list.className = 'notice-list';
    ordered.slice(0, limit).forEach(entry => {
      const row = document.createElement('li');
      const link = document.createElement('a');link.href = noticeUrl(entry);
      const tag = document.createElement('span');tag.className = 'notice-tag';tag.textContent = '공지';
      const title = document.createElement('span');title.className = 'notice-subject';title.textContent = entry.title;
      const date = document.createElement('time');date.dateTime = entry.date;date.textContent = formatDate(entry.date);
      link.append(tag,title,date);row.append(link);list.append(row);
    });container.append(list);
  }
  function renderDetail(container, entry) {
    const date = document.createElement('p');date.className = 'notice-date';
    const time = document.createElement('time');time.dateTime = entry.date;time.textContent = `게시일: ${formatDate(entry.date)}`;
    date.append(time);container.append(date);
    entry.paragraphs.forEach(text => {const p = document.createElement('p');p.textContent = text;container.append(p);});
    const back = document.createElement('a');back.className = 'notice-back';back.href = 'content.html#board';back.textContent = '← 공지사항 전체 보기';container.append(back);
  }
  window.MukgongNotices = Object.freeze({entries:ordered,renderList,renderDetail});
  const home = document.getElementById('homeNotices');
  if (home) renderList(home, 4);
})();
