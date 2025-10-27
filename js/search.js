// Obtenemos los elementos del DOM
  const searchBtn = document.getElementById('search-btn');
  const mobileSearch = document.getElementById('mobile-search');
  const closeSearch = document.getElementById('close-search');
  const inputField = document.getElementById('mobile-search-input');

  if (searchBtn && mobileSearch && closeSearch) {
    // Mostrar overlay
    searchBtn.addEventListener('click', () => {
      mobileSearch.classList.remove('hidden');
      setTimeout(() => {
        mobileSearch.classList.remove('opacity-0', '-translate-y-4');
      }, 10);
      document.body.style.overflow = 'hidden';
      inputField.focus();
    });

    // Cerrar overlay (con la X)
    const closeOverlay = () => {
      mobileSearch.classList.add('opacity-0', '-translate-y-4');
      setTimeout(() => {
        mobileSearch.classList.add('hidden');
        document.body.style.overflow = 'auto';
      }, 300);
    };

    closeSearch.addEventListener('click', closeOverlay);

    // Cerrar con tecla Escape
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && !mobileSearch.classList.contains('hidden')) {
        closeOverlay();
      }
    });

    // Cerrar si se hace clic fuera del contenido
    mobileSearch.addEventListener('click', (e) => {
      if (e.target === mobileSearch) {
        closeOverlay();
      }
    });
  } else {
    console.error("❌ No se encontraron los elementos del buscador.");
  }