import { useState } from "react";

const questions = [
  'question 1',
  'question 2',
  'question 3',
  'question 4',
  'question 5'
]

function QuizNavBar() {
  const [questionIndex, setQuestionIndex] = useState(0)

  const goBack = () => setQuestionIndex(prevIndex => prevIndex - 1)
  const goToNext = () => setQuestionIndex(prevIndex => prevIndex + 1)

  const onFirstQuestion = questionIndex === 0
  const onLastQuestion = questionIndex === questions.length -1

  return (
    <nav>
      <span>Question #{questionIndex + 1}</span>
      <div>
        <button disabled={onFirstQuestion} onClick={goBack}>Go Back</button>
        <button disabled={onLastQuestion} onClick={goToNext}>Next Question</button>
      </div>
    </nav>
  ) 
}

export default QuizNavBar