(() => {
  const languageButtons = document.querySelectorAll('[data-lang]');
  const translatableElements = document.querySelectorAll('[data-en][data-ko]:not([data-lang])');
  const pageTitle = {
    en: '323846 — A space for ideas',
    ko: '323846 — 아이디어를 위한 공간'
  };

  function setLanguage(language) {
    const selected = language === 'ko' ? 'ko' : 'en';
    document.documentElement.lang = selected;

    translatableElements.forEach((element) => {
      const translation = element.dataset[selected];
      if (typeof translation === 'string') element.textContent = translation;
    });

    languageButtons.forEach((button) => {
      const isActive = button.dataset.lang === selected;
      button.classList.toggle('is-active', isActive);
      button.setAttribute('aria-pressed', String(isActive));
    });

    document.title = pageTitle[selected];
    try {
      localStorage.setItem('323846-language', selected);
    } catch (_) {
      // Language switching still works if storage is unavailable.
    }
  }

  languageButtons.forEach((button) => {
    button.addEventListener('click', () => setLanguage(button.dataset.lang));
  });

  let savedLanguage = 'en';
  try {
    savedLanguage = localStorage.getItem('323846-language') || 'en';
  } catch (_) {
    // Use English as the default when storage is unavailable.
  }
  setLanguage(savedLanguage);

  const year = document.getElementById('year');
  if (year) year.textContent = String(new Date().getFullYear());
})();
