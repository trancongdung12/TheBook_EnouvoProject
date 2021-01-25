import Immutable from 'seamless-immutable';
import { makeReducerCreator } from '../../utils/Utils';
import { AppTypes } from './actions';

export const INITIAL_STATE = Immutable({
  loadingApp: false,
  AppTypes: '',
});

export const userLoadingApp = (state, { response }) =>
  state.merge({ loadingApp: true, AppTypes: '' });

const reducer = makeReducerCreator(INITIAL_STATE, {
  [AppTypes.START_APP]: userLoadingApp,
});

export default reducer;
