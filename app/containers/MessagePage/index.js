/**
 * Created by eastiming on 16/8/6.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import shallowCompare from 'react-addons-shallow-compare';
import Foot from '../../component/Foot';
import TitleHeader from '../../component/Header/TitleHeader';

export default class Message extends Component {
  constructor(props) {
    super(props);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  render() {
    return (
      <div>
        <TitleHeader title={'消息'}/>
        Message
        <Foot index={3}/>
      </div>
    )
  }
}