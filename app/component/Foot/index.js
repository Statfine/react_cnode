/**
 * Created by eastiming on 16/8/6.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import shallowCompare from 'react-addons-shallow-compare';

import styles from './styles.css';

export default class Foot extends Component {
  constructor(props) {
    super(props);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  render() {
    const { index } = this.props;
    var arr = [];
    arr[index] = styles.on;

    return (
      <div className={styles.foot} >
        <ul className={styles.foot_ul} data-flex="box:mean">
          <li>
            <Link to="/" className={arr[1]}>
              首页
            </Link>
          </li>
          <li>
            <Link to="/ReportPage" className={arr[2]}>
              发现
            </Link>
          </li>
          <li>
            <Link to="/MessagePage" className={arr[3]}>
              消息
            </Link>
          </li>
          <li>
            <Link to="/User" className={arr[4]}>
              我的
            </Link>
          </li>
        </ul>
      </div>
    )
  }
}