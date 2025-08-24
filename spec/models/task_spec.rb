require 'rails_helper'

RSpec.describe Task, type: :model do
  describe "バリデーションチェック" do
    it "設定したすべてのバリデーションが機能しているか" do
      task = Task.new(title: "今日の天気")
        expect(task).to be_valid
    end
  end

  
end
