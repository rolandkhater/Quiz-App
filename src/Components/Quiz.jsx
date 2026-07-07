import questions from "../questions.js"
import { useState, useEffect, useCallback, use } from "react";
import Question from "../Components/Question.jsx";
import { QuizContext } from "../QuizContext.jsx";
import Results from "./Results.jsx";
import ProgressBar from "./ProgressBar.jsx";

export default function Quiz() {

    const [answer, setAnswer] = useState([]);
    const [answerState, setAnswerState] = useState('');

    const activeAnswerIndex = answerState === '' ? answer.length : answer.length - 1;

    const handleAnswer = useCallback(() => function handleAnswer(selectedAnswer) {
        setAnswerState('answered')
        setAnswer((prevAnswers) => {
            return [...prevAnswers, selectedAnswer];
        })
        setTimeout(() => {
            if (selectedAnswer === questions[activeAnswerIndex].answers[0]) {
                setAnswerState('correct');
            } else {
                setAnswerState('wrong');
            }
            setTimeout(() => {
                setAnswerState('')
            }, 2000)
        }, 1000)
    }, [activeAnswerIndex]);

    //skipping question

    const handleSkipAnswer = useCallback(() => handleAnswer(null), [handleAnswer]);

    // useEffect(() => {
    //     console.log("Current state of answers:", answer);
    //     console.log(activeAnswerIndex);
    // }, [answer]);

    const finished = activeAnswerIndex === questions.length;

    if (finished) {
        return (<Results />)
    }
    else {

        return (
            <div>
                {questions.map((question) => {
                    if (question.id !== questions[activeAnswerIndex].id) { return (null) };
                    return (
                        <Question key={activeAnswerIndex}
                            quest={question.text}
                            chooseAnswer={handleAnswer()}
                            onSkip={handleSkipAnswer()}
                            answerState={answerState}
                            userAnswer={answer[answer.length - 1]}
                            answers={questions[activeAnswerIndex].answers}

                        />


                    )
                })
                }
            </div>

        )
    }
}