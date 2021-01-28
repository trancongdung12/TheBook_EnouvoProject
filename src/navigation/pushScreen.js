import { Navigation } from 'react-native-navigation';
import Icon from 'react-native-vector-icons/thebook-appicon';

import Icons from 'react-native-vector-icons/thebook-appicon';
export const pushScreen = (componentId, screenApp, passProps, title, visibles) => {
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
          },
          visible: visibles,
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
  Promise.all([
    Icons.getImageSource('ic-home', 30),
    Icons.getImageSource('ic-menu', 25),
    Icons.getImageSource('ic-search', 25),
  ]).then(([listBook, menu, search]) => {
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
                    leftButtons: [
                      {
                        id: 'sideMenu',
                        icon: menu,
                        fontSize: 10,
                      },
                    ],
                    rightButtons: [
                      {
                        id: 'S',
                        icon: search,
                        fontSize: 10,
                      },
                    ],
                  },
                },
              },
            },
          ],
        },
      },
    });
  });
  bottomTabs();
};

export const profileScreen = () => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: 'Profile',
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
    Icons.getImageSource('filter', 25),
  ]).then(([listBook, orderHistory, notifications, user, library, menu, search, filter]) => {
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
                      name: 'Orders',
                      options: {
                        visible: false,
                        topBar: {
                          title: {
                            text: 'Đơn hàng của bạn',
                          },
                          rightButtons: [
                            {
                              icon: filter,
                              fontSize: 10,
                            },
                          ],
                        },
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
                      name: 'Profile',
                      options: {
                        topBar: {
                          height: 0,
                          visible: false,
                        },
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
                      name: 'Notification',
                      options: {
                        topBar: {
                          title: {
                            text: 'Thông báo',
                          },
                        },
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
