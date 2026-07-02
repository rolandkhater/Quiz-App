import { use } from "react";
import ProgressBar from "./ProgressBar.jsx";
import { QuizContext } from "../QuizContext.jsx";

export default function Question({ quest, answers, id }) {

    const { chooseAnswer } = use(QuizContext);

    return (
        <div id="quiz">
            <ProgressBar />
            <span id="question">
                <h2>{quest}</h2>
            </span>
            <div className="answer">
                {answers.map((answer, ansIndex) => (
                    <button key={ansIndex} onClick={() => chooseAnswer(id)}>{answer}</button>
                ))}
            </div>

        </div>
    )
}