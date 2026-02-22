// `https://api.frankfurter.app/latest?amount=100&from=EUR&to=USD`

import { useEffect, useState } from "react";

export default function App() {
  const [inputAmount, setInputAmount] = useState("");
  const [convertFrom, setConvertFrom] = useState("USD");
  const [convertTo, setConvertTo] = useState("EUR");
  const [outPut, setOutPut] = useState("");
  const [error, setError] = useState("");

  useEffect(
    function () {
      setError("");

      if (inputAmount === "") return;

      try {
        if (convertFrom === convertTo) {
          throw new Error(
            "The currencies to exchange the entered volume must be different",
          );
        }

        async function useConverter() {
          const res = await fetch(
            `https://api.frankfurter.app/latest?amount=${inputAmount}&from=${convertFrom}&to=${convertTo}`,
          );

          const data = await res.json();
          console.log(data);
          const { rates } = data;
          const rate = rates[convertTo];
          console.log(rate);
          setOutPut(rate);
        }
        useConverter();
      } catch (error) {
        setError(error.message);
        return;
      }
    },
    [inputAmount, convertFrom, convertTo],
  );

  return (
    <div>
      <input
        value={inputAmount}
        onChange={(e) => {
          setInputAmount(Number(e.target.value));
        }}
      />
      <select
        value={convertFrom}
        onChange={(e) => setConvertFrom(e.target.value)}
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <select value={convertTo} onChange={(e) => setConvertTo(e.target.value)}>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <p>OUTPUT: {outPut}</p>
      {error && <p>{error}</p>}
    </div>
  );
}
