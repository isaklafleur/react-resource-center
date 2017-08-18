import React, { Component } from 'react';
import RaisedButton from '../components/MaterializeRaisedButton';
import TextField from 'material-ui/TextField';
import '../styles/responsive-text.css';
class Story extends Component {
  state = {};
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col s12 flow-text">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ut porta dui. Duis
              condimentum pellentesque elementum. Aenean laoreet nulla dolor, vel eleifend tellus
              interdum at. Mauris sit amet mi sit amet erat lacinia pharetra. Sed posuere sodales
              nulla nec euismod. Class aptent taciti sociosqu ad litora torquent per conubia nostra,
              per inceptos himenaeos. Sed imperdiet justo id diam pellentesque, in posuere velit
              imperdiet.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ut porta dui. Duis
              condimentum pellentesque elementum. Aenean laoreet nulla dolor, vel eleifend tellus
              interdum at. Mauris sit amet mi sit amet erat lacinia pharetra. Sed posuere sodales
              nulla nec euismod. Class aptent taciti sociosqu ad litora torquent per conubia nostra,
              per inceptos himenaeos. Sed imperdiet justo id diam pellentesque, in posuere velit
              imperdiet.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col s12 m6">
            <TextField fullWidth floatingLabelText="First Name" />
          </div>
          <div className="col s12 m6">
            <TextField fullWidth floatingLabelText="Last Name" />
          </div>
        </div>
        <div className="col s12">
          <TextField floatingLabelText="Email" multiLine={true} rows={2} fullWidth />
          <br />
          <br />
        </div>
        <RaisedButton label="Submit" primary={true} />
      </div>
    );
  }
}

export default Story;
