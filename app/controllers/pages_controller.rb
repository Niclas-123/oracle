class PagesController < ApplicationController
  def home
  end

  def fragen
    @question = Question.new
  end

  def antwort
  end
end
