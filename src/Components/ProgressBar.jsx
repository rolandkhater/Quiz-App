import { useEffect, useState } from "react"

export default function ProgressBar({ onTimeOut, timeOut, mode }){
const [timeRemaining, setTimeRemaining] = useState(timeOut);

useEffect(() => {
   const timer = setTimeout(onTimeOut, timeOut);
    return () => {
        clearTimeout(timer);
    }
}, [timeOut, onTimeOut])

useEffect(() => {
const interval = setInterval(() => {
setTimeRemaining(prevTime => prevTime - 100);
}, 100);
return() => {
    clearInterval(interval);
}
},
[])

    return(
        <progress id="question-time" value={timeRemaining} max={timeOut} className={mode} />
    )
}