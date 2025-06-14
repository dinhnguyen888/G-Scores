Rails.application.routes.draw do
  mount Rswag::Ui::Engine => '/api-docs'
  mount Rswag::Api::Engine => '/api-docs'

  scope 'students' do
    get 'search/:registration_number', to: 'students#search_by_registration'
    get 'statistics', to: 'students#score_statistics'
    get 'top_group_a', to: 'students#top_group_a'
  end
end
