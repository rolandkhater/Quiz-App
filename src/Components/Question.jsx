import { use, useEffect, useState } from "react";
import ProgressBar from "./ProgressBar.jsx";
import Answers from "./Answers.jsx";
import questions from "../questions.js";

export default function Question({ questIndex, chooseAnswer, onSkip }) {
    const [answer, setAnswer] = useState({
        selectedAnswer: '',
        isCorrect: null,
    });

    let timer = 10000;
    if(answer.selectedAnswer){
        timer = 1000;
    }

    if(answer.isCorrect !== null){
        timer = 2000;
    }

    function hadnleSelectAnswer(answer) {
        setAnswer({
            selectedAnswer: answer,
            isCorrect: null,
        })
        setTimeout(() => {
            setAnswer({
                selectedAnswer: answer,
                isCorrect: questions[questIndex].answers[0] === answer,
            })

            setTimeout(() => {
                chooseAnswer(answer);
            }, 2000);
        }, 1000);

    }

    let answerState = '';

    if (answer.selectedAnswer && answer.isCorrect !== null) {
        answerState = answer.isCorrect ? 'correct' : 'wrong';
    } else if (answer.selectedAnswer) {
        answerState = 'answered';
    };

    return (
        <div>
            <div id="question">
                <ProgressBar key={timer} timeOut={timer} onTimeOut={answer.selectedAnswer === '' ? onSkip : null} mode={answerState}/>
                <h2>{questions[questIndex].text}</h2>
                <Answers
                    choose={hadnleSelectAnswer}
                    answerState={answerState}
                    userAnswer={answer.selectedAnswer}
                    answers={questions[questIndex].answers} />

            </div>
        </div>
    )
}