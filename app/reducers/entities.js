/**
 * Created by eastiming on 16/8/23.
 */
import * as ActionTypes from '../actionType';
import merge from 'lodash/object/merge';
import { isEmpty, omit, arrayMove } from 'lodash';

const initialState = {
  list: {},
};

function entities(state = initialState, action) {

  if (action.response && action.response.entities) {
    const cloneState = merge({}, state);
    return merge({}, cloneState, action.response.entities);
  }

  return merge({}, state);
}

export default entities;