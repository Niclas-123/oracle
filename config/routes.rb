Rails.application.routes.draw do
  root "pages#home"

  get "/fragen", to: "pages#fragen"
  get "/denken", to: "pages#denken"
  get "/antwort", to: "pages#antwort"

  resources :questions
end
