import { useState } from "react";
// import React, { Component } from "react";
import FeedbackOptions from "./FeedbackOptions";
import Statistics from "./Statistics/Statistics";
import Section from "./Section";
import Notification from "./Notification";

export default function FeedbackHooks() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const btnIncrement = (btn) => {
    switch (btn) {
      case "good":
        setGood((stateGood) => stateGood + 1);
        break;

      case "neutral":
        setNeutral((stateNeutral) => stateNeutral + 1);
        break;

      case "bad":
        setBad((stateBad) => stateBad + 1);
        break;

      default:
        break;
    }
  };
  const countTotalFeedback = () => good + neutral + bad;
  const countPositiveFeedbackPercentage = () =>
    Math.round((good * 100) / countTotalFeedback());
  return (
    <div>
      <Section title="Please leave your feedback">
        <FeedbackOptions
          btns={["good", "neutral", "bad"]}
          onLeaveFeedback={btnIncrement}
        />
      </Section>

      <Section title="Statictics">
        {countTotalFeedback() ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positiveFeedPercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="No feedback given" />
        )}
      </Section>
    </div>
  );
}

// class Feedback extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   btnIncrement = (evt) => {
//     this.setState((prevState) => {
//       return {
//         [evt]: prevState[evt] + 1,
//       };
//     });
//   };

//   countTotalFeedback = (good, neutral, bad) => good + neutral + bad;

//   countPositiveFeedbackPercentage = (good, neutral, bad) =>
//     Math.round((good * 100) / this.countTotalFeedback(good, neutral, bad));

//   render() {
//     const { good, neutral, bad } = this.state;
//     const totalFeedback = this.countTotalFeedback(good, bad, neutral);
//     const positiveFeedPercentage = this.countPositiveFeedbackPercentage(
//       good,
//       neutral,
//       bad
//     );

//     return (
//       <div>
//         <Section title="Please leave your feedback">
//           <FeedbackOptions
//             options={this.state}
//             onLeaveFeedback={this.btnIncrement}
//           />
//         </Section>

//         <Section title="Statictics">
//           {totalFeedback > 0 ? (
//             <Statistics
//               good={good}
//               neutral={neutral}
//               bad={bad}
//               total={totalFeedback}
//               positiveFeedPercentage={positiveFeedPercentage}
//             />
//           ) : (
//             <Notification message="No feedback given" />
//           )}
//         </Section>
//       </div>
//     );
//   }
// }

// export default Feedback;
