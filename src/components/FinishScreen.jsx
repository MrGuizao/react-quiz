function FinishScreen({ points, maxPossiblePoints, highscore, dispatch }) {
    const percentage = (points / maxPossiblePoints) * 100;

    return (
        <>
            <p className="result">
                Você fez <strong>{points}</strong> pontos de {maxPossiblePoints} ({Math.ceil(percentage)}% acertado)
            </p>
            <p className="highscore">(Highscore: {highscore} pontos)</p>
            <button
                className="btn btn-ui"
                onClick={() => dispatch({ type: "restart" })}
            >
                Começar novamente
            </button>
        </>
    );
}

export default FinishScreen;