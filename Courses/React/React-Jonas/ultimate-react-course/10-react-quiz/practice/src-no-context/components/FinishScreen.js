import { useQuiz } from "../context/QuizContext";

function FinishScreen() {
  const [{ points, maxPossiblePoints, highscore, dispatch }] = useQuiz();
  const percentaje = points / maxPossiblePoints;

  let emoji;
  if (percentaje === 100) emoji = "🥇";
  if (percentaje >= 80 && percentaje < 100) emoji = "😁";
  if (percentaje >= 50 && percentaje < 80) emoji = "😌";
  if (percentaje >= 0 && percentaje < 50) emoji = "😟";
  if (percentaje === 0) emoji = "😔";

  return (
    <>
      <p className="result">
        <span>{emoji}</span>You scored <strong>{points}</strong> out of{" "}
        {maxPossiblePoints}({Math.ceil(percentaje)}%)
      </p>
      <p className="highscore">Highscore: {highscore} points</p>

      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "restart" })}
      >
        Restart Quiz
      </button>
    </>
  );
}

export default FinishScreen;
