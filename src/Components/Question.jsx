import { use } from "react";
import ProgressBar from "./ProgressBar.jsx";
import { QuizContext } from "../QuizContext.jsx";

export default function Question({ quest, answers, id }) {

    const { chooseAnswer, nextQuest } = use(QuizContext);

    return (
        <div id="quiz">
            <ProgressBar />
            <span id="question">
                <h2>{quest}</h2>
            </span>
            <div className="answer">
                {answers.map((answerOption, ansIndex) => (
                    <li id="answers" key={ansIndex}>
                        <button
                            onClick={() => chooseAnswer(id, answerOption)}>
                            {answerOption}
                        </button>
                    </li>
                ))}
            </div>

        </div>
    )
}