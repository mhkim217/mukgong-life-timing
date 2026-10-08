// 묵공 주석: 모바일 메뉴·기존 홈페이지 앵커 연결을 담당합니다.
(() => {
  const sidebar = document.getElementById('siteSidebar');
  const toggle = document.querySelector('.menu-toggle');
  const close = document.querySelector('.sidebar-close');
  const backdrop = document.querySelector('.menu-backdrop');
  const main = document.getElementById('main');
  let savedOverflow = '';
  const isMobile = () => window.matchMedia('(max-width: 980px)').matches;
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
  const redirects = {converter:'manse.html#converter',series:'content.html#apps',research:'content.html#research',official:'content.html#contact'};
  if (!document.getElementById('topicTitle') && !document.getElementById('converterTitle')) {
    const target = redirects[location.hash.slice(1)];
    if (target) location.replace(target);
  }
  function updateCurrent() {
    sidebar.querySelectorAll('a.side-link').forEach(link => {
      const target = new URL(link.href);
      const samePath = target.pathname === location.pathname;
      const current = samePath && (target.hash === location.hash || (!target.hash && location.pathname.endsWith('/manse.html')));
      if (current) link.setAttribute('aria-current', 'page'); else link.removeAttribute('aria-current');
    });
  }
  window.addEventListener('hashchange', updateCurrent);
  updateCurrent();
})();
