import { useState, useEffect } from "react";
import Header from "./Components/Header.jsx";
import Question from "./Components/Question.jsx";
import { QuizContext } from "./QuizContext.jsx";
import questions from "./questions.js";

function App() {
    const questNumber = 0;
    const [answer, setAnswer] = useState([]);
    const [question, setQuestion] = useState(0);

    function handleAnswer(questionId, ans) {
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
            // setQuestion((prev) => { prev += 1 });
        });

    }
    ;
    useEffect(() => {
        console.log("Current state of answers:", answer);
    }, [answer]);


    const CtxValue = {
        chooseAnswer: handleAnswer,
    }

    return (
        <QuizContext value={CtxValue}>
            <Header />
            {question === 0 && <Question
                id={questions[0].id}
                quest={questions[0].text}
                answers={questions[0].answers}
            />}
            {question === 1 && <Question
                id={questions[1].id}
                quest={questions[1].text}
                answers={questions[1].answers}
            />}
            {question === 2 && <Question
                id={questions[2].id}
                quest={questions[2].text}
                answers={questions[2].answers}
            />}
            {question === 3 && <Question
                id={questions[3].id}
                quest={questions[3].text}
                answers={questions[3].answers}
            />}
        </QuizContext>
    )
}

export default App;
