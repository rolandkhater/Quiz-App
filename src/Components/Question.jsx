import { use, useEffect } from "react";
import ProgressBar from "./ProgressBar.jsx";

export default function Question({ quest, answers, chooseAnswer, onSkip }) {

    return (
        <div id="quiz">
            <div id="question">
                <ProgressBar timeOut={10000} onTimeOut={onSkip} />
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