class Api::V1::ItemsController < ApplicationController
  before_action :get_item,only:[:edit,:update]
  skip_before_action :verify_authenticity_token

  def index
    @items=Item.all
    render json: @items
  end

  def create
    item = Item.create(item_params)
    render json: item
  end

  def destroy
    Item.destroy(params[:id])
  end

  def update
    item.update_attributes(item_params)
    render json: item
  end

  def get_item
    item = Item.find(params[:id])
  end

  private

  def item_params
    params.require(:item).permit(:id, :title,:description, :status)
  end
end
