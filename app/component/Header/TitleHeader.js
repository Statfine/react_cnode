/**
 * Created by eastiming on 16/8/23.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import shallowCompare from 'react-addons-shallow-compare';
import Foot from '../../component/Foot';
import styles from './header.css';

export default class TitleHeader extends Component {
  constructor(props) {
    super(props);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  render() {
    return (
      <div className={styles.titleHeader}>
        {this.props.title}
      </div>
    )
  }
}