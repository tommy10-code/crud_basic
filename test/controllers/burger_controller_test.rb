require "test_helper"

class BurgerControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get burger_index_url
    assert_response :success
  end
end
