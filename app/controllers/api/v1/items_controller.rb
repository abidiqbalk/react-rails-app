class Api::V1::ItemsController < ApplicationController
  before_action :get_item,only:[:destroy,:update]
  skip_before_action :verify_authenticity_token

  def index
    parsed =params[:q]? JSON.parse(params[:q]) :params[:q]
    @q = Item.ransack(parsed)
    @items = @q.result(distinct: true).order(id: :desc)
    json_response(@items)
  end

  def create
    @item = Item.new(item_params)
    if @item.save
      json_response(@item, :created)
    else
      json_response(@item.errors,:unprocessable_entity)
    end
  end

  def destroy
    @item.destroy
    render json:{status:204}
  end

  def update
    if @item.update(item_params)
      json_response(@item)
    else
      json_response(@item.errors,:unprocessable_entity)
    end
  end


  private

  def get_item
    @item = Item.find(params[:id])
  end

  def item_params
    params.require(:item).permit(:id, :name,:description, :status)
  end
end
