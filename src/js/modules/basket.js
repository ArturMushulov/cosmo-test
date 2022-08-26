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

const normalPrice = (str) => {
    return str.replace(/[^+\d]/g, '').slice(0, -2);
};

const minusNormalPrice = (str) => {
    return str.replace(/[^+\d]/g, '');
};

const plusFullPrice = (currentPrice) => {
    return price += currentPrice;
};

const minusFullPrice = (currentPrice) => {
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

const deleteProducts = (productParent) => {

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



