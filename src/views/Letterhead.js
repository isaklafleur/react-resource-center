import React, { Component } from 'react';
import { Card, CardTitle, CardActions, CardMedia } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
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
          <div className="col s12 m6">
            <Card>
              <CardMedia>
                <img src="https://unsplash.it/500/500/?random" alt="" />
              </CardMedia>
              <CardTitle title="Card title" subtitle="Card subtitle" />
              <CardActions>
                <FlatButton label="Action1" />
              </CardActions>
            </Card>
          </div>
          <div className="col s12 m6">
            <Card>
              <CardMedia>
                <img src="https://unsplash.it/500/500/?random" alt="" />
              </CardMedia>
              <CardTitle title="Card title" subtitle="Card subtitle" />
              <CardActions>
                <FlatButton label="Action1" />
              </CardActions>
            </Card>
          </div>
        </div>
        <div className="row">
          <div className="col s12 m6">
            <Card>
              <CardMedia>
                <img src="https://unsplash.it/500/500/?random" alt="" />
              </CardMedia>
              <CardTitle title="Card title" subtitle="Card subtitle" />
              <CardActions>
                <FlatButton label="Action1" />
              </CardActions>
            </Card>
          </div>
          <div className="col s12 m6">
            <Card>
              <CardMedia>
                <img src="https://unsplash.it/500/500/?random" alt="" />
              </CardMedia>
              <CardTitle title="Card title" subtitle="Card subtitle" />
              <CardActions>
                <FlatButton label="Action1" />
              </CardActions>
            </Card>
          </div>
        </div>
      </div>
    );
  }
}

export default Letterhead;
