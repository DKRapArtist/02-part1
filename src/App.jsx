import { useState } from "react";

const Statistics = (props) => {
  const total = props.good + props.neutral + props.bad;
  const average = Math.round(((props.good - props.bad) / total) * 100) / 100;
  const positive = Math.round(
    ((total - props.neutral - props.bad) / total) * 100
  );
  return (
    <div>
      <h2>Statistics</h2>
      {total ? (
        <>
          <StatisticsLine text="good" value={props.good} />
          <StatisticsLine text="neutral" value={props.neutral} />
          <StatisticsLine text="bad" value={props.bad} />
          <StatisticsLine text="total" value={total} />
          <StatisticsLine text="average" value={average ? average : 0} />
          <StatisticsLine
            text="positive"
            value={(positive ? positive : 0) + "%"}
          />
        </>
      ) : (
        <p>No Feedback Given</p>
      )}
    </div>
  );
};

const StatisticsLine = (props) => {
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
