import { Navigation } from 'react-native-navigation';
import Icons from 'react-native-vector-icons/thebook-appicon';
export const pushScreen = (componentId, screenApp, passProps, title) => {
  Navigation.push(componentId, {
    component: {
      name: screenApp,
      passProps: {
        data: passProps,
        title: title,
      },
      options: {
        topBar: {
          title: {
            text: title,
            visible: false,
          },
        },
      },
    },
  });
};
export const loginScreen = () => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: 'Login',
              options: {
                topBar: {
                  visible: false,
                },
              },
            },
          },
        ],
      },
    },
  });
};
export const homeScreen = () => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: 'Home',
              options: {
                topBar: {
                  visible: true,
                },
              },
            },
          },
        ],
      },
    },
  });
};

export const introScreen = () => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: 'Intro',
              options: {
                topBar: {
                  visible: false,
                },
              },
            },
          },
        ],
      },
    },
  });
};

export const detailScreen = () => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: 'Detail',
              options: {
                topBar: {
                  visible: false,
                },
              },
            },
          },
        ],
      },
    },
  });
};

// SettingsScreen.options = {
//   topBar: {
//     title: {
//       text: 'Settings',
//     },
//   },
//   bottomTab: {
//     text: 'Settings',
//   },
// };
// Home.options = {
//   topBar: {
//     title: {
//       text: 'home',
//     },
//   },
//   bottomTab: {
//     text: 'home',
//   },
// };
export const bottomTabs = () => {
  Promise.all([
    Icons.getImageSource('ic-home', 30),
    Icons.getImageSource('ic-order', 30),
    Icons.getImageSource('ic-notification-1', 30),
    Icons.getImageSource('ic-user', 30),
    Icons.getImageSource('ic-library', 30),
    Icons.getImageSource('ic-menu', 25),
    Icons.getImageSource('ic-search', 25),
  ]).then(([listBook, orderHistory, notifications, user, library, menu, search]) => {
    Navigation.setRoot({
      root: {
        bottomTabs: {
          children: [
            {
              stack: {
                children: [
                  {
                    component: {
                      name: 'Home',
                      options: {
                        topBar: {
                          visible: true,
                          leftButtons: [
                            {
                              icon: menu,
                              fontSize: 10,
                            },
                          ],
                          rightButtons: [
                            {
                              icon: search,
                              fontSize: 10,
                            },
                          ],
                        },
                        bottomTab: {
                          icon: listBook,
                          fontSize: 30,
                          animate: false,
                        },
                      },
                    },
                  },
                ],
              },
            },
            {
              stack: {
                children: [
                  {
                    component: {
                      name: 'Login',
                      options: {
                        visible: false,
                        bottomTab: {
                          icon: orderHistory,
                          fontSize: 30,
                          animate: false,
                        },
                      },
                    },
                  },
                ],
              },
            },
            {
              stack: {
                children: [
                  {
                    component: {
                      name: 'Login',
                      options: {
                        bottomTab: {
                          icon: user,
                          fontSize: 30,
                          animate: false,
                        },
                      },
                    },
                  },
                ],
              },
            },
            {
              stack: {
                children: [
                  {
                    component: {
                      name: 'Login',
                      options: {
                        bottomTab: {
                          icon: notifications,
                        },
                      },
                    },
                  },
                ],
              },
            },
            {
              stack: {
                children: [
                  {
                    component: {
                      name: 'Login',
                      options: {
                        bottomTab: {
                          icon: library,
                        },
                      },
                    },
                  },
                ],
              },
            },
          ],
        },
      },
    });
  });
  // });
};
