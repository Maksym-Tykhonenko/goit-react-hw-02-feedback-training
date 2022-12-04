import { Component } from "react";
import css from "./App.module.css"

import  FeedbackOptions  from "./FeedbackOptions";
import  Statistics  from "./Statistics";
import  Section  from "./Section";
import  Notification  from "./Notification";


export class App extends Component {

  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };

  handleClick = (option) => {
    this.setState(prevState => {
      return {
        [option]: prevState[option] + 1
      }
    })
  };

  
  render() {
    const {bad, good, neutral } = this.state;
    const options = Object.keys(this.state);
    const countTotalFeedback = bad + good + neutral;
    const countPositiveFeedbackPercentage = Number.parseInt((good / countTotalFeedback) * 100);

      return (
        <div className={css.block}>
          <Section title='Please leave feedback'>
            <FeedbackOptions
              options={options}
              handleClick={this.handleClick} />
          </Section>

          {countTotalFeedback > 0 ?
            (<Section title='Statistics'>
              <Statistics
                good={good}
                neutral={neutral}
                bad={bad}
                total={countTotalFeedback}
                positivePercentage={ countPositiveFeedbackPercentage} />
            </Section>)
            : (<Notification message="There is no feedback :-( ..."></Notification>)}
       </div>
  );
};
};


