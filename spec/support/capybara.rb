# spec/support/capybara.rb
require 'capybara/rspec'

Capybara.default_max_wait_time = 5
Capybara.server = :puma, { Silent: true }

# 明示的にローカルの Chromium と chromedriver を使う
Capybara.register_driver :headless_local_chrome do |app|
  opts = Selenium::WebDriver::Chrome::Options.new
  opts.add_argument 'headless=new'
  opts.add_argument 'no-sandbox'
  opts.add_argument 'disable-dev-shm-usage'
  opts.add_argument 'window-size=1400,1000'

  # Dockerfileで設定した環境変数を使う（なければデフォルトパス）
  opts.binary = ENV['CHROME_BIN'] if ENV['CHROME_BIN'].to_s != ''

  service = Selenium::WebDriver::Service.chrome(
    path: ENV.fetch('CHROMEDRIVER_PATH', '/usr/bin/chromedriver')
  )

  Capybara::Selenium::Driver.new(app, browser: :chrome, options: opts, service: service)
end

RSpec.configure do |config|
  # system spec はすべて headless_local_chrome を使用
  config.before(:each, type: :system) do
    driven_by :headless_local_chrome
  end

  config.include Rails.application.routes.url_helpers, type: :system
  config.include Capybara::DSL,                       type: :system
end
