import { use, useEffect } from "react";
import ProgressBar from "./ProgressBar.jsx";
import Answers from "./Answers.jsx";

export default function Question({ activeAnswerIndex, quest, chooseAnswer, onSkip, answerState, userAnswer, answers }) {

    return (
        <div id="quiz">
            <div id="question">
                <ProgressBar timeOut={10000} onTimeOut={onSkip} />
                <h2>{quest}</h2>
                <Answers chooseAnswer={chooseAnswer} answerState={answerState} userAnswer={userAnswer} answers={answers} />

            </div>
        </div>
    )
}