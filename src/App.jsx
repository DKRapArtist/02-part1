import { useState } from "react";

const Statistics = (props) => {
  const total = props.good + props.neutral + props.bad;
  const average = (props.good - props.bad) / total;
  const positive = ((total - props.neutral - props.bad) / total) * 100;
  return (
    <div>
      <h2>Statistics</h2>
      {total ? (
        <>
          <StatisticsLine name="good" count={props.good} />
          <StatisticsLine name="neutral" count={props.neutral} />
          <StatisticsLine name="bad" count={props.bad} />
          <StatisticsLine name="total" count={total} />
          <StatisticsLine name="average" count={average ? average : 0} />
          <StatisticsLine
            name="positive"
            count={(positive ? positive : 0) + "%"}
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
      <span>{props.name} </span>
      <span>{props.count} </span>
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
      <Statistics good={good} neutral={neutral} bad={bad} />
      <Feedback setGood={setGood} setNeutral={setNeutral} setBad={setBad} />
    </div>
  );
};

export default App;
