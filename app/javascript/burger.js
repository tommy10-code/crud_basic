{
  const open = document.getElementById('open')
  const main = document.getElementById('main')
  const close = document.getElementById('close')
  
  open.addEventListener('click', () => {
    main.classList.toggle('-translate-x-full');
    
  });

  close.addEventListener('click', () => {
    main.classList.toggle('-translate-x-full');
});
}

