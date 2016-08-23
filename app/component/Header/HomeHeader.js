/**
 * Created by eastiming on 16/8/23.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import shallowCompare from 'react-addons-shallow-compare';
import Foot from '../../component/Foot';
import styles from './header.css';
import { forIn } from 'lodash';

const objFilter = ['全部', '精华', '分享', '问答', '招聘'];

export default class HomeHeader extends Component {
  constructor(props) {
    super(props);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  state = {
    filterChoose: 0,
  };

  _chooseFilter = (filterChoose) => {
    this.setState({filterChoose});
    let filter = '';
    if (filterChoose === '0') {
      filter = 'all';
    } else if (filterChoose === '1') {
      filter = 'good';
    } else if (filterChoose === '2') {
      filter = 'share';
    } else if (filterChoose === '3') {
      filter = 'ask';
    } else if (filterChoose === '4') {
      filter = 'job';
    }
    this.props.changeFilter(filter);
  };

  _renderFilter = () => {
    const { filterChoose } = this.state;
    const filter = [];
    var arr = [];
    arr[filterChoose] = styles.choose;
    forIn(objFilter, (item, i) => {
      filter.push(
        <li key={i} onClick={ (e) => this._chooseFilter(i) }>
          <p className={arr[i]}>{item}</p>
        </li>
      )
    });
    return filter;
  };

  render() {
    return (
      <ul className={styles.homeHeader}>
        {this._renderFilter()}
      </ul>
    )
  }
}