import Header from "./Components/Header.jsx";
import Quiz from "./Components/Quiz.jsx";

const TIMER = 5000;

function App() {
    //logging the states
    // const answeringTime = setTimeout(() => {nextQuestHandler()}, 2000);
    // function answered(){


    return (<>
        <Header />
        <main>
        <Quiz />
        </main>
    </>
    )
}

export default App;
