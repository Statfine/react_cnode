/**
 * Created by eastiming on 16/8/6.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import shallowCompare from 'react-addons-shallow-compare';
import Foot from '../../component/Foot';
import HomeHeader from '../../component/Header/HomeHeader';
import Loading from '../../component/Loading';
import * as action from '../../action/action';
import { forIn } from 'lodash';

import Item from '../../component/HomeListItem';

export default class HomeIndex extends Component {
  constructor(props) {
    super(props);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  componentDidMount() {
    this._handleChangeFilter('all');
  }

  _handleChangeFilter = (filter) => {
    this.props.fetchList(filter, 1);
  };

  _getList = (fliter) => {
    this._handleChangeFilter('fliter');
  };

  _renderItem = () => {
    const {
      entities: {
        list,
        },
      } = this.props;
    const listItem = [];
    forIn(list, (item, id) => {
      listItem.push(
        <Item
          key={id}
          info={item}
        />
      );
    });
    return listItem;
  };

  render() {
    const {
      fetchStatus: {
        fetchListStatus,
      },
    } = this.props

    return (
      <div style={{ paddingTop: '38px', paddingBottom: '50px' }}>
        <HomeHeader changeFilter={this._handleChangeFilter} />
        <Loading loadAnimation={fetchListStatus.isFetching}/>
        <div style={{ padding: '0 20px' }}>
          {this._renderItem()}
        </div>
        <Foot index={1} />
      </div>
    )
  }
}

export default connect(
  ({ application, fetchStatus, entities, }) => ({ application, fetchStatus, entities, }),
  { ...action }
)(HomeIndex);
