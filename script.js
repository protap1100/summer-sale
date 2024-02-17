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

      // const cartPriceElement = document.getElementById('cart-price');
      // cartPriceElement.innerText = totalPrice.toFixed(2) + ' Tk';


      

    })
}


