import Immutable from 'seamless-immutable';
import { makeReducerCreator } from '../../utils/Utils';
import { AppTypes } from './actions';

export const INITIAL_STATE = Immutable({
  loadingApp: false,
  AppTypes: '',
});

export const userStartApp = (state, { response }) =>
  state.merge({ loadingApp: true, AppTypes: '' });

const reducer = makeReducerCreator(INITIAL_STATE, {
  [AppTypes.START_APP]: userStartApp,
});

export default reducer;
