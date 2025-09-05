'user strict'

/* コメント */

// for (let year = 1; year <= 30; year += 1) {
//   amount *= 1.05;
//   // amountが200未満の処理は飛ばす
//   if (amount < 200){
//     continue ;
//   }

//   if (amount > 300) {
//     // amountが300を超えたら処理が終わる
//     break;
//   }
//   console.log(`Year ${year}: ${amount}`);
// }

// const score = Number(prompt("score?"));
// console.log(score > 80 ? "A" : "B");

// {
//   function add(a, b) {
//   return a + b;
// }
// console.log(add(2, 3)); // 5

// }

// const add = (a, b) => {
//   return a + b;
// }
// console.log(add(2, 3)); // 5

// const calculateTotal = (price, amount, rate) => price * amount * rate ;
// console.log(calculateTotal(100, 10, 1.1));

// const calculateTotall = (price, amount, rate：1.1) => {
//  return price * amount * rate ;
// }
// console.log(calculateTotall(100, 10,rate));

{
let showa = () => {
  console.log("---------");
  console.log("SALE! 50% OFF!");
  console.log("---------");
}

let showb = () => {
  console.log("BREAKING NEWS!");
  console.log("Two baby pandas born at our Zoo!");
}

showa();
showb();
showa();

}