import { useState } from "react";
import Header from "./Components/Header.jsx";
import Question from "./Components/Question.jsx";
import { QuizContext } from "./QuizContext.jsx";
import questions from "./questions.js";

function App() {
      
    const [answer, setAnswer ] = useState({answers:[]});

    function handleAnswer(id){
        setAnswer((prevFinalAnswer) => 
        { 
            const updatedAnswers = [...prevFinalAnswer.answers];
            const existingAnswerIndex = updatedAnswers.findIndex((choice) => choice.id === id);
            const existingAnswer = updatedAnswers[existingAnswerIndex];
        })
        console.log(answer)
    }

    const CtxValue ={
        chooseAnswer: handleAnswer,
    }

    return (
    <QuizContext value={CtxValue}>
        <Header />
        <Question
            quest={questions[0].text}
            answers={questions[0].answers}
        />
           <Question
            quest={questions[1].text}
            answers={questions[1].answers}
        />
    </QuizContext>
    )
}

export default App;
