// 'user strict'

/* DOMについて */

// 2つの処理順の確認 buttonを押したらp要素が変わる buttonと同じ文言に変更する
// textContent → 中身の文字を変える
// {
//   document.querySelector('button').addEventListener('click', () => {
//     // console.log("clicked");
//     document.querySelector('p').textContent = "こんにちは" //これでbuttonを押すとこんにちはに変わる
//     document.querySelector('p').textContent = document.querySelector('button').textContent //buttonのテキストに変わる
//   });
// }

// // ボタンをクリックしたら要素のスタイルを変更する
// document.querySelector('button').addEventListener('click', () => {
//   document.querySelector('p').classList.add('pink-bg', 'red-border'); //cssを追加、add(ここにクラスを書く)
//   document.querySelector('p').classList.remove('green-color');        //cssを削除、removeで
// });

// ボタンをクリックするたびに、要素のスタイルを追加、削除する
document.querySelector('button'),addEventListener('click', () =>{
  console.log(document.querySelector('p').classList.contains('pink-bg'));//false
  // .classList.contains('pink-bg'))これでbuttonを押した時のcssが適用されていたらtrue,されてないならfalseを返す
  if (document.querySelector('p').classList.contains('pink-bg') === false) {
    document.querySelector('p').classList.add('pink-bg');
   } else {
    (document.querySelector('p').classList.remove('pink-bg'))
  }
  
  // ↓このif文を1つでまとめたものがtoggle
  document.querySelector('p').classList.toggle('pink-bg')
});