function StartScreen({ numQuestions, dispatch }) {
    return (
        <div className='start'>
            <h2>Bem-vindo ao quiz React</h2>
            <h3>{numQuestions} questões para testar seu nível de conhecimento</h3>
            <button className='btn btn-ui' onClick={() => dispatch({ type: 'start' })}>Vamos começar</button>
        </div>
    )
}

export default StartScreen;