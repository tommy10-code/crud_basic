// 'user strict'

// /* コメント */

// // for (let year = 1; year <= 30; year += 1) {
// //   amount *= 1.05;
// //   // amountが200未満の処理は飛ばす
// //   if (amount < 200){
// //     continue ;
// //   }

// //   if (amount > 300) {
// //     // amountが300を超えたら処理が終わる
// //     break;
// //   }
// //   console.log(`Year ${year}: ${amount}`);
// // }

// // const score = Number(prompt("score?"));
// // console.log(score > 80 ? "A" : "B");

// // {
// //   function add(a, b) {
// //   return a + b;
// // }
// // console.log(add(2, 3)); // 5

// // }

// // const add = (a, b) => {
// //   return a + b;
// // }
// // console.log(add(2, 3)); // 5

// // const calculateTotal = (price, amount, rate) => price * amount * rate ;
// // console.log(calculateTotal(100, 10, 1.1));

// // const calculateTotall = (price, amount, rate：1.1) => {
// //  return price * amount * rate ;
// // }
// // console.log(calculateTotall(100, 10,rate));

// {
// let showa = () => {
//   console.log("---------");
//   console.log("SALE! 50% OFF!");
//   console.log("---------");
// }

// let showb = () => {
//   console.log("BREAKING NEWS!");
//   console.log("Two baby pandas born at our Zoo!");
// }

// showa();
// showb();
// showa();

// }

/* 配列について 基本rubyと一緒 配列、オブジェクト、応用の流れで学ぶ */
// 配列を宣言するときは、基本的にはconstにする
{
  const scores = [
    70, 90, 80, 85
  ];

  console.log(scores[2]);
  console.log(scores.length);
  scores[1] = 95; //配列の中ならconstで値を変更できる
  console.log(scores);
}

/* 配列の値を追加 */
/* push() pop() unshift() shift() */
{
  const scores = [
    70, 90, 80, 85
  ];

  scores.push(60, 100)
  console.log(scores);
}

/* 配列を1つずつ取り出す */
{
  const scores = [
    70, 90, 80, 85
  ];
  scores.push(60)
  for (let i = 0; i < scores.length; i += 1) {
    console.log(scores[i]);
  }
}

/* forEachを使う 配列を1個ずつ取り出す処理*/
{
  const scores = [
    100, 90, 80, 85
  ];
  scores.forEach((score) => {
    console.log(score);
  });
  // 引数を2つ渡せる(値とインデックス番号)
  scores.forEach((score, idx) => {
    console.log(`${idx}番は、${score}です`)
  })
}

/* 合計の計算 平均の計算*/
{
  const scores = [
    100, 90, 80, 85
  ];
  let sum = 0
  scores.forEach((score) => {
    sum += score
  });
  console.log(`合計は${sum}`);
  console.log(`平均は${sum / scores.length}`);
}

/* オブジェクト操作 */
{
  const scores = {
    'math': 80, 'english': 70
  };
  console.log(scores)
  scores.english = 100;
  console.log(scores.math);
  console.log(scores.english);
}

/* オブジェクト操作 プロパティの追加削除*/
{
  const scores = {
    'math': 80, 'english': 70
  };
  scores.physics = 100; //プロパティの追加
  delete scores.math; //プロパティの削除
  console.log(scores);
}

/* オブジェクト操作 オブジェクトを配列に直す*/
{
  const scores = {
    'math': 80, 'english': 70
  };
  const arr = Object.entries(scores);
  // console.log(arr);
  arr.forEach((k) => {
    console.log(k); //['math', 80]の配列になる
    console.log(`${k[0]}は、${k[1]}点です`);
  });
}

/* オブジェクト操作 配列に直して合計と平均を出す*/
{
  const scores = {
    'math': 80, 'english': 70
  };
  const arr = Object.entries(scores);
  let sum = 0;
  arr.forEach((k) => {
    sum += k[1]
  });
  console.log(`合計は${sum}`);
  console.log(`平均は${sum / arr.length}`);
}

/* 応用 */
/* splice()について */
// spliceの基本形
// array.splice(start, n, item1, item2, ...)

{
  const scores = [80, 90, 100];

  scores.splice(1, 0, 40, 50);
  console.log(scores);

  scores.splice(3, 2);
  console.log(scores);
}

/* join()について split()で文字列から配列を作るには？*/
{
  const names = ['Taro', 'Jiro', 'Saburo'];
  // Taro|Jiro|Saburo
  s = names.join("|"); //Taro|Jiro|Saburoになる
  console.log(s);

  saaray = s.split("|"); // ['Taro', 'Jiro', 'Saburo']配列になる
  console.log(saaray);
}

/* map()について 新しい配列に置き換える*/
{
  const prices = [100, 150, 200];

  // priceTax = []
  // prices.forEach((price) => {
  //   priceTax.push(price * 1.1);
  // });
  // console.log(priceTax)

  const priceTax = prices.map((price) => {
    return price * 1.1;
  });
  console.log(priceTax)
}

/* filter()について 要素を条件分岐して新しい配列に置き換える*/
{
  const prices = [100, 150, 200];
  // forEachを使うなら、、、
  // const priceOver150 = [];
  // prices.forEach((price) => {
  //   if (150 <= price)
  //     priceOver150.push(price)
  // });
  // console.log(priceOver150)

  const priceOver150 = prices.filter((price) => {
    return 150 <= price;
  })
  console.log(priceOver150)
}

/* 分割代入 */
{
  const scores = [70, 90, 80, 85];

  // const first  = scores[0];
  // const second = scores[1];
  // const third  = scores[2];
  // const fourth = scores[3];
  const [first, second, third, fourth] = scores; //上の4つのコメントと一緒の意味になる

  console.log(first);
  console.log(second);
  console.log(third);
  console.log(fourth);
}

/* 分割代入 値の入れ替え*/
{
  let start = 'Tokyo';
  let goal = 'Osaka';

  // // let temp = '';   // 一時的に保存する変数 面倒くさい
  // let temp = '';
  // temp = start;   // temp = 'Tokyo'
  // start = goal;   // start = 'Osaka'
  // goal = temp;    // goal = 'Tokyo'

  [start, goal] = [goal, start] //分割代入すると値の入れ替えが楽になる！

  console.log(start);
  console.log(goal);

}

/* レスト構文 レストは余ったものという意味*/
{
  const scores = [70, 90, 80, 85];
  const [first, ...others] = scores; //...を使ったのがレスト構文

  console.log(first);
  console.log(others);
}

/* スプレッド構文 広げるという意味*/
{
  const moreScores = [100, 110];
  const scores = [70, 90, 80, 85, ...moreScores]; //...を使ったのがスプレッド構文
  const [first, ...others] = scores;

  console.log(first);
  console.log(others);
}
