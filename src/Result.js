const Result = ({correct, questions, TryAgain}) => {
    return (
        <div className="result">
            <h2>Вы отгадали {correct} из {questions.length}</h2>
            <button onClick={TryAgain}>Начать заново</button>
        </div>
    )
}

export default Result;