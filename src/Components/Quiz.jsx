import questions from "../questions.js"
import { useState, useEffect, useCallback } from "react";
import Question from "../Components/Question.jsx";
import Results from "./Results.jsx";

export default function Quiz() {

    const [userAnswers, setUserAnswers] = useState([]);

    const activeAnswerIndex = userAnswers.length;
    const finished = activeAnswerIndex === questions.length;

    const handleAnswer = useCallback(function handleAnswer(selectedAnswer) {
        setUserAnswers((prevAnswers) => {
            return [...prevAnswers, selectedAnswer];
        })
        
    }, []);

    //skipping question

    const handleSkipAnswer = useCallback(() => handleAnswer(null), [handleAnswer]);

    if (finished) {
        return (
        <Results 
        
        userAnswers={userAnswers}/>
    )
    }


    return (
        <div id="quiz">
            <Question 
                key={activeAnswerIndex}
                questIndex={activeAnswerIndex}
                chooseAnswer={handleAnswer}
                onSkip={handleSkipAnswer}
            />
        </div>
    )

}