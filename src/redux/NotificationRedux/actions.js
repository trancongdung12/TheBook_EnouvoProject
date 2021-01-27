import { makeActionCreator, makeConstantCreator } from '../../utils/Utils';

export const NotificationTypes = makeConstantCreator(
  'USER_GET_NOTIFICATION',
  'USER_GET_NOTIFICATION_SUCCESS',
);

const userGetNotification = () => makeActionCreator(NotificationTypes.USER_GET_NOTIFICATION);
const userGetNotificationSuccess = () =>
  makeActionCreator(NotificationTypes.USER_GET_NOTIFICATION_SUCCESS);
export default {
  userGetNotification,
  userGetNotificationSuccess,
};
