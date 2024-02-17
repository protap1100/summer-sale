let titleCounter = 1;
let totalPrice = 0;
const productList = document.querySelectorAll(".card");

for (let index = 0; index < productList.length; index++){
    const product = productList[index];

    product.addEventListener('click',function(){
      const title = product.querySelector('h2').innerText;
      const price = parseFloat(product.querySelector('.amount').innerText.trim().split(' ')[0]);

      // console.log(title);
      // console.log(price);

      const titleContainer = document.getElementById('title-container');
      console.log(titleContainer);

      const p = document.createElement('p');
      p.innerText = titleCounter++ + '.' + title;
      titleContainer.appendChild(p);

      // const p2 =document.createElement('p');
      // p2.innerText = price;
      // titleContainer.appendChild(p2);
      totalPrice = totalPrice + price;
      console.log(totalPrice);

      const cartList = document.getElementById('cart-price');
      cartList.innerText = totalPrice.toFixed(2);

      const totalPayingAmount = document.getElementById('total-paid');
      totalPayingAmount.innerText = totalPrice.toFixed(2);
      
    })
}

const discountCode  = 'Protap1000';

function couponCode(){
  const inputCoupon = document.getElementById('coupon-value').value;
  const cartPrice = document.getElementById('cart-price').innerText = parseFloat(totalPrice.toFixed(2)); 
  if(cartPrice >= 1000){
      console.log('discount added');
      if(inputCoupon === discountCode){
          const totalDiscount = (cartPrice * 30 ) / 100 ;
          const discount = document.getElementById('discount').innerText = `${parseFloat(totalDiscount)} ${'Tk'}`;
          document.getElementById('total-paid').innerText = `${parseFloat(cartPrice - parseFloat(discount))} ${'Tk'}`;
          document.getElementById('coupon-value').value = "";
      }else{
        alert('Invalid Coupon Code');
        document.getElementById('coupon-value').value = "";
      }
  }else{
       alert(`Please Buy More Than 1000 Taka'product to to get discount`);
  }
}



