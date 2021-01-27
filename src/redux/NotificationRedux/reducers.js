import Immutable from 'seamless-immutable';
import { makeReducerCreator } from '../../utils/Utils';
import { NotificationTypes } from './actions';

export const INITIAL_STATE = Immutable({
  loadingNotification: false,
  responseNotification: null,
  typeNotification: '',
});

export const userGetNotification = (state, { response }) =>
  state.merge({ loadingNotification: true, typeLogin: 'User notification' });

export const userGetNotificationSuccess = (state, { response }) =>
  state.merge({
    loadingNotification: false,
    responseNotification: response,
    typeLogin: 'User notification success',
  });
const reducer = makeReducerCreator(INITIAL_STATE, {
  [NotificationTypes.USER_GET_NOTIFICATION]: userGetNotification,
  [NotificationTypes.USER_GET_NOTIFICATION_SUCCESS]: userGetNotificationSuccess,
});

export default reducer;
