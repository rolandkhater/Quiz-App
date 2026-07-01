import Header from "./Header.jsx";
import Question from "./Question.jsx";

function App() {
    const group1 = [
        'Using an if-else statement.',
        'Using the && operator.',
        'Using a ternary operator.',
        'Using the #if template syntax.'
    ];

    return (<>
        <Header />
        <Question
            quest="Which approach can NOT be used to render content conditionally?"
            answers={group1}
        />
    </>
    )
}

export default App;
