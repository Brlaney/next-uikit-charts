import React, { Component } from 'react'

class UIKit extends Component {
  state = { ready: false };
  componentDidMount = () => {
    if (typeof window !== 'undefined') {
      const uikit = require('../assets/js/uikit');
      const icons = require('../assets/js/uikit-icons');
      uikit.use(icons);
      this.setState({ ready: true });
    }
  };

  render() {
    return <div>{this.props.children}</div>;
  }
}

export default UIKit;
