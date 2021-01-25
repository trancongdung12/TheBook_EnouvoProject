import { makeActionCreator, makeConstantCreator } from '../../utils/Utils';

export const AppTypes = makeConstantCreator('START_APP');

const userStartApp = () => makeActionCreator(AppTypes.START_APP);
export default {
  userStartApp,
};
