import React from 'react';
import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';
import store from '../redux/store';
// import Screen
import Home from '../screens/Home/index';
import Filter from '../screens/Home/Filter';
import SideBar from './sideBar';
import Login from '../screens/Auth/Login';
import Intro from '../screens/Intro/index';
import Detail from '../screens/Detail/index';
import Cart from '../screens/Cart/index';
import Register from '../screens/Auth/Register';
import Notification from '../screens/Notification/index';
import Profile from '../screens/User/Profile';
import Setting from '../screens/User/Setting';
import Orders from '../screens/Orders/index';
import Library from '../screens/Library';
import Search from '../screens/Home/Search';
import UploadImage from '../components/UploadImage';
import ChangePassword from '../screens/User/ChangePassword';
import EditInfo from '../screens/User/EditInfo';
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
  );
  Navigation.registerComponent(
    'Register',
    () => ReduxProvider(Register),
    () => Register,
  );
  Navigation.registerComponent(
    'Cart',
    () => ReduxProvider(Cart),
    () => Cart,
  );
  Navigation.registerComponent(
    'Notification',
    () => ReduxProvider(Notification),
    () => Notification,
  );
  Navigation.registerComponent(
    'Profile',
    () => ReduxProvider(Profile),
    () => Profile,
  );
  Navigation.registerComponent(
    'SideBar',
    () => ReduxProvider(SideBar),
    () => SideBar,
  );
  Navigation.registerComponent(
    'Setting',
    () => ReduxProvider(Setting),
    () => Setting,
  );
  Navigation.registerComponent(
    'Orders',
    () => ReduxProvider(Orders),
    () => Orders,
  );
  Navigation.registerComponent(
    'Library',
    () => ReduxProvider(Library),
    () => Library,
  );
  Navigation.registerComponent(
    'Search',
    () => ReduxProvider(Search),
    () => Search,
  );
  Navigation.registerComponent(
    'Filter',
    () => ReduxProvider(Filter),
    () => Filter,
  );
  Navigation.registerComponent(
    'UploadImage',
    () => ReduxProvider(UploadImage),
    () => UploadImage,
  );
    Navigation.registerComponent(
    'ChangePassword',
    () => ReduxProvider(ChangePassword),
    () => ChangePassword,
  );
  Navigation.registerComponent(
    'EditInfo',
    () => ReduxProvider(EditInfo),
    () => EditInfo,
  );
}
