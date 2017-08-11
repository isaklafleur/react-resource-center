import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import SideBarItem from './SideBarItem';

const links = [
  { isExact: true, linkTo: '/', text: 'Home' },
  { isExact: false, linkTo: '/logos', text: 'Logos' },
  { isExact: false, linkTo: '/posters', text: 'Posters' },
  { isExact: false, linkTo: '/letterhead', text: 'Letterhead' },
  { isExact: false, linkTo: '/share-a-story', text: 'Share a Story' },
  { isExact: false, linkTo: '/service-request-form', text: 'Service Request Form' },
  { isExact: false, linkTo: '/tutorial', text: 'Tutorial' },
];

class SideNav extends Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
  }
  handleClose = () => this.setState({ open: false });
  handleToggle = () => this.setState({ open: !this.state.open });

  render() {
    return (
      <div>
        <AppBar
          title="Resource Center"
          iconClassNameRight="muidocs-icon-navigation-expand-more"
          onLeftIconButtonTouchTap={() => this.setState({ open: !this.state.open })}
        />
        <Drawer
          docked={false}
          width={200}
          open={this.state.open}
          onRequestChange={open => this.setState({ open })}
        >
          {links.map((link, i) => {
            return (
              <SideBarItem
                isExact={link.isExact}
                linkTo={link.linkTo}
                primaryText={link.text}
                handleClose={this.handleClose}
                key={i}
              />
            );
          })}
        </Drawer>
      </div>
    );
  }
}

export default SideNav;
