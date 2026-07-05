import questions from "../questions.js"
import { useState, useEffect } from "react";
import Question from "../Components/Question.jsx";
import { use } from "react";
import { QuizContext } from "../QuizContext.jsx";

export default function Quiz(){

    const [answer, setAnswer] = useState([]);

    const activeAnswerIndex = answer.length;

    function handleAnswer( selectedAnswer) {
        // clearTimeout(answeringTime);
        //   const checkingTime = setTimeout(() => {nextQuestHandler()}, 2000);
            setAnswer((prevAnswers) => {
               
                    return [...prevAnswers,  selectedAnswer ];
                
               
            });
    
        };
          useEffect(() => {
        console.log("Current state of answers:", answer);
        console.log(activeAnswerIndex);
    }, [answer]);

    return(<div>
        {questions.map((question) => {
            if(question.id !== questions[activeAnswerIndex].id )  {  return (null)};
            return(
                <Question key={ question.id }  id={question.id}
                                quest={question.text}
                                answers={question.answers}
                                chooseAnswer={handleAnswer} />

                  
            )})
}
</div>)
}