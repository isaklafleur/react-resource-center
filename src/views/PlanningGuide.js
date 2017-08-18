import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { Step, Stepper, StepButton } from 'material-ui/Stepper';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import '../styles/responsive-text.css';

const getStyles = () => {
  return {
    root: {
      width: '100%',
      maxWidth: 700,
      margin: 'auto',
    },
    content: {
      margin: '0 16px',
    },
    actions: {
      marginTop: 12,
    },
    backButton: {
      marginRight: 12,
    },
  };
};

class PlanningGuide extends Component {
  state = {
    stepIndex: null,
    visited: [],
  };

  componentWillMount() {
    const { stepIndex, visited } = this.state;
    this.setState({ visited: visited.concat(stepIndex) });
  }

  componentWillUpdate(nextProps, nextState) {
    const { stepIndex, visited } = nextState;
    if (visited.indexOf(stepIndex) === -1) {
      this.setState({ visited: visited.concat(stepIndex) });
    }
  }

  handleNext = () => {
    const { stepIndex } = this.state;
    if (stepIndex < 2) {
      this.setState({ stepIndex: stepIndex + 1 });
    }
  };

  handlePrev = () => {
    const { stepIndex } = this.state;
    if (stepIndex > 0) {
      this.setState({ stepIndex: stepIndex - 1 });
    }
  };

  getStepContent(stepIndex) {
    switch (stepIndex) {
      case 0:
        return 'Select campaign settings...';
      case 1:
        return 'What is an ad group anyways?';
      case 2:
        return 'This is the bit I really care about!';
      default:
        return 'Click a step to get started.';
    }
  }
  render() {
    const { stepIndex, visited } = this.state;
    const styles = getStyles();
    return (
      <div>
        <Helmet>
          <title>Planning Guide | Resource Center</title>
        </Helmet>

        <div style={styles.root}>
          <p>
            <a
              href="#"
              onClick={event => {
                event.preventDefault();
                this.setState({ stepIndex: null, visited: [] });
              }}
            >
              Click here
            </a>{' '}
            to reset the example.
          </p>
          <Stepper linear={false} orientation="vertical">
            <Step completed={visited.indexOf(0) !== -1} active={stepIndex === 0}>
              <StepButton onClick={() => this.setState({ stepIndex: 0 })}>
                Select campaign settings
              </StepButton>
            </Step>
            <Step completed={visited.indexOf(1) !== -1} active={stepIndex === 1}>
              <StepButton onClick={() => this.setState({ stepIndex: 1 })}>
                Create an ad group
              </StepButton>
            </Step>
            <Step completed={visited.indexOf(2) !== -1} active={stepIndex === 2}>
              <StepButton onClick={() => this.setState({ stepIndex: 2 })}>Create an ad</StepButton>
            </Step>
          </Stepper>
          <div style={styles.content}>
            <p>
              {this.getStepContent(stepIndex)}
            </p>
            {stepIndex !== null &&
              <div style={styles.actions}>
                <FlatButton
                  label="Back"
                  disabled={stepIndex === 0}
                  onTouchTap={this.handlePrev}
                  style={styles.backButton}
                />
                <RaisedButton label="Next" primary={true} onTouchTap={this.handleNext} />
              </div>}
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col s12 flow-text">
              <h2>Please follow these guidelines before final approval.</h2>
            </div>
          </div>
          <div className="row">
            <div className="col s12 flow-text">
              <h3>Plan Ahead</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quae enim adhuc protulisti,
                popularia sunt, ego autem a te elegantiora desidero. Duo Reges: constructio
                interrete. Quia nec honesto quic quam honestius nec turpi turpius. Iam id ipsum
                absurdum, maximum malum neglegi. Quaesita enim virtus est, non quae relinqueret
                naturam, sed quae tueretur. Nihilo magis. Tum ille: Tu autem cum ipse tantum
                librorum habeas, quos hic tandem requiris? Et quod est munus, quod opus sapientiae?
                Summum ením bonum exposuit vacuitatem doloris; Atqui iste locus est, Piso, tibi
                etiam atque etiam confirmandus, inquam; Ergo illi intellegunt quid Epicurus dicat,
                ego non intellego?
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col s12 flow-text">
              <h3>Budget Information</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quae enim adhuc protulisti,
                popularia sunt, ego autem a te elegantiora desidero. Duo Reges: constructio
                interrete. Quia nec honesto quic quam honestius nec turpi turpius. Iam id ipsum
                absurdum, maximum malum neglegi. Quaesita enim virtus est, non quae relinqueret
                naturam, sed quae tueretur. Nihilo magis. Tum ille: Tu autem cum ipse tantum
                librorum habeas, quos hic tandem requiris? Et quod est munus, quod opus sapientiae?
                Summum ením bonum exposuit vacuitatem doloris; Atqui iste locus est, Piso, tibi
                etiam atque etiam confirmandus, inquam; Ergo illi intellegunt quid Epicurus dicat,
                ego non intellego?
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PlanningGuide;
