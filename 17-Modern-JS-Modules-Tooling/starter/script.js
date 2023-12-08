// import {
//   addToCart,
//   totalPrice as price,
//   totalQuantity,
// } from './shoppingCart.js';
// console.log('importing module');
// // console.log(shippingCost);

// addToCart('iphone', 2);
// console.log(price, totalQuantity);

// import * as ShoppingCart from './shoppingCart.js';

// console.log(ShoppingCart.totalPrice, ShoppingCart.totalQuantity);

// import add, { cart } from './shoppingCart.js';
// add('pizza', 2);
// add('bread', 3);
// add('apple', 6);
// console.log(cart);

// const getLastPost = async function () {
//   const res = await fetch('https://jsonplaceholder.typicode.com/posts');
//   const data = await res.json();
//   return { title: data.at(-1).title, text: data.at(-1).body };
// };

//  const lastPost = getLastPost();
//  lastPost.then(res => console.log(res));

// const lastPost2 = await getLastPost();
// console.log(lastPost2);

// const shoppingCart2 = (function () {
//   const cart = [];
//   const shippingCost = 10;
//   const totalPrice = 237;
//   const totalQuantity = 23;

//   const addToCart = function (product, quantity) {
//     cart.push({ product, quantity });
//     console.log(`${product} ${quantity} added to cart`);
//   };
//   const orderStock = function (product, quantity) {
//     console.log(`${product} ${quantity} ordered from supplier`);
//   };

//   return {
//     addToCart,
//     cart,
//     totalPrice,
//     totalQuantity,
//   };
// })();

// shoppingCart2.addToCart('apple', 4);
// shoppingCart2.addToCart('pizza', 2);
// console.log(shoppingCart2);

if (module.hot) {
  module.hot.accept();
}
