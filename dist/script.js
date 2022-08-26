/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/menu */ "./src/js/modules/menu.js");
/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_modules_menu__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/slider */ "./src/js/modules/slider.js");
/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_modules_slider__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _modules_scroll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/scroll */ "./src/js/modules/scroll.js");
/* harmony import */ var _modules_scroll__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_modules_scroll__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _modules_slider_btns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/slider-btns */ "./src/js/modules/slider-btns.js");
/* harmony import */ var _modules_slider_btns__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_modules_slider_btns__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _modules_basket__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/basket */ "./src/js/modules/basket.js");
/* harmony import */ var _modules_basket__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_modules_basket__WEBPACK_IMPORTED_MODULE_4__);





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

/***/ }),

/***/ "./src/js/modules/basket.js":
/*!**********************************!*\
  !*** ./src/js/modules/basket.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

window.addEventListener('DOMContentLoaded', () => {
  const openBtnBasket = document.querySelector('.basket__btn_open'),
        closeBtnBasket = document.querySelector('.basket__btn_close'),
        menuBasket = document.querySelector('.basket__field');
  closeBtnBasket.addEventListener('click', () => {
    menuBasket.classList.add('d-none');
  });
  openBtnBasket.addEventListener('click', () => {
    menuBasket.classList.toggle('d-none');
    menuBasket.classList.toggle('show');
  });
  const addBtn = document.querySelectorAll('.plus__cart_btn'),
        cartProductsList = document.querySelector('.basket__content_list'),
        cart = document.querySelector('.basket'),
        cartQuantity = document.querySelector('.cart__quantity'),
        fullPrice = document.querySelector('.fullprice');
  let price = 0;
  document.addEventListener('click', function (e) {
    let res = 1;

    if (e.target.classList.contains("increase")) {
      res = e.target.parentElement.querySelector("input").value++ + 1;
    } else if (e.target.classList.contains("decrease")) {
      res = e.target.parentElement.querySelector("input").value-- - 1;
    }

    return res;
  });

  const randomId = () => {
    return Math.random().toString(36).substring(2, 5) + Math.random().toString(36).substring(2, 15);
  };

  const normalPrice = str => {
    return str.replace(/[^+\d]/g, '').slice(0, -2);
  };

  const minusNormalPrice = str => {
    return str.replace(/[^+\d]/g, '');
  };

  const plusFullPrice = currentPrice => {
    return price += currentPrice;
  };

  const minusFullPrice = currentPrice => {
    return price -= currentPrice;
  };

  const printFullPrice = () => {
    fullPrice.textContent = `${price}.00 $`;
  };

  const printQuantity = () => {
    cartQuantity.textContent = cartProductsList.children.length;
  };

  const generateCartProduct = (img, title, price, id, value) => {
    return `
    <li class="basket__content_item">
        <article class="basket__content_product basket__product" data-id="${id}">
            <div class="basket__cart">
                <div class="basket__cart_img">
                    <img src="${img}" alt="prod_1">
                </div>
                <div class="basket__cart_descr">
                    <div class="basket__cart_title">
                        <p>${title}</p>
                    </div>
                    <div class="basket__cart_price">
                        <p> ${price}$ </p>
                    </div>
                    <div class="basket__cart_amount">
                        <button class="decrease btn_nmb">-</button>
                        <input type="number" value="${value}" id="basket__nmb">
                        <button class="increase btn_nmb ">+</button>
                    </div> 
                </div>
                <button class="basket__cart_delete"><i class="fa fa-times basket__cart_delete" aria-hidden="true"></i></button>
            </div>
        </article>
    </li>
    `;
  };

  const deleteProducts = productParent => {
    let id = productParent.querySelector('.basket__product').dataset.id;
    document.querySelector(`.product[data-id="${id}"]`).querySelector('.box__price_toggle .plus__cart_toggle button').disabled = false;
    let currentPrice = +minusNormalPrice(productParent.querySelector('.basket__cart_price').textContent);
    minusFullPrice(currentPrice);
    printFullPrice();
    productParent.remove();
    printQuantity();
  };

  addBtn.forEach(item => {
    item.closest('.product').setAttribute('data-id', randomId());
    item.addEventListener('click', e => {
      let self = e.currentTarget,
          parent = self.closest('.product'),
          id = parent.dataset.id,
          img = parent.querySelector('.slick-slide img').getAttribute('src'),
          title = parent.querySelector('.box__title').textContent,
          value = +parent.querySelector('input[type="number"]').value,
          priceNumber = +normalPrice(parent.querySelector('.price').textContent);
      let finalPrice;
      finalPrice = priceNumber * value;
      plusFullPrice(finalPrice);
      printFullPrice();
      cartProductsList.insertAdjacentHTML('afterbegin', generateCartProduct(img, title, finalPrice, id, value));
      printQuantity();
      self.disabled = true;
    });
  });
  cartProductsList.addEventListener('click', e => {
    if (e.target.classList.contains('basket__cart_delete')) {
      deleteProducts(e.target.closest('.basket__content_item'));
    }
  });
});

/***/ }),

