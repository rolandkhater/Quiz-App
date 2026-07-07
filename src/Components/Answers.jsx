import { useRef } from "react";

export default function Answers({ chooseAnswer, answerState, userAnswer, answers }) {
    const shuffledAnswers = useRef();

    if (!shuffledAnswers.current) {
        shuffledAnswers.current = [...answers];
        shuffledAnswers.current.sort(() => Math.random() - 0.5);
    }

    return (
        <ul id="answers">
            {shuffledAnswers.current.map((answerOption) => {
                const isSelected = userAnswer === answerOption;
                let cssClasses = '';

                if (answerState === 'answered' && isSelected) {
                    cssClasses = 'selected';
                };
                if ((answerState === 'correct' || answerState === 'wrong') && isSelected) {
                    cssClasses = answerState;
                }


                return (
                    <li className="answer" key={answerOption}>
                        <button className={cssClasses}
                            onClick={() => chooseAnswer(answerOption)}>
                            {answerOption}
                        </button>
                    </li>
                )
            })}
        </ul>

    )
}