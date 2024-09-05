export default function StartScreen({ numQuestions, dispatch }) {
  function startTheQuizHandler() {
    dispatch({ type: "startQuiz" });
  }

  return (
    <div className="start">
      <h2>Welcome to the React Quiz</h2>
      <h3>{numQuestions} questions to test your React mastery</h3>
      <button className="btn btn-ui" onClick={startTheQuizHandler}>
        Let's start
      </button>
    </div>
  );
}
