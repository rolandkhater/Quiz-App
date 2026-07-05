import Resultimg from "../assets/quiz-complete.png"

export default function Results() {
    return (
        <div id="summary">
            <img src={Resultimg} alt="Quiz-complete" />
            <h2>Quiz Completed!</h2>
        </div>
    )
}