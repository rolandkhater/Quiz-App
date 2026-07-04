import { useState, useEffect } from "react";
import Header from "./Components/Header.jsx";
import Question from "./Components/Question.jsx";
import { QuizContext } from "./QuizContext.jsx";
import questions from "./questions.js";

function App() {
   
    const [answer, setAnswer] = useState([]);
    const [questionNumber, setQuestionNumber] = useState(0);

    function handleAnswer(questionId, ans) {
        setQuestionNumber((prevIndex) => (prevIndex + 1)%questions.length)
        setAnswer((prevAnswers) => {
            const existingIndex = prevAnswers.findIndex((item) =>
                item.questionId === questionId);
           

            if (existingIndex !== -1) {
                const updated = [...prevAnswers];
                updated[existingIndex] = { questionId, ans };
                return updated;
            } else {
                    
                return [...prevAnswers, { questionId, ans }];
            }
           
        });

    };

  //logging the states

    useEffect(() => {
        console.log("Current state of answers:", answer);
        console.log(questionNumber);
    }, [answer]);


    const CtxValue = {
        chooseAnswer: handleAnswer,
    }


    return (
        <QuizContext value={CtxValue}>
            <Header />
            
        {questions.map((question) => {
            if(question.id !== questions[questionNumber].id) return null;
            return(
            (<Question key={ question.id }  id={question.id}
                quest={question.text}
                answers={question.answers} />));
                })}
        </QuizContext>
    )
}

export default App;
