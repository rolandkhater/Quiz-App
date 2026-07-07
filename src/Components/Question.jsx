import { use, useEffect } from "react";
import ProgressBar from "./ProgressBar.jsx";
import Answers from "./Answers.jsx";

export default function Question({ quest, chooseAnswer, onSkip, check, userAnswer, answers}) {

    return (
        <div id="quiz">
            <div id="question">
                <ProgressBar timeOut={10000} onTimeOut={onSkip} />
                <h2>{quest}</h2>
                <Answers chooseAnswer={chooseAnswer} check={check} userAnswer={userAnswer} answers={answers}/>
        
            </div>
        </div>
    )
}