import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  return (
    <>
      <Steps></Steps>
      <Steps></Steps>
      <Counts></Counts>
    </>
  );
}

function Counts() {
  const [step, setSteps] = useState(1);
  const [count, setCount] = useState(0);
  const today = new Date();

  function handleReset() {
    setSteps(1);
    setCount(0);
  }

  return (
    <>
      <div style={{ display: "flex" }}>
        <input
          type="range"
          min="0"
          max="10"
          value={step}
          onChange={(e) => setSteps(Number(e.target.value))}
        ></input>
        <label>Step: {step}</label>
      </div>
      <div style={{ display: "flex" }}>
        <button onClick={() => setCount(count - step)}>-</button>
        <input
          type="text"
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
        ></input>
        <button onClick={() => setCount(count + step)}>+</button>
      </div>
      <p>
        {count} days from now is{" "}
        {today.toDateString(today.setDate(today.getDate() + count))}
      </p>

      <button onClick={handleReset}></button>
    </>
  );
}

function Steps() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  function handlePrevious() {
    if (step > 1) setStep((s) => s - 1);
  }

  function handleNext() {
    if (step < 3) setStep((s) => s + 1);
  }

  return (
    <>
      <button className="close" onClick={() => setIsOpen((is) => !isOpen)}>
        &times;
      </button>

      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>

          <p className="message">
            Step {step}: {messages[step - 1]}
          </p>

          <div className="buttons">
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={handlePrevious}
            >
              Previous
            </button>
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={handleNext}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </>
  );
}
