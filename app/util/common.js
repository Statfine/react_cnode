/**
 * Created by eastiming on 16/7/12.
 */
import config from '../config/application';
import axios from 'axios';
import { camelizeKeys } from 'humps';
import merge from 'lodash/object/merge';
import * as storage from '../persistence/storage';
import normalize from './normalize';

const API_ROOT = config.apiRoot;

let axiosObj = axios.create({
  baseURL: API_ROOT,
});

// TODO: params format
export function callApi(endpoint, method, params, token, schema, mark, headersDefault = {}, apiRoot) {

  let headers = merge({
    'Content-Type': 'application/json',
  }, headersDefault);

  if (apiRoot) {
    axiosObj = axios.create({
      baseURL: apiRoot,
    });
  } else{
    axiosObj = axios.create({
      baseURL: API_ROOT,
    });
  }

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  return axiosObj.request({
    method,
    url: endpoint,
    params: method === 'GET' ? params : {},
    data: method !== 'GET' ? params : {},
    headers,
  }).then(
    (response) => {

      if (response.data.code > 400) {
        throw response.data;
      }

      if (schema === undefined) {
        return camelizeKeys(response.data);
      }

      const data = normalize(response, schema, mark);
      return merge({}, data);
    }
  ).catch(
    (error) => {
      console.log(error);
      throw { ...error.data, statusText: error.statusText };
    }
  );
}

