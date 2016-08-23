/**
 * Created by eastiming on 16/8/3.
 */
import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux';
import application from './application';
import entities from './entities';
import fetchStatus from './fetch';

const appReucers = combineReducers({
  application,
  entities,
  fetchStatus,
  routing: routerReducer
})

export default appReucers