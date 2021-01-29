import Immutable from 'seamless-immutable';
import { UserTypes } from './actions';
import { makeReducerCreator } from '../../utils/Utils';

export const INITIAL_STATE = Immutable({
  loading: false,
  data: null,
  error: null,
  dataChangePass: null,
});
export const INITIAL_STATE_CHANGE = Immutable({
  loadingChangePass: false,
  dataChangePass: null,
  errorChangePass: null,
});

const userInfo = (state) =>
  state.merge({
    loading: true,
  });

const userInfoSuccess = (state, { response }) =>
  state.merge({
    loading: false,
    data: response,
  });

const userEditSuccess = (state, { response }) =>
  state.merge({
    data: response,
  });

const userChangePassword = (state, { response }) => state.merge({ loading: true });

const userChangePasswordSuccess = (state, { response }) =>
  state.merge({ loading: false, dataChangePass: response });
const userChangePasswordFailure = (state, { error }) =>
  state.merge({ error: error, loading: false });

const ACTION_HANDLERS = {
  [UserTypes.USER_INFO]: userInfo,
  [UserTypes.USER_INFO_SUCCESS]: userInfoSuccess,
  [UserTypes.USER_EDIT_SUCCESS]: userEditSuccess,
  [UserTypes.USER_CHANGE_PASSWORD]: userChangePassword,
  [UserTypes.USER_CHANGE_PASSWORD_SUCCESS]: userChangePasswordSuccess,
  [UserTypes.USER_CHANGE_PASSWORD_FAILURE]: userChangePasswordFailure,
};

export default makeReducerCreator(INITIAL_STATE, ACTION_HANDLERS);
