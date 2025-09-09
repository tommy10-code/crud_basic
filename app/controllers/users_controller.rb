class UsersController < ApplicationController
  def index
    @users = data
  end

  def show
    @user = data.find { |u| u[:id].to_s == params[:id] }
    # この中に{}が入っている
  end
end

# @user = users_data.find { |u| u[:id].to_s == params[:id] }

private
def data
  [
      { id:1, name:"Alice", bio: "好きな食べ物はラーメン"},
      { id:2, name:"Bob", bio: "週末はサッカー"},
       {id:3, name:"Carol", bio: "読書好き"},
    ]
end