import { useState } from "react";

export default function App() {
  const [bill, setBill] = useState(0);
  const [mySatisfaction, setMySatisfaction] = useState("");
  const [friendSatisfaction, setFriendSatisfaction] = useState("");

  function handleReset() {
    setBill(0);
    setMySatisfaction("");
    setFriendSatisfaction("");
  }

  return (
    <div>
      <HandleBill
        onReset={handleReset}
        bill={bill}
        setBill={setBill}
        mySatisfaction={mySatisfaction}
        setMySatisfaction={setMySatisfaction}
        friendSatisfaction={friendSatisfaction}
        setFriendSatisfaction={setFriendSatisfaction}
      />
    </div>
  );
}

function HandleBill({
  bill,
  setBill,
  mySatisfaction,
  setMySatisfaction,
  friendSatisfaction,
  setFriendSatisfaction,
  onReset,
}) {
  const rate = (mySatisfaction + friendSatisfaction) / 2;
  const tip = bill * (rate / 100);
  const total = bill + tip;

  return (
    <div>
      <p>How much was the bill:</p>
      <input
        type="text"
        value={bill}
        onChange={(e) => setBill(Number(e.target.value))}
      />
      <ServiceSatisfaction
        label={"How did you like the service:"}
        value={mySatisfaction}
        onChange={setMySatisfaction}
      />
      <ServiceSatisfaction
        label={"How did your friend like the service:"}
        value={friendSatisfaction}
        onChange={setFriendSatisfaction}
      />

      <Button onClick={onReset}>{<span>Reset</span>}</Button>
      <div>
        <p style={{ fontWeight: 900 }}>
          {bill > 0
            ? `You pay $ ${total.toFixed(2)} ($ ${bill} + $ ${tip.toFixed(2)} tip)`
            : ""}
        </p>
      </div>
    </div>
  );
}

function ServiceSatisfaction({ label, value, onChange }) {
  return (
    <div>
      <p>{label}</p>
      <select value={value} onChange={(e) => onChange(Number(e.target.value))}>
        <option value={0} key={1}>
          Dissatisfied (0%)
        </option>
        <option value={5} key={2}>
          It was okay (5%)
        </option>
        <option value={10} key={3}>
          It was good (10%)
        </option>
        <option value={20} key={4}>
          Absolutely amazing (20%)
        </option>
      </select>
    </div>
  );
}

function Button({ onClick, children }) {
  return <button onClick={onClick}>{children}</button>;
}
