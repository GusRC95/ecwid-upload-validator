Ecwid.OnPageLoaded.add(function () {
  const interval = setInterval(() => {
    const select = document.querySelector('select[aria-label="GOT WELDED BARS? (See Alert)"]');
    const fileInput = document.querySelector('input[type="file"]');
    const addToCartBtn = document.querySelector('button[data-ga-action="Add to bag"]');

    if (!select || !fileInput || !addToCartBtn) return;

    const validar = () => {
      const isYes = select.value === 'Yes';
      const hasFile = fileInput.files.length > 0;

      if (isYes && !hasFile) {
        addToCartBtn.disabled = true;
        addToCartBtn.style.opacity = '0.5';
        addToCartBtn.style.pointerEvents = 'none';
      } else {
        addToCartBtn.disabled = false;
        addToCartBtn.style.opacity = '1';
        addToCartBtn.style.pointerEvents = 'auto';
      }
    };

    select.addEventListener('change', validar);
    fileInput.addEventListener('change', validar);
    validar();
    clearInterval(interval);
  }, 500);
});
