{
  function showHeader(){
    console.log('Header');
  }
  
  async function showUsers(){
    try { //tryとcatch catchでエラーが出てたと金処理をかける
    const response = await fetch('https://dotinstall.github.io/setup/fetchapi/invalid-users.json') //URL先のjson形式に誤りがあるため、意図的にエラーとなる
    const users = await response.json();
    console.log(users);
    } catch(err) { //(err)は別のでも大丈夫
      console.log("エラーが発生");
      console.log("エラー内容" + err);
    }
  }

    //fetchの次に行う処理として、.thenを使う asyncとawaitと一緒の意味 今ではasync,awaitを使うことが多い
  function showUsers() {
    fetch('https://dotinstall.github.io/setup/fetchapi/invalid-users.json')
    .then((response) => {
      return response.json();
    })
    .then((users) => {
      console.log(users);
    })
    .catch((err) => {
      console.log("エラーが発生");
      console.log("エラー内容" + err);
    });
  }


  function showFooter(){
    console.log('Footer');
  }

  showHeader();
  showUsers();
  showFooter();

}