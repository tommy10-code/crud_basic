class UsersController < ApplicationController
  def index
    @user = [
      { id:1, name:"Alice", bio: "好きな食べ物はラーメン"},
      { id:2, name:"Bob", bio: "週末はサッカー"},
       {id:3, name:"Carol", bio: "読書好き"},
    ]
  end

  def show
    @user = {
      params[:id],
      name: "User #{params[:id]}",
      bio: "これはユーザー#{params[:id]}の自己紹介です"
  }
  end
end
