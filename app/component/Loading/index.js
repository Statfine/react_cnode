/**
 * Created by eastiming on 16/8/23.
 */
import React, {Component, PropTypes} from 'react';
import shallowCompare from 'react-addons-shallow-compare';

import './style.less';

export default class Loading extends Component {
  constructor(props) {
    super(props);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  render() {
    const {loadAnimation, loadMsg} = this.props;
    return (
      <div className={'data-load data-load-' + loadAnimation}>
        <div className="msg">{loadMsg}</div>
      </div>
    )
  }
}

Loading.defaultProps = {
  loadAnimation: true, //默认显示加载动画
  loadMsg: '正在加载中'
};
