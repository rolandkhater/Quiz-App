import { use, useEffect } from "react";
import ProgressBar from "./ProgressBar.jsx";

export default function Question({ quest, answers, id, chooseAnswer }) {

    return (
        <div id="quiz">
        <div id="question">
            <ProgressBar />
                <h2>{quest}</h2>
            
            <ul id="answers">
                {answers.map((answerOption) => (
                    <li className="answer" key={answerOption}>
                        <button
                            onClick={() => chooseAnswer(answerOption)}>
                            {answerOption}
                        </button>
                    </li>
                ))}
            </ul>

        </div>
        </div>
    )
}