import { Navigation } from 'react-native-navigation';

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
                  visible: false,
                },
              },
            },
          },
        ],
      },
    },
  });
  bottomTabs();
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
  Navigation.events().registerAppLaunchedListener(async () => {
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
                        bottomTab: {
                          text: 'Sach',
                          fontSize: 10,
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
                          text: 'Bao',
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
                          text: 'Profile',
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
                          text: 'Thong báo',
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
                          text: 'Home',
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
};
