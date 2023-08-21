import Option from './Options';

function Question({ question, dispatch, answer }) {
  return (
    <div>
      <h3>{question.question}</h3>
      <Option question={question} dispatch={dispatch} answer={answer} />
    </div>
  )
}

export default Question;