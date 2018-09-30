class Api::V1::ItemsController < ApplicationController
  before_action :get_item,only:[:destroy,:update]
  skip_before_action :verify_authenticity_token

  def index
    @items=Item.all
    json_response(@items)
  end

  def create
    @item = Item.create(item_params)
    json_response(@item, :created)
  end

  def destroy
    @item.destroy
    render json:{status:204}
  end

  def update
    @item.update(item_params)
    json_response(@item)
  end


  private

  def get_item
    @item = Item.find(params[:id])
  end

  def item_params
    params.require(:item).permit(:id, :name,:description, :status)
  end
end