/***/ "./src/js/modules/menu.js":
/*!********************************!*\
  !*** ./src/js/modules/menu.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

document.addEventListener('DOMContentLoaded', () => {
  const btns = document.querySelectorAll('.ddm'),
        contents = document.querySelectorAll('.ddmc'),
        openBtn = document.querySelector('.main__menu-fa'),
        burger = document.querySelector('.menu__list'),
        closeBtn = document.querySelector('.menu__close_btn');
  btns.forEach(btn => {
    btn.addEventListener('click', e => {
      const menu = e.currentTarget.dataset.path,
            list = document.querySelector(`[data-target=${menu}]`);
      list.classList.toggle('d-none');
      list.classList.toggle('show');
    });
  });
  closeBtn.addEventListener('click', e => {
    burger.classList.add('d-none');
  });
  openBtn.addEventListener('click', e => {
    burger.classList.toggle('d-none');
    burger.classList.toggle('show');
  });
});

/***/ }),

/***/ "./src/js/modules/scroll.js":
/*!**********************************!*\
  !*** ./src/js/modules/scroll.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

$(document).ready(function () {
  $(window).scroll(function () {
    let height = $(window).scrollTop();

    if (height > 100) {
      $('#back2Top').fadeIn();
    } else {
      $('#back2Top').fadeOut();
    }
  });
  $(document).ready(function () {
    $("#back2Top").click(function (event) {
      event.preventDefault();
      $("html, body").animate({
        scrollTop: 0
      }, "slow");
      return false;
    });
  });
});

/***/ }),

/***/ "./src/js/modules/slider-btns.js":
/*!***************************************!*\
  !*** ./src/js/modules/slider-btns.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

$(document).ready(function () {
  function slidersBtns(slideBox, target) {
    $(slideBox).each(function () {
      if ($(this).hasClass(target)) {
        $(this).removeClass('d-none');
      } else {
        $(this).addClass('d-none');
      }
    });
  }

  $('.view__btn').removeClass('btn-active');
  $('.view__btn').click(function () {
    $(this).addClass('btn-active');

    if ($(this).hasClass('new_products_btn')) {
      slidersBtns('.trending__box_content', 'trending__new_products');
    } else if ($(this).hasClass('top_selling_btn')) {
      slidersBtns('.trending__box_content', 'trending__top-selling');
    } else if ($(this).hasClass('featured_btn')) {
      slidersBtns('.trending__box_content', 'trending__featured');
    }

    $('.view__btn').not(this).removeClass('btn-active');
    initSlick('.trending__box');
  });
});

/***/ }),

/***/ "./src/js/modules/slider.js":
/*!**********************************!*\
  !*** ./src/js/modules/slider.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

$(document).ready(function () {
  $('.slider__slides').slick({
    infinite: false
  });
  $('.trending__box').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    speed: 300,
    infinite: false,
    responsive: [{
      breakpoint: 1601,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1
      }
    }, {
      breakpoint: 1280,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    }, {
      breakpoint: 1000,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }, {
      breakpoint: 650,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }]
  });
  $('.brand__bar_slider').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    infinite: false,
    responsive: [{
      breakpoint: 1601,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1
      }
    }, {
      breakpoint: 1030,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    }, {
      breakpoint: 730,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }, {
      breakpoint: 500,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }]
  });
  $('.special__box').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    infinite: false,
    responsive: [{
      breakpoint: 1601,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1
      }
    }, {
      breakpoint: 1280,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    }, {
      breakpoint: 1000,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }, {
      breakpoint: 650,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }]
  });
  $('.blogs__slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: false,
    responsive: [{
      breakpoint: 1000,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }, {
      breakpoint: 650,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }]
  });
});

/***/ })

/******/ });
//# sourceMappingURL=script.js.map