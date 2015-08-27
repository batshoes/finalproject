require 'rails_helper'

RSpec.describe "home/index.html.erb", type: :view do
  
it "displays Hey" do
  render

  expect(rendered).to have_css(text: "Hey")
end

end