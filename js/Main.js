// Next slide
let slideIndex =0;

function Next(){
  var slides  = document.querySelectorAll(".swiper-slide");
  var dots = document.querySelectorAll(".dot");

  for(let i=0; i<slides.length; i++){
    slides[i].style.display = 'none';
    dots[i].classList.remove('active');
  }
  
  if(slideIndex>=slides.length){
    slideIndex = 0;
  }
  slides[slideIndex].style.display = 'block';
  dots[slideIndex].classList.add('active');
  slideIndex++;
  
}
// slide back
function pre() {
    var slides  = document.querySelectorAll(".swiper-slide");
    var dots = document.querySelectorAll(".dot");
    for(let i=0; i<slides.length; i++){
      slides[i].style.display = 'none';
      dots[i].classList.remove('active');
    }
    slideIndex--;
    if(slideIndex <=0){
      slideIndex = slides.length;
    }
    slides[slideIndex-1].style.display = 'block';
    dots[slideIndex-1].classList.add('active');
    
  }

  // Cart
  let cartIcon = document.querySelector('#cart-icon');
  let cart = document.querySelector('.cart');
  let closeCart = document.querySelector('#cart-close');
  // Open cart
  cartIcon.onclick = () => {
    cart.classList.add('active');
  }
  // Close cart
  closeCart.onclick = () => {
  cart.classList.remove('active')
};

// ---------------------------------------

// Cart working js
if(document.readyState == 'loading'){
  document.addEventListener('DOMContentLoaded', ready);
} else {
  ready();
};

// Making function
function ready() {
  // Remove cart
  var removeCartButton = document.getElementsByClassName('cart-remove');
  console.log(removeCartButton);
  for(var i = 0; i<removeCartButton.length; i++){
    var button = removeCartButton[i]
    button.addEventListener('click', removeCartItem);
  };

  // quantity change
  var qty = document.getElementsByClassName('quantity');
  for(var i = 0; i<qty.length; i++){
    qty[i].addEventListener('change', quantityChanges)
  };

  // Add to cart
  var addCart = document.getElementsByClassName('add');
  for(var i = 0; i<addCart.length; i++){
    var buy = addCart[i];
    buy.addEventListener("click", addToCart);
  }

  // Buy button
 document.getElementsByClassName('btn-buy')[0].addEventListener('click', buttonClicked);
};

// Buy button
function buttonClicked() {
  alert('Your order is placed');
  var cartContent = document.getElementsByClassName('cart-content')[0];
  while (cartContent.hasChildNodes()) {
    cartContent.removeChild(cartContent.firstChild)
  }
  updatePrice();
}

// Remove from cart by item (2)
function removeCartItem(event) {
  var buttonClick = event.target;
  buttonClick.parentElement.remove();
  updatePrice();
};

// quantity Changes (4)
function quantityChanges(event) {
  var input = event.target;
  if(input.value < 1 || isNaN(input.value)){
    input.value = 1;
  }
  updatePrice();
};

// add to cart (5)
function addToCart(event) {
  var button = event.target;
  var shopproduct = button.parentElement;
  var title = shopproduct.getElementsByClassName('products-title')[0].innerText;
  var price = shopproduct.getElementsByClassName('add')[0].innerText.replace("$", "");
  var productImg = shopproduct.getElementsByClassName('product-img')[0].src;
  addProductToCart(title, price, productImg);
  updatePrice();
 };
 
 //Add product to cart
 function addProductToCart(title, prices, productImg) {
  var cartShopBox = document.createElement('div');
      cartShopBox.classList.add('cart-box');
      var cartItem = document.getElementsByClassName('cart-content')[0];
      var cartItemName = cartItem.getElementsByClassName('cart-product-title');
      for(let i=0; i<cartItemName.length; i++){
        if(cartItemName[i].innerText == title.toUpperCase()){
          alert('This item already exists!');
          return;
        }
      }
      var price = parseFloat(prices.replace("ADD TO BAG", ""));
  var cartBoxContent = `<img src="${productImg}" alt="" class="cart-img">
                        <div class="detail-box">
                            <div class="cart-product-title">${title}</div>
                            <div class="cart-price">$${price}</div>
                            <input type="number" value="1" class="quantity">
                        </div>
                        <!-- Remove cart -->
                        <i class='bx bxs-trash-alt cart-remove' id="cart-remove"></i>`;
  cartShopBox.innerHTML = cartBoxContent;
  cartItem.append(cartShopBox);
  cartShopBox.getElementsByClassName('cart-remove')[0].addEventListener('click', removeCartItem);
  cartShopBox.getElementsByClassName('quantity')[0].addEventListener('change', quantityChanges);
};

// update total (3)
function updatePrice() {
  var cartContent = document.getElementsByClassName('cart-content')[0];
  var cartBoxes = cartContent.getElementsByClassName('cart-box')
  var total =0;
  for(let i=0; i<cartBoxes.length; i++){
    var cartBox = cartBoxes[i];
    var priceElement = cartBox.getElementsByClassName('cart-price')[0];
    var quantityElement = cartBox.getElementsByClassName('quantity')[0];
    var price = parseFloat(priceElement.innerText.replace("$", ""));
    var quantity = quantityElement.value;
    total = total + (quantity * price);

    // if price content some  cents value
    total = Math.round(total*100)/100;
  }
  document.getElementsByClassName('total-price')[0].innerText = '$'+total;
};

// ---------------------------
// Search products information
var boxIcons = document.getElementsByClassName('box');
for(let i=0; i<boxIcons.length; i++) {

  // Mouse over
  boxIcons[i].onmouseover = () =>{
    boxIcons[i].querySelector('.product-infor').style.display = 'block';
  }
  // Mouse out
  boxIcons[i].onmouseout = () =>{
    boxIcons[i].querySelector('.product-infor').style.display = 'none';
  }
}

// Text active
var text = document.querySelectorAll('.textsp');
for(let i=0; i<text.length; i++){
  text[i].classList.add('textActive');

  setInterval(() => {
    text[i].classList.toggle('textActive');
  }, 500)
}

// logo

// logoes();
// function logoes() {
//   var logos = document.querySelector('.logo');
//   var logoArr = logos.innerText.split('');
//   for(let i=0; i<logoArr.length; i++){
//       let theSP = document.createElement('span');
//       let text = document.createTextNode(logoArr[i])
//       theSP.appendChild(text);
//       logos.appendChild(theSP);
//       theSP.classList.add('textspan');
//   }
// }

// logo run auto
var demindex =0;
var demnguoc = 4;
function autoText() {
  var thesp = document.querySelectorAll('.textspan');
  if(demindex >= thesp.length){
      thesp[demnguoc].style.display = 'none';
      demnguoc --;
    if(demnguoc ==-1){
      demindex =0;
    }
  }else {
      thesp[demindex].style.display = 'inline-block';
    demindex ++;
    if(demindex == 5) {
      demnguoc =4;
    }
    }
}
setInterval(autoText, 600);

