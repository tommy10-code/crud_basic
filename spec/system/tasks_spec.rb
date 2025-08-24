require 'rails_helper'

RSpec.describe "Tasks", type: :system do
  it "タスクを作成できるか" do
    visit new_task_path         # ページにアクセス
    fill_in "タイトル", with: "買い物に行く"  # フォームに入力
    click_button "送信"          # ボタンをクリック

    expect(page).to have_content "買い物に行く" # 結果を確認
  end

  it "タイトルが空白だと作成に失敗し、エラーが表示される" do
    visit new_task_path
    fill_in "タイトル", with: " "
    click_button "送信"
    expect(page).to have_content('タイトルを入力してください')
  end
end
