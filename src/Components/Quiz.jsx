import questions from "../questions.js"
import { useState, useEffect, useCallback } from "react";
import Question from "../Components/Question.jsx";
import { use } from "react";
import { QuizContext } from "../QuizContext.jsx";
import Results from "./Results.jsx";

export default function Quiz() {


    const [answer, setAnswer] = useState([]);

    const activeAnswerIndex = answer.length;



    const handleAnswer = useCallback(() => function handleAnswer(selectedAnswer) {

        setAnswer((prevAnswers) => {
            return [...prevAnswers, selectedAnswer ];
        });
    }, []);

    const handleSkipAnswer = useCallback(() => handleAnswer(null), [handleAnswer]);

    useEffect(() => {
        console.log("Current state of answers:", answer);
        console.log(activeAnswerIndex);
    }, [answer]);

    const finished = activeAnswerIndex === questions.length;

    if (finished) {
        return (<Results />)
    }
    else {

        const shuffledAnswers = [...questions[activeAnswerIndex].answers];
        shuffledAnswers.sort(() => Math.random() - 0.5);

        return (
            <div>
                {questions.map((question) => {
                    if (question.id !== questions[activeAnswerIndex].id) { return (null) };
                    return (
                        <Question key={question.id}
                            quest={question.text}
                            answers={shuffledAnswers}
                            chooseAnswer={handleAnswer()}
                            onSkip = {handleSkipAnswer()}
                        />


                    )
                })
                }
            </div>

        )
    }
}