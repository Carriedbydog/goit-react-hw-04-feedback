import { FeedBack } from './FeedBack/FeedBackOptions';
import React, { useState } from 'react';
import { Statistics } from './Statistics/Statistics';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';
import { StyledBox } from './App.styled';

// export class App extends React.Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

// onLeaveFeedback = name => {
//   switch (name) {
//     case 'good':
//       this.setState(prev => ({ good: prev.good + 1 }));
//       break;

//     case 'neutral':
//       this.setState(prev => ({ neutral: prev.neutral + 1 }));
//       break;

//     case 'bad':
//       this.setState(prev => ({ bad: prev.bad + 1 }));
//       break;
//     default:
//       console.log('Invalid btn');
//   }
// };
// countTotalFeedback = () => {
//   return this.state.good + this.state.neutral + this.state.bad;
// };
// countPositiveFeedbackPercentage = () => {
//   const totalFeedBack = this.countTotalFeedback();
//   if (totalFeedBack === 0) {
//     return 0;
//   }
//   return Math.floor((this.state.good / totalFeedBack) * 100);
// };
//   render() {
//     const totalPositivePerc = this.countPositiveFeedbackPercentage();
//     const totalFeedback = this.countTotalFeedback();
//     const { good, neutral, bad } = this.state;
// const feedback = ['good', 'neutral', 'bad'];
// const statsValue = totalFeedback > 0;
//     return (
//       <div
//         style={{
//           height: '100vh',
//           display: 'flex',
//           justifyContent: 'center',
//           alignItems: 'center',
//           fontSize: 40,
//           color: '#010101',
//         }}
//       >
//         <StyledBox>
//           <Section title="Please leave feedback">
//             <FeedBack
//               onLeaveFeedback={this.onLeaveFeedback}
//               options={feedback}
//             />
//           </Section>
//           <Section title="Statistics">
//             {statsValue ? (
//               <Statistics
//                 good={good}
//                 neutral={neutral}
//                 bad={bad}
//                 total={totalFeedback}
//                 positivePercentage={totalPositivePerc}
//               />
//             ) : (
//               <Notification message="There is no feedback" />
//             )}
//           </Section>
//         </StyledBox>
//       </div>
//     );
//   }
// }

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onLeaveFeedback = name => {
    switch (name) {
      case 'good':
        // this.setState(prev => ({ good: prev.good + 1 }));
        setGood(prev => prev + 1);
        break;

      case 'neutral':
        // this.setState(prev => ({ neutral: prev.neutral + 1 }));
        setNeutral(prev => prev + 1);
        break;

      case 'bad':
        // this.setState(prev => ({ bad: prev.bad + 1 }));
        setBad(prev => prev + 1);
        break;
      default:
        console.log('Invalid btn');
    }
  };
  const countTotalFeedback = () => {
    // return this.state.good + this.state.neutral + this.state.bad;
    // return setGood() + setNeutral() + setBad();
    return good + neutral + bad;
  };
  const countPositiveFeedbackPercentage = () => {
    const totalFeedBack = countTotalFeedback();
    if (totalFeedBack === 0) {
      return 0;
    }
    return Math.floor((good / totalFeedBack) * 100);
  };
  const feedback = ['good', 'neutral', 'bad'];
   const statsValue = totalFeedBack > 0;
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <StyledBox>
        <Section title="Please leave feedback">
          <FeedBack onLeaveFeedback={onLeaveFeedback} options={feedback} />
        </Section>
        <Section title="Statistics">
          {statsValue ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={totalFeedback}
              positivePercentage={totalPositivePerc}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </StyledBox>
    </div>
  );
};
