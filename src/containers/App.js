import PropTypes from 'prop-types';
import React, { Component } from 'react';

export default class App extends Component {
  render() {
    return (
      <div>
        Hello App
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {};
