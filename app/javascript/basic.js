{ 
  class User {
    name;
    _score; //getter / setter と組み合わせるための慣習 公開用のプロパティ名と、内部で保持する変数名を区別したい時に使います。
    //#score #を使うことで外部からアクセスができなくなる。privateフィールドになる

    constructor(name, score) {
      this.name = name;
      this._score = score;
    }

    getUserString() {
      return `${this.name}: ${this.score}`;
    }

    get score() {
      return this._score;
    }

    set score(newValue) {
      if (newValue < 0 || newValue > 100) {
        return console.log('値が不正です'); //早期リターンにより、if文が当てはまれば処理終了
      }
      this._score = newValue; //if文とは違う場合は、今回はインタンスの値がそのまま代入
    }
  }

  const user = new User('taro', 70);
  user.score = 1000;        //これを書いたら、セッターが呼ばれる
  user.score = 50;          //セッターが呼ばれゲッターに50が代入される
  console.log(user.score);  // ゲッターが呼ばれてその中身が
}

{
  class User {
  constructor(name) {
    this._name = name; // 実際の値をここに持つ
  }

  get name() {
    // ← getter：読み取り時に自動で呼ばれる
    console.log("getter発動");
    return this._name.toUpperCase();
  }

  set name(newName) {
    // ← setter：代入時に自動で呼ばれる
    if (!newName) {
      console.log("空の名前は不可");
      return;
    }
    console.log("setter発動");
    this._name = newName;
  }
}

const u = new User("taro");
console.log(u.name);  // ✅ getterが呼ばれて "TARO" を返す
u.name = "jiro";      // ✅ setterが呼ばれて _name が "jiro" に更新される
console.log(u.name);  // ✅ getterが呼ばれて "TARO" を返す

}