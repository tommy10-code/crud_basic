require 'rails_helper'

RSpec.describe 'Smoke', type: :system do
  it 'トップページにアクセスして文言が見える', js: true do
    visit '/'
    expect(page).to have_content('topページ')
  end
end
