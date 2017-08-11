import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { red500 } from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
const muiTheme = getMuiTheme({
  palette: {
    primary1Color: red500,
  },
  appBar: {
    height: 70,
  },
});
injectTapEventPlugin();

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
  }
  handleClose = () => this.setState({ open: false });
  handleToggle = () => this.setState({ open: !this.state.open });

  render() {
    return (
      <BrowserRouter>
        <MuiThemeProvider muiTheme={muiTheme}>
          <div>
            <AppBar
              title="Resource Center"
              iconClassNameRight="muidocs-icon-navigation-expand-more"
              onLeftIconButtonTouchTap={this.handleToggle}
            />
            <Drawer
              docked={false}
              width={200}
              open={this.state.open}
              onRequestChange={open => this.setState({ open })}
            >
              <MenuItem onTouchTap={this.handleClose}>
                <Link to="/">Home</Link>
              </MenuItem>
              <MenuItem onTouchTap={this.handleClose}>
                <Link to="/logos">Logos</Link>
              </MenuItem>
              <MenuItem onTouchTap={this.handleClose}>
                <Link to="/posters">Posters</Link>
              </MenuItem>
              <MenuItem onTouchTap={this.handleClose}>
                <Link to="/letterhead">Letterhead</Link>
              </MenuItem>
              <MenuItem onTouchTap={this.handleClose}>
                <Link to="/share-a-story">Share a story</Link>
              </MenuItem>
              <MenuItem onTouchTap={this.handleClose}>
                <Link to="/service-request-form">Service Request Form</Link>
              </MenuItem>
              <MenuItem onTouchTap={this.handleClose}>
                <Link to="/tutorial">Tutorial</Link>
              </MenuItem>
            </Drawer>

            <Route exact path="/" render={() => <h1>Home</h1>} />
            <Route exact path="/logos" render={() => <h1>Logos</h1>} />
            <Route exact path="/posters" render={() => <h1>Posters</h1>} />
            <Route exact path="/letterhead" render={() => <h1>Letterhead</h1>} />
            <Route exact path="/share-a-story" render={() => <h1>Share a story</h1>} />
            <Route
              exact
              path="/service-request-form"
              render={() => <h1>Service Request Form</h1>}
            />
            <Route exact path="/tutorial" render={() => <h1>Tutorial</h1>} />
          </div>
        </MuiThemeProvider>
      </BrowserRouter>
    );
  }
}

export default App;
