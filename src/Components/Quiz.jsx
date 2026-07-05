import questions from "../questions.js"
import { useState, useEffect } from "react";
import Question from "../Components/Question.jsx";
import { use } from "react";
import { QuizContext } from "../QuizContext.jsx";
import Results from "./Results.jsx";

export default function Quiz() {


    const [answer, setAnswer] = useState([]);

    const activeAnswerIndex = answer.length;

    useEffect(() => {
        const Timer = setTimeout(() => {
            setAnswer((prevAnswers) => {
                return [...prevAnswers, ""]
            }, 3000)
        })
        clearTimeout(Timer)
    }, [answer])

    function handleAnswer(selectedAnswer) {

        setAnswer((prevAnswers) => {
            return [...prevAnswers, selectedAnswer];
        });
    };

    useEffect(() => {
        console.log("Current state of answers:", answer);
        console.log(activeAnswerIndex);
    }, [answer]);

    const finished = activeAnswerIndex === questions.length;
    console.log(finished)


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
                        <Question key={question.id} id={question.id}
                            quest={question.text}
                            answers={shuffledAnswers}
                            chooseAnswer={handleAnswer}
                        />


                    )
                })
                }
            </div>

        )
    }
}