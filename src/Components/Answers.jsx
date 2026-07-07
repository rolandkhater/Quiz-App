import { useRef } from "react";

export default function Answers({ chooseAnswer, check, userAnswer, answers }){
    const shuffledAnswers = useRef();
    
            if(!shuffledAnswers.current){
        shuffledAnswers.current = [...answers];
        shuffledAnswers.current.sort(() => Math.random() - 0.5);
        }

    return(
               <ul id="answers">
                    {shuffledAnswers.current.map((answerOption) => {
                        const isSelected = userAnswer === answerOption;
                        let cssClasses = '';

                        if(check === 'answered' && isSelected){
                            cssClasses='selected';
                        };
                       if((check === 'correct' || check === 'wrong') && isSelected){
                            cssClasses= check;
                        }

                        
                        return(
                        <li className="answer" key={answerOption}>
                            <button className={cssClasses}
                                onClick={() => chooseAnswer(answerOption)}>
                                {answerOption}
                            </button>
                        </li>
)})}
                </ul>

    )
}