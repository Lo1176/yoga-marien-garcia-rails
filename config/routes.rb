Rails.application.routes.draw do
  root to: 'pages#home'
  get 'bio', to: 'pages#bio'
  get 'yoga', to: 'pages#yoga'
  get 'wellness', to: 'pages#wellness'
  get 'knee', to: 'pages#knee'
end
