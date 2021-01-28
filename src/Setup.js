import { Navigation } from 'react-native-navigation';
import { registerScreens } from './navigation/registerScreen';
import { userStartApp } from './redux/AppRedux/actions';
import store from './redux/store';
const App = () => {
  Navigation.events().registerAppLaunchedListener(async () => {
    try {
      await registerScreens();
      await store.dispatch(userStartApp());
    } catch (error) {
      console.log('Init unsuccessful', error.message);
    }
  });
};

export default App;
