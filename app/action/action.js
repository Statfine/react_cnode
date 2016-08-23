/**
 * Created by eastiming on 16/8/3.
 */
import { CALL_API } from '../constant';
import * as ActionTypes from '../actionType';
import merge from 'lodash/object/merge';
import { Schemas } from '../persistence/schema';

export const nameAction = () => {
  return {
    type: 'LOGIN_NAME',
    name: 'action',
  }
}

export function fetchList(tab, page) {
  const limit = 10;
  const endpoint = `topics`;
  return {
    [CALL_API]: {
      types: [
        ActionTypes.FETCH_LIST_REQUEST,
        ActionTypes.FETCH_LIST_SUCCESS,
        ActionTypes.FETCH_LIST_FAILURE,
        ActionTypes.FETCH_LIST_RESET_RESPONSE,
      ],
      endpoint,
      params: merge({}, { tab, page, limit }),
      method: 'GET',
      schema: Schemas.ListSchema,
    },
    deleteEntities: page,
  };
}