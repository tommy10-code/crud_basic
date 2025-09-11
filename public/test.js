'user strict'
/* モーダルウィンドの作成 */
{
  const open = document.getElementById('open');
  const close = document.getElementById('close');
  const modal = document.getElementById('modal');
  const mask = document.getElementById('mask');

  //クリックしたら、ウィンドウの表示
 open.addEventListener('click', () => {
  mask.classList.remove('hidden');
  modal.classList.remove('translate-y-[-500px]');
 });

//閉じるボタンでクリックしたら、ウィンドウを閉じる
 close.addEventListener('click', () => {
  mask.classList.add('hidden');
  modal.classList.add('translate-y-[-500px]');
 });

//黒背景をクリックしたら、ウィンドウを閉じる
 mask.addEventListener('click', () => {
  // mask.classList.add('hidden');
  // modal.classList.add('translate-y-[-500px]');
  close.click(); //closeのアクションと一緒になる
 });

}

/* getElementByIdについて */
//document.getElementById('open') は、HTML内で id="open" を持つ要素を探して取得します。
//その要素（例えば <button id="open">開く</button> のようなもの）が見つかれば、その DOM 要素オブジェクトが返されます。
//変数 open に、その DOM 要素への参照が代入されます。

/* 使い分け */
// idなら getElementById、それ以外や複雑な条件なら querySelector

//modal.classList.remove('translate-y-[-500px]');
//modal.classList.add('translate-y-0');
//この瞬間、ブラウザは「transform の値が -500px → 0px に変わった」と認識。
//本来は一瞬で切り替わるがアニメーションで動きが出る