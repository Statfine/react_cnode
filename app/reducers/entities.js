/**
 * Created by eastiming on 16/8/23.
 */
import * as ActionTypes from '../actionType';
import merge from 'lodash/object/merge';
import { isEmpty, omit, arrayMove } from 'lodash';

const initialState = {
  list: {},
};

/*
 *   修改本地Entities数据(成功请求之后)
 *   VIDEO_LIST_SUCCESS 个人视频列表,清空当前对象(分页,筛选)
 *   LIB_VIDEO_SUCCESS 素材库视频列表
 *   CREAT_LIVE_SUCCESS 创建直播成功
 *   FETCH_TIMING_SHARE_SUCCESS 定时分享列表
 */
function changeEntities(state, action) {
  const cloneState = merge({}, state);
  switch (action.type) {
    case ActionTypes.FETCH_LIST_SUCCESS:
      if (action.deleteEntities === 1) {
        delete cloneState.list;
      }
      break;
    default:
      break;
  }
  return cloneState;
}

function entities(state = initialState, action) {

  if (action.response && action.response.entities) {
    const cloneState = changeEntities(state, action);
    return merge({}, cloneState, action.response.entities);
  }

  if (action.type === ActionTypes.FETCH_LIST_REQUEST) {
    if (action.params.page === 1) {
      const cloneState = merge({}, state);
      delete cloneState.list;
      return cloneState;
    }
  }

  return merge({}, state);
}

export default entities;