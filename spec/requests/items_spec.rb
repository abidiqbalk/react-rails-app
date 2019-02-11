require 'rails_helper'
require 'faker'
RSpec.describe 'Item API', type: :request do
  # initialize test data
  let!(:item) { create_list(:item, 10) }
  let(:item_id) { item.first.id }

  describe 'GET /api/v1/items' do
    # make HTTP get request before each example
    before { get '/api/v1/items' }

    it 'returns items' do
      json = JSON.parse(response.body)
      expect(json).not_to be_empty
      expect(json.size).to eq(10)
    end

    it 'returns status code 200' do
      expect(response).to have_http_status(200)
    end
  end

  describe 'POST api/v1/items' do
    # valid payload
    let(:valid_attributes) { {"item":{"name":Faker::FunnyName.name, "description":Faker::Lorem.sentence,status:"available" }}}
    let(:invalid_attributes) { {"item":{"name":nil, "description":Faker::Lorem.sentence,status:"available" }}}


    context 'when the request is valid' do
      before { post '/api/v1/items', params: valid_attributes }

      it 'returns status code 201' do
        expect(response).to have_http_status(201)
      end
    end

    context 'when the request is invalid' do
      before { post '/api/v1/items', params: invalid_attributes }
      it 'returns status code 422' do
        expect(response).to have_http_status(422)
      end

      it 'returns a validation failure message' do
        expect(response.body).to match(/name/)
      end
    end
  end
  #
  #
  describe 'PUT /api/v1/items/:id' do
    let(:valid_attributes) { {"item":{"name":Faker::FunnyName.name, "description":Faker::Lorem.sentence,status:"available" }}}
    context 'when the record exists' do
      before { put "/api/v1/items/#{item_id}", params: valid_attributes }
      it 'returns status code 200' do
        expect(response).to have_http_status(200)
      end
    end
  end
  describe 'DELETE /api/v1/items/:id' do
    before { delete "/api/v1/items/#{item_id}" }
    it 'returns status code 204' do
      expect(Item.where(id: item_id).count).to eq(0)
    end
  end
end