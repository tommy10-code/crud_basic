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
// document.querySelector('button'),addEventListener('click', () =>{
  // console.log(document.querySelector('p').classList.contains('pink-bg'));//false
  // .classList.contains('pink-bg'))これでbuttonを押した時のcssが適用されていたらtrue,されてないならfalseを返す
  // if (document.querySelector('p').classList.contains('pink-bg') === false) {
  //   document.querySelector('p').classList.add('pink-bg');
  //  } else {
  //   (document.querySelector('p').classList.remove('pink-bg'))
  // }

  // ↓このif文を1つでまとめたものがtoggle
  // document.querySelector('p').classList.toggle('pink-bg')
// });

//querySelectorAll()で複数の要素を取得しよう
// {
  // document.querySelector('button').addEventListener('click', () => {
  //   // document.querySelector('li').textContent = 'Change'; //liタグの最初の行だけを変更する
  // // document.querySelectorAll('li').textContent = 'Change';
  // // document.querySelectorAll('li')[1].textContent = 'Change'; 
  // //liが3つあるときは、どの要素を変更するのか決められる。1のものが変わる「0始まり」
  
  // // forEachで全ての要素を変更する。
  //   document.querySelectorAll('li').forEach((li) => {
  //     li.textContent = 'Change' ;
  //   });
  // });
// }

// より複雑なセレクター class、idを指定することで変更を選択する
// {
//   document.querySelector('button').addEventListener('click', () => {
//     //1つ取得
//     document.querySelector("#one").textContent = 'Change'    //idは'#'で取得
//     //2つ以上取得なのでforEachを使う
//     document.querySelectorAll('.target').forEach((lii) => {  //classは'.'で取得
//       lii.textContent = 'Change!'
//     })
//   });
// }

//createElement()で要素を新しく生成して表示、削除 appendChild insertBefore
{
  // document.querySelector('button').addEventListener('click', () => {
  //   const liElement =  document.createElement('li');
  //   // 削除したい要素を代入して作成
  //   liElement.textContent = 'hanako'
  //   // appendChildでliタグの最後にliタグとして追加
  //   document.querySelector('ul').appendChild(liElement); 

  //   // insertBeforeで追加する箇所を指定 (oneはid="one"のため)
  //   document.querySelector('ul').insertBefore(liElement, document.querySelector('#one'));

  //   // //要素の削除
  //   if (confirm('Sure') === true) { //confirmで出たメッセージをOKにするとtrue
  //   document.querySelector('#one').remove(); 
  //   }
  // });

}

// フォーム部品の値にアクセスするための方法【('input').value)で入力した値をalertで表示する】
// { // ('input').value)で入力した値をalertで表示する
//   document.querySelector('button').addEventListener('click', () => {
//     alert(document.querySelector('input').value);
//     alert(document.querySelector('textarea').value);
//     // クリックしたらtextareaの値を空白にする
//     document.querySelector('textarea').value = "";
//   });
// }

// //ドロップダウンリストで選択された値を取得する方法
// {
//   //プルダウンで選択した値をアラートで表示したい
//   document.querySelector('button').addEventListener('click', () =>{
//     alert( document.querySelector('select').value)
//   });
// }

// ラジオボタンで選択された値を取得する方法
{ //選んだラジオボタンの値をアラートで表示する
  document.querySelector('button').addEventListener('click', () =>{
    document.querySelectorAll('input').forEach((radio) => {
      if (radio.checked){ //radio.checked true → 選択されている（チェックされている）false → 選択されていない
        alert(radio.value)
      }
    });
  });
}