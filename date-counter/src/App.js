import { useState } from "react";
import dateFormat from "dateformat";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);
  const current = new Date();
  return (
    <>
      <div>
        <button onClick={(s) => setStep((s) => s - 1)}>-</button>
        Step: {step}
        <button onClick={() => setStep((s) => s + 1)}>+</button>
      </div>

      <div>
        <button onClick={() => setCount((c) => c - step)}>-</button>
        Count: {count}
        <button className="subtract" onClick={() => setCount((c) => c + step)}>
          +
        </button>
      </div>
      <span>
        {count === 0
          ? "Today is "
          : count > 0
          ? `${count} days from today is `
          : `${Math.abs(count)} days ago was `}
      </span>
      <span>{dateFormat(current, "dddd, mmmm dS, yyyy.")}</span>
    </>
  );
}
