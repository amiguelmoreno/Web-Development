import { useState } from "react";

export default function App() {
  const [bill, setBill] = useState("");
  const [percentage1, setPercentage1] = useState(0);
  const [percentage2, setPercentage2] = useState(0);

  const tip = bill * ((percentage1 + percentage2) / 2 / 100);

  function handlReset() {
    setBill("");
    setPercentage1(0);
    setPercentage2(0);
  }

  return (
    <div>
      <Bill bill={bill} onSetBill={setBill}></Bill>
      <Service percentage={percentage1} onSelect={setPercentage1}>
        <label>How did you like the service?</label>
      </Service>
      <Service percentage={percentage2} onSelect={setPercentage2}>
        <label>How did your friend like the service?</label>
      </Service>

      {bill > 0 && (
        <>
          <FinalPrice bill={bill} tip={tip}></FinalPrice>
          <Reset onReset={handlReset}></Reset>
        </>
      )}
    </div>
  );
}

function Bill({ bill, onSetBill }) {
  return (
    <div>
      <label>How much was the bill?</label>
      <input
        type="text"
        value={bill}
        onChange={(e) => onSetBill(+e.target.value)}
      ></input>
    </div>
  );
}

function Service({ children, percentage, onSelect }) {
  return (
    <div>
      {children}
      <select value={percentage} onChange={(e) => onSelect(+e.target.value)}>
        <option value="0">Dissatisfied (0%)</option>
        <option value="5">It was okay (5%)</option>
        <option value="10">It was good (10%)</option>
        <option value="20">Absolutely amazing! (20%)</option>
      </select>
    </div>
  );
}

function FinalPrice({ bill, tip }) {
  return (
    <p>
      You pay ${bill + tip} (${bill} + ${tip} tip)
    </p>
  );
}

function Reset({ onReset }) {
  return <button onClick={onReset}>Reset</button>;
}
