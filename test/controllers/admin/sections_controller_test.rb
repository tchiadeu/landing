require "test_helper"

class Admin::SectionsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get admin_sections_index_url
    assert_response :success
  end

  test "should get edit" do
    get admin_sections_edit_url
    assert_response :success
  end

  test "should get update" do
    get admin_sections_update_url
    assert_response :success
  end
end
