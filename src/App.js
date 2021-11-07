import React, { useState } from 'react';
import './App.css';
import Statistics from './components/Statistics/Statistics';
import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions';
import Notification from './components/Notification/Notification';
import Section from './components/Section/Section';

const OPTIONS = ['good', 'neutral', 'bad'];

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0)

  const onLeaveFeedback = (key) => {
    switch (key) {
      case 'good':
        setGood(good => good + 1);
        break;

      case 'neutral':
        setNeutral(neutral => neutral + 1);
        break;

      case 'bad':
        setBad(bad => bad + 1);
          break;
    
      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    return good > 0 ? Math.round((good / countTotalFeedback()) * 100) : 0;
  };

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={OPTIONS}
          onClick={onLeaveFeedback}
        />
      </Section>

      <Section title="Statistics">
        {countTotalFeedback() ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="No feedback given" />
        )}
      </Section>
    </>
  );
}

export default App;
