require 'rails_helper'

describe "Making a message", :type => :feature do


  it "makes a message" do
    visit '/messages/new'
    within(".right") do
      fill_in 'rec_email', :with => 'user@example.com'
      fill_in 'to', :with => 'James'
      fill_in 'title', :with => "Zer0's Poem"
      fill_in 'body', :with => '|Hey|
                                This is me.'
      fill_in 'from', :with => 'Steve'
      fill_in 'send_email', :with => 'pokemon@gmail.com'
    end
    click_button 'Send'
    expect(Message.last).to be_valid
  end
end

RSpec.describe "messages/show.html.erb", type: :view do
  it "displays title and body" do
    assign :message, Message.new(title: "Buy milk")

    render

    expect(rendered).to have_css("header h3", text: "Buy milk")
  end
end