console.log("Hello, Basic!");

{
  //最大値を取得
  const numbers = [1, 2, 3, 4, 5];
  // max = 0として、それより大きかったら、maxを更新していく
  let max = 0;
  numbers.forEach((num) => {
    if (max < num){
      max = num
    };
  });
  console.log(max);

  // Math.maxを使って最大値を取得する
  //スプレッド構文だと、(1, 2, 3, 4, 5)と数字で渡せる
  console.log(Math.max(...numbers));
  console.log(Math.min(...numbers));
}