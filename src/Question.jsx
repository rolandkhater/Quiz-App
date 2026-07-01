
export default function Question({ quest, answers }) {
    return (
        <div id="quiz">
            <p id="question">
                <h2>{quest}</h2>
            </p>
            <div className="answer">
                {answers.map((answer, ansIndex) => (
                    <button key={ansIndex}>{answer}</button>
                ))}
            </div>

        </div>
    )
}