require 'rails_helper'
RSpec.describe Item, type: :model do
  before do
    @item = create(:item)
  end
  # Validation tests
  context "Check validation" do
    it { should validate_presence_of(:name) }
  end

end