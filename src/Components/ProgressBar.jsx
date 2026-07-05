import { useEffect, useState } from "react"

export default function ProgressBar({ TIMER }){
const [timeRemaining, setTimeRemaining] = useState(TIMER);

// useEffect(() => {
// const interval = setInterval(() => {
// setTimeRemaining(prevTime => prevTime - 10);
// }, 5000);
// return() => {
//     clearInterval(interval);
// }
// },
// [])

    return(
        <progress value={5000} max={TIMER} />
    )
}