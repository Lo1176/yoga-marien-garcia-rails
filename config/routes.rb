Rails.application.routes.draw do
  scope '(:locale)', locale: /fr|ca/ do
    root to: 'pages#home'
    get 'bio', to: 'pages#bio'
    get 'yoga', to: 'pages#yoga'
    get 'wellness', to: 'pages#wellness'
    get 'knee', to: 'pages#knee'
  end
end
