import { useState } from "react";

const Statistics = (props) => {
  const total = props.good + props.neutral + props.bad;
  const average = (props.good - props.bad) / total;
  const positive = (total - props.neutral - props.bad) / total;

  // Convert average to two decimal points, with trailing zeroes
  // Set displayed average to 0 if average is equal to a falsy value (such as NaN)
  const displayAverage =
    (average
      ? average.toLocaleString("en", {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        })
      : 0) + " pts";
  // Convert positive to percentage, same fallback value of 0 as above
  const displayPositive =
    (positive
      ? (positive * 100).toLocaleString("en", {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        })
      : 0) + "%";

  return (
    <div>
      <h2>Statistics</h2>
      {total ? (
        <>
          <StatisticLine text="Good:" value={props.good} />
          <StatisticLine text="Neutral:" value={props.neutral} />
          <StatisticLine text="Bad:" value={props.bad} />
          <StatisticLine text="Total:" value={total} />
          <StatisticLine text="Average:" value={displayAverage} />
          <StatisticLine text="Positive:" value={displayPositive} />
        </>
      ) : (
        <p>No feedback given</p>
      )}
    </div>
  );
};

const StatisticLine = (props) => {
  return (
    <div>
      <span>{props.text} </span>
      <span>{props.value} </span>
    </div>
  );
};

const Feedback = (props) => {
  return (
    <div>
      <h2>Give Feedback</h2>
      <Button text="Good" setter={props.setGood} />
      <Button text="Neutral" setter={props.setNeutral} />
      <Button text="Bad" setter={props.setBad} />
    </div>
  );
};

const Button = (props) => {
  return (
    <button onClick={() => props.setter((prev) => prev + 1)}>
      {props.text}
    </button>
  );
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <Feedback setGood={setGood} setNeutral={setNeutral} setBad={setBad} />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

export default App;
