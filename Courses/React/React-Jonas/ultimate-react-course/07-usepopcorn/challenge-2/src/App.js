// `https://api.frankfurter.app/latest?amount=100&from=EUR&to=USD`

import { useEffect, useState } from "react";

export default function App() {
  const [currencyFrom, setCurrencyFrom] = useState("USD");
  const [currencyTo, setCurrencyTo] = useState("EUR");
  const [input, setInput] = useState(1);
  const [output, setOutput] = useState("");

  useEffect(
    function () {
      async function getCurrencyConversion() {
        const res = await fetch(
          `https://api.frankfurter.app/latest?amount=${input}&from=${currencyFrom}&to=${currencyTo}`
        );

        const data = await res.json();

        // console.log(data.rates[currencyTo]);
        setOutput(data.rates[currencyTo]);
      }

      getCurrencyConversion();
    },
    [currencyFrom, currencyTo, input]
  );

  return (
    <div>
      <InputMain onChangeInput={setInput}></InputMain>
      <SelectCurrency
        currency={currencyFrom}
        onChangeCurrency={setCurrencyFrom}
      ></SelectCurrency>
      <SelectCurrency
        currency={currencyTo}
        onChangeCurrency={setCurrencyTo}
      ></SelectCurrency>
      <Output output={output}></Output>
    </div>
  );
}

function InputMain({ onChangeInput }) {
  return (
    <input
      type="text"
      onChange={(e) => {
        // console.log(e.target.value);

        onChangeInput(Number(e.target.value));
      }}
    />
  );
}

function SelectCurrency({ currency, onChangeCurrency }) {
  return (
    <select value={currency} onChange={(e) => onChangeCurrency(e.target.value)}>
      <option value="USD">USD</option>
      <option value="EUR">EUR</option>
      <option value="CAD">CAD</option>
      <option value="INR">INR</option>
    </select>
  );
}

function Output({ output }) {
  console.log(output);

  return <>{!output ? <p>Enter some amount!</p> : <p>{output}</p>}</>;
}
