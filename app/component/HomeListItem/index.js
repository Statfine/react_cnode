/**
 * Created by eastiming on 16/8/23.
 */
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import shallowCompare from 'react-addons-shallow-compare';
import LoadImage from '../ImageLoader';

import DefaultAvatar from '../ImageLoader/default_avatar.png';

import styles from './styles.css';

export default class HomeListItem extends Component {
  constructor(props) {
    super(props);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  _renderTab = () => {
    const { info } = this.props;
    let tab = info.tab;
    let bacColor = '#e5e5e5';
    let color = '#999';
    if (info.top) {
      tab = '置顶';
      bacColor = '#108fe9';
      color = '#fff';
    } else if (info.good) {
      tab = '精华';
      bacColor = '#108fe9';
      color = '#fff';
    } else if (tab === 'ask') {
      tab = '问答';
    } else if (tab === 'share') {
      tab = '分享';
    } else if (tab === 'job') {
      tab = '招聘';
    }
    return (
      <span
        className={styles.tags}
        style={{ backgroundColor: bacColor, color: color }}
      >
        {tab}
      </span>
    )
  };

  _timeFormat = (srt) => {
    var date = new Date(srt);
    var time = new Date().getTime() - date.getTime(); //现在的时间-传入的时间 = 相差的时间（单位 = 毫秒）
    if (time < 0) {
      return '';
    } else if (time / 1000 < 60) {
      return parseInt((time / 1000)) + '秒前';
    } else if ((time / 60000) < 60) {
      return parseInt((time / 60000)) + '分钟前';
    } else if ((time / 3600000) < 24) {
      return parseInt(time / 3600000) + '小时前';
    } else if ((time / 86400000) < 31) {
      return parseInt(time / 86400000) + '天前';
    } else if ((time / 2592000000) < 12) {
      return parseInt(time / 2592000000) + '月前';
    } else {
      return parseInt(time / 31536000000) + '年前';
    }
  };

  render() {
    const { info } = this.props;

    return (
      <div className={styles.item}>
        <p className={styles.title}>
          {this._renderTab()}
          {info.title }
        </p>
        <div className={styles.content}>
          <LoadImage
            className={styles.cover}
            imgSrc={info.author.avatarUrl}
            defaultSrc={DefaultAvatar}
          />
          <div className={styles.itemCreat}>
            <p>{info.author.loginname}</p>
            <p className={styles.time}>{this._timeFormat(info.createAt)}</p>
          </div>
          <div className={styles.itemVisit}>
            <p>{info.replyCount}/{info.visitCount}</p>
            <p className={styles.time}>{this._timeFormat(info.lastReplyAt)}</p>
          </div>
        </div>
      </div>
    )
  }
}

HomeListItem.propTypes = {
  info: PropTypes.object,
};
