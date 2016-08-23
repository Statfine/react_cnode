/**
 * Created by eastiming on 16/7/12.
 * 数据组装
 */
import { camelizeKeys } from 'humps';
import { normalize } from 'normalizr';
import merge from 'lodash/object/merge';
import isEmpty from 'lodash/lang/isEmpty';

export default (info, schema, mark) => {
  let responseInfo = info;

  const camelizedJson = camelizeKeys(responseInfo.data.data);
  const entity = normalize(camelizedJson, schema);
  return merge({}, entity, responseInfo.data);
};
