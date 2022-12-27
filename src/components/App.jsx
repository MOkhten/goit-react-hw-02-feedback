import { Component } from "react";

export class App  extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0
  };
  
  leaveFeedback = key => {
    this.setState(prevState => ({
      [key]: prevState[key] + 1,
    }));
  };
    render() {
        const { good, neutral, bad } = this.state;
        const totalFeedbacks = this.state.good + this.state.neutral + this.state.bad;
        return (
            <div>
                <div>
                <h1>Please leave a feedback</h1>
              <button options={['good', 'neutral', 'bad']} onLeaveFeedback={this.leaveFeedback}></button>
                </div>
                <div>
                    <h2>Statistics</h2>
               good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.state.totalFeedback}
              
                </div>
            </div >
        )
    }
}