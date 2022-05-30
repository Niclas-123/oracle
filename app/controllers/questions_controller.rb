class QuestionsController < ActionController::Base

  def create
    @question = Question.new(question_params)
    if @question.submit
      redirect_to denken_path
    else
      redirect_to fragen_path
    end
  end

  private

  def question_params
    params.require(:question).permit(:frage)
  end

end
