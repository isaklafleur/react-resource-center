import React, { Component } from 'react';
import LetterheadCard from '../components/LetterheadCard';
class Letterhead extends Component {
  state = {};
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col s12">
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
          <LetterheadCard
            title="Card title"
            action="Action 1"
            image="https://unsplash.it/600/776/?random=1"
          />
          <LetterheadCard
            title="Card title"
            action="Action 1"
            image="https://unsplash.it/600/776/?random=2"
          />
          <LetterheadCard
            title="Card title"
            action="Action 1"
            image="https://unsplash.it/500/776/?random=3"
          />
          <LetterheadCard
            title="Card title"
            action="Action 1"
            image="https://unsplash.it/600/776/?random=4"
          />
        </div>
      </div>
    );
  }
}

export default Letterhead;
