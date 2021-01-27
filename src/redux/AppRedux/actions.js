import { makeActionCreator, makeConstantCreator } from '../../utils/Utils';

export const AppTypes = makeConstantCreator('START_APP');

export const userStartApp = () => makeActionCreator(AppTypes.START_APP);
