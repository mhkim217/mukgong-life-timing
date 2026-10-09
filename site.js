// 묵공 주석: 대문 메뉴 높이·모바일 메뉴·기존 홈페이지 앵커 연결을 담당합니다.
(() => {
  const sidebar = document.getElementById('siteSidebar');
  const toggle = document.querySelector('.menu-toggle');
  const close = document.querySelector('.sidebar-close');
  const backdrop = document.querySelector('.menu-backdrop');
  const main = document.getElementById('main');
  let savedOverflow = '';
  const isMobile = () => window.matchMedia('(max-width: 980px)').matches;
  // 묵공 주석: 메뉴를 자르지 않고 대문 첫 구역과 끝선을 맞춥니다. 모바일은 기존 펼침 메뉴를 사용합니다.
  const homeFirst = document.querySelector('.home-first');
  if (homeFirst) {
    const parts = [sidebar.querySelector('.sidebar-brand'), sidebar.querySelector('nav'), sidebar.querySelector('.sidebar-metrics')];
    const setLength = (element, name, value) => {
      if (element.style.getPropertyValue(name) !== value) element.style.setProperty(name, value);
    };
    const fitSidebar = () => {
      if (isMobile()) {
        homeFirst.style.removeProperty('--sidebar-min-height');
        sidebar.style.removeProperty('--home-first-height');
        return;
      }
      const numeric = value => parseFloat(value) || 0;
      const style = getComputedStyle(sidebar);
      const padding = numeric(style.paddingTop) + numeric(style.paddingBottom);
      const gaps = (parts.length - 1) * numeric(style.rowGap);
      // 묵공 주석: 균등 배치로 늘어난 여백을 제외한 메뉴의 최소 높이를 계산하여 창 축소 시에도 끝선을 맞춥니다.
      const navigation = parts[1];
      const items = [...navigation.children];
      const naturalNavHeight = items.reduce((height, item) => {
        const itemStyle = getComputedStyle(item);
        return height + item.getBoundingClientRect().height + numeric(itemStyle.marginTop) + numeric(itemStyle.marginBottom);
      }, 0) + Math.max(0, items.length - 1) * numeric(getComputedStyle(navigation).rowGap);
      const contentHeight = parts[0].getBoundingClientRect().height + naturalNavHeight + parts[2].getBoundingClientRect().height;
      setLength(homeFirst, '--sidebar-min-height', `${Math.ceil(contentHeight + padding + gaps)}px`);
      setLength(sidebar, '--home-first-height', `${homeFirst.getBoundingClientRect().height}px`);
    };
    fitSidebar();
    window.addEventListener('resize', fitSidebar);
    if (typeof ResizeObserver === 'function') {
      const observer = new ResizeObserver(fitSidebar);
      [homeFirst, ...parts].forEach(element => observer.observe(element));
    }
    document.fonts.ready.then(fitSidebar);
  }
  function setOpen(open, restoreFocus = true) {
    sidebar.classList.toggle('open', open);
    backdrop.classList.toggle('open', open);
    toggle.setAttribute('aria-expanded', String(open));
    if (open) {
      savedOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      main.inert = true;
      close.focus();
    } else {
      document.body.style.overflow = savedOverflow;
      main.inert = false;
      if (restoreFocus && isMobile()) toggle.focus();
    }
  }
  toggle.addEventListener('click', () => setOpen(true));
  close.addEventListener('click', () => setOpen(false));
  backdrop.addEventListener('click', () => setOpen(false));
  document.addEventListener('keydown', event => {
    if (!sidebar.classList.contains('open')) return;
    if (event.key === 'Escape') { event.preventDefault(); setOpen(false); }
    if (event.key === 'Tab') {
      const focusable = [...sidebar.querySelectorAll('a[href],button:not([disabled])')];
      const first = focusable[0], last = focusable.at(-1);
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
    }
  });
  sidebar.addEventListener('click', event => {
    if (sidebar.classList.contains('open') && event.target.closest('a[href]')) setOpen(false, false);
  });
  window.addEventListener('resize', () => {
    if (!isMobile() && sidebar.classList.contains('open')) setOpen(false, false);
  });
  const redirects = {converter:'content.html#apps',series:'content.html#apps',research:'content.html#research',official:'content.html#contact'};
  if (!document.getElementById('topicTitle')) {
    const target = redirects[location.hash.slice(1)];
    if (target) location.replace(target);
  }
  function updateCurrent() {
    sidebar.querySelectorAll('a.side-link').forEach(link => {
      const target = new URL(link.href);
      const samePath = target.pathname === location.pathname;
      const current = samePath && (target.hash === location.hash || (target.hash && location.hash.startsWith(target.hash + '/')));
      if (current) link.setAttribute('aria-current', 'page'); else link.removeAttribute('aria-current');
    });
  }
  window.addEventListener('hashchange', updateCurrent);
  updateCurrent();
})();
