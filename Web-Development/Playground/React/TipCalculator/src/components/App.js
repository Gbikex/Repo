import { useState } from "react";

export default function App() {
  return (
    <div>
      <HandleBill />
    </div>
  );
}

function HandleBill() {
  const [bill, setBill] = useState();
  const [mySatisfaction, setMySatisfaction] = useState();
  const [friendSatisfaction, setFriendSatisfaction] = useState();

  return (
    <div>
      <p>How much was the bill:</p>
      <input
        type="text"
        value={bill}
        onChange={(e) => setBill(Number(e.target.value))}
      />
      <ServiceSatisfaction>
        {
          <div>
            <p>How did you like the service:</p>
            <select
              value={mySatisfaction}
              onChange={(e) => setMySatisfaction(Number(e.target.value))}
            >
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
        }
      </ServiceSatisfaction>
      <ServiceSatisfaction>
        {
          <div>
            <p>How did your friend like the service:</p>
            <select
              value={friendSatisfaction}
              onChange={(e) => setFriendSatisfaction(Number(e.target.value))}
            >
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
        }
      </ServiceSatisfaction>
      <Button>{<span>Reset</span>}</Button>
      <div>
        <p>
          You pay $ {bill} {mySatisfaction} {friendSatisfaction}
        </p>
      </div>
    </div>
  );
}

function ServiceSatisfaction({ onChange, children }) {
  return <div>{children}</div>;
}

function Button({ onClick, children }) {
  return <button onClick={onClick}>{children}</button>;
}
