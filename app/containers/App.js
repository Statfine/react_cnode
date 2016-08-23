/**
 * Created by eastiming on 16/8/2.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, browserHistory } from 'react-router'

import { addTodo } from '../action'
import * as action from '../action/action';

import './styles.less';
import styles from './styles.css';

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render(){
    const { children } = this.props;

    return (
      <div>
        {children}
      </div>
    )
  }

}

export default connect(
  ({ application }) => ({ application }),
  { addTodo, ...action }
)(App);
