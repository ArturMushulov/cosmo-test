document.addEventListener('DOMContentLoaded', () => {
  const btns = document.querySelectorAll('.ddm'),
      contents = document.querySelectorAll('.ddmc'),
      openBtn = document.querySelector('.main__menu-fa'),
      burger = document.querySelector('.menu__list'),
      closeBtn = document.querySelector('.menu__close_btn');

btns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const menu = e.currentTarget.dataset.path,
            list = document.querySelector(`[data-target=${menu}]`);
            list.classList.toggle('d-none');
            list.classList.toggle('show');
    });
  });

  closeBtn.addEventListener('click', (e) => {
    burger.classList.add('d-none');
  });

  openBtn.addEventListener('click', (e) => {
    burger.classList.toggle('d-none');
    burger.classList.toggle('show');

  });
});




  


