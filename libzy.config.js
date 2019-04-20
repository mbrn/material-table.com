const MainPage = require('./src/pages/main-page').default;
const GetStarted = require('./src/pages/docs/get-started.md').default;
const Install = require('./src/pages/docs/install.md').default;

module.exports = {
  title: 'material-table',
  subTitle: 'Datatable component that based on material-ui',
  github: 'https://github.com/mbrn/material-table',  
  menuTree: [
    {
      path: '',
      component: MainPage,
      data: {
        features: [
          {
            title: 'Actions',
            text: 'You can add one or multiple row based actions easily',
            button: {
              path: '/docs/actions',
              text: 'Details and Examples'
            }
          },
          {
            title: 'Component Overriding',
            text: 'You can override any component of material-table',
            button: {
              path: '/docs/component-overriding',
              text: 'Details and Examples'
            }
          },
          {
            title: 'Custom Column Rendering',
            text: 'You can set a custom render to a column according to row data',
            button: {
              path: '/docs/custom-column-rendering',
              text: 'Details and Examples'
            }
          },
          {
            title: 'Detail Panel',
            text: 'A detail panel could be set for every row easily',
            button: {
              path: '/docs/detail-panel',
              text: 'Details and Examples'
            }
          },
          {
            title: 'Editable',
            text: 'material-table lets you to make data editable',
            button: {
              path: '/docs/editable',
              text: 'Details and Examples'
            }
          },
          {
            title: 'Export',
            text: 'Exporting data as CSV is available with material-table',
            button: {
              path: '/docs/export',
              text: 'Details and Examples'
            }
          },
          {
            title: 'Filtering',
            text: 'material-table has inline filter component that lets user create custom filters on data',
            button: {
              path: '/docs/filtering',
              text: 'Details and Examples'
            }
          },
          {
            title: 'Grouping',
            text: 'material-table has grouping feature that lets users create runtime groups on data by drag on drop',
            button: {
              path: '/docs/grouping',
              text: 'Details and Examples'
            }
          },
          {
            title: 'Localization',
            text: 'You can change text of material-table easily',
            button: {
              path: '/docs/localization',
              text: 'Details and Examples'
            }
          },
          {
            title: 'Remote Data',
            text: 'material-table lets you to manage your data remotely',
            button: {
              path: '/docs/remote-data',
              text: 'Details and Examples'
            }
          },
          {
            title: 'Search',
            text: 'material-table lets users to search any text on data',
            button: {
              path: '/docs/search',
              text: 'Details and Examples'
            }
          },
          {
            title: 'Selection',
            text: 'Selection feature lets users to select rows',
            button: {
              path: '/docs/selection',
              text: 'Details and Examples'
            }
          },
          {
            title: 'Sorting',
            text: 'material-table has sorting feature on columns',
            button: {
              path: '/docs/sorting',
              text: 'Details and Examples'
            }
          },
          {
            title: 'Styling',
            text: 'You can add styles easily to components of material-table',
            button: {
              path: '/docs/styling',
              text: 'Details and Examples'
            }
          },
          {
            title: 'Tree Data',
            text: 'You can manage your nested data in material-table easily',
            button: {
              path: '/docs/tree-data',
              text: 'Details and Examples'
            }
          },
        ]
      }
    },
    {
      path: 'docs',
      tree: [
        {
          icon: 'save',
          text: 'Get Started',
          path: 'get-started',
          component: GetStarted
        },
        {
          icon: 'setup',
          text: 'Install',
          path: 'install',
          component: Install
        }
      ]
    }
  ],
  theme: {
    palette: {
      primary: {
        main: '#01579b'
      },
      secondary: {
        main: '#e65100',
      },
    }
  },
  options: {
    routerType: 'browser', // hash | browser
  }
}