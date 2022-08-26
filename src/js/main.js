import './modules/menu';
import './modules/slider';
import './modules/scroll';
import './modules/slider-btns';
import './modules/basket';


const openBtnSearch = document.querySelector('.search__menu_btn'),
      closeBtnSearch = document.querySelector('.close__search'),
      menuSearch = document.querySelector('.search__container'), 
      toggleBtnMyAccount = document.querySelector('.my__account_btn'),
      menuMyAccount = document.querySelector('.my__acount_description');    

closeBtnSearch.addEventListener('click', () => {
      menuSearch.classList.add('d-none');
});
  
openBtnSearch.addEventListener('click', () => {
      menuSearch.classList.toggle('d-none');
      menuSearch.classList.toggle('show');      
});

toggleBtnMyAccount.addEventListener('click', () => {
      menuMyAccount.classList.toggle('d-none');
});



















