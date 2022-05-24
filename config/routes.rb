Rails.application.routes.draw do
  root "pages#home"

  get "/fragen", to: "pages#fragen"
end
