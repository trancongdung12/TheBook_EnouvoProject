import React from 'react';
import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';
import store from '../redux/store';
// import Screen
import Home from '../components/SlideBar';
import Login from '../screens/Auth/Login';
import Intro from '../screens/Intro/index';
import Detail from '../screens/Detail/index';

import Register from '../screens/Auth/Register';
function ReduxProvider(Component) {
  return (props) => (
    <Provider store={store}>
      <Component {...props} />
    </Provider>
  );
}
export function registerScreens() {
  Navigation.registerComponent(
    'Intro',
    () => ReduxProvider(Intro),
    () => Intro,
  );
  Navigation.registerComponent(
    'Home',
    () => ReduxProvider(Home),
    () => Home,
  );
  Navigation.registerComponent(
    'Login',
    () => ReduxProvider(Login),
    () => Login,
  );
  Navigation.registerComponent(
    'Detail',
    () => ReduxProvider(Detail),
    () => Detail,
    'Register',
    () => ReduxProvider(Register),
    () => Register,
  );
}
