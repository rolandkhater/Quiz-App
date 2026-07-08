import { use, useEffect, useState } from "react";
import ProgressBar from "./ProgressBar.jsx";
import Answers from "./Answers.jsx";
import questions from "../questions.js";

export default function Question({ questIndex, chooseAnswer, onSkip }) {
    const [answer, setAnswer ] = useState({
        selectedAsnwer: '',
        isCorrect: null,
    });

    function hadnleSelectAnswer(answer){
        setAnswer({
            selectedAsnwer: answer,
            isCorrect: null,
        })
        setTimeout(() => {
            setAnswer({
                selectedAsnwer: answer,
                isCorrect: questions[questIndex].answers[0] === answer,
            })

            setTimeout(() => {
                chooseAnswer(answer)
            }, 2000);
        }, 1000);
        
    }

    let answerState = '';
   if(answer.selectedAsnwer){
        answerState = 'answered';
    }else if(answer.selectedAsnwer && answer.iscorrect !== null){
        answerState = answer.isCorrect ? 'correct' : 'wrong';
    };

    return (
        <div>
            <div id="question">
                <ProgressBar timeOut={10000} onTimeOut={onSkip} />
                <h2>{questions[questIndex].text}</h2>
                <Answers 
                choose={hadnleSelectAnswer}
                answerState={answerState} 
                userAnswer={answer.selectedAsnwer} 
                answers={questions[questIndex].answers} />

            </div>
        </div>
    )
}