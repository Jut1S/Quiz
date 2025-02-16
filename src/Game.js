
const Game = ({correct, question, chooseVariant}) => {
    return (
        <div>
            <h1 className="question">{question.title}</h1>
            <ul>
                {question.variants.map((variants, index) => (
                    <li key={index} onClick={() => {
                        chooseVariant(index);
                    }}>{variants}</li>
                ))}
            </ul>
        </div>
    )
}

export default Game;