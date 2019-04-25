const MainPage = require('libzy-lib').MainPage;
const GetStarted = require('./src/pages/docs/get-started.md').default;
const Install = require('./src/pages/docs/install.md').default;
const AllProps = require('./src/pages/docs/all-props/index.mdx').default;
const Support = require('./src/pages/docs/support.md').default;

const actions = require('./src/pages/docs/features/actions/index.mdx').default;
const componentOverriding = require('./src/pages/docs/features/component-overriding/index.mdx').default;
const customColumnRendering = require('./src/pages/docs/features/custom-column-rendering/index.mdx').default;
const detailPanel = require('./src/pages/docs/features/detail-panel/index.mdx').default;
const editable = require('./src/pages/docs/features/editable/index.mdx').default;
const exportPage = require('./src/pages/docs/features/export/index.mdx').default;
const filtering = require('./src/pages/docs/features/filtering/index.mdx').default;
const grouping = require('./src/pages/docs/features/grouping/index.mdx').default;
const localization = require('./src/pages/docs/features/localization/index.mdx').default;
const remoteData = require('./src/pages/docs/features/remote-data/index.mdx').default;
const search = require('./src/pages/docs/features/search/index.mdx').default;
const selection = require('./src/pages/docs/features/selection/index.mdx').default;
const sorting = require('./src/pages/docs/features/sorting/index.mdx').default;
const styling = require('./src/pages/docs/features/styling/index.mdx').default;
const treeData = require('./src/pages/docs/features/tree-data/index.mdx').default;

module.exports = {
  title: 'material-table',
  subTitle: 'React data table component that based on material-ui',
  logoImage: '/assets/logo.svg',
  github: 'https://github.com/mbrn/material-table',
  githubShort: 'mbrn/material-table',
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
              path: '/docs/features/actions',
              text: 'Details and Examples'
            }
          },
          {
            title: 'Component Overriding',
            text: 'You can override any component of material-table',
            button: {
              path: '/docs/features/component-overriding',
              text: 'Details and Examples'
            }
          },
          {
            title: 'Custom Column Rendering',
            text: 'You can set a custom render to a column according to row data',
            button: {
              path: '/docs/features/custom-column-rendering',
              text: 'Details and Examples'
            }
          },
          {
            title: 'Detail Panel',
            text: 'A detail panel could be set for every row easily',
            button: {
              path: '/docs/features/detail-panel',
              text: 'Details and Examples'
            }
          },
          {
            title: 'Editable',
            text: 'material-table lets you to make data editable',
            button: {
              path: '/docs/features/editable',
              text: 'Details and Examples'
            }
          },
          {
            title: 'Export',
            text: 'Exporting data as CSV is available with material-table',
            button: {
              path: '/docs/features/export',
              text: 'Details and Examples'
            }
          },
          {
            title: 'Filtering',
            text: 'material-table has inline filter component that lets user create custom filters on data',
            button: {
              path: '/docs/features/filtering',
              text: 'Details and Examples'
            }
          },
          {
            title: 'Grouping',
            text: 'material-table has grouping feature that lets users create runtime groups on data by drag on drop',
            button: {
              path: '/docs/features/grouping',
              text: 'Details and Examples'
            }
          },
          {
            title: 'Localization',
            text: 'You can change text of material-table easily',
            button: {
              path: '/docs/features/localization',
              text: 'Details and Examples'
            }
          },
          {
            title: 'Remote Data',
            text: 'material-table lets you to manage your data remotely',
            button: {
              path: '/docs/features/remote-data',
              text: 'Details and Examples'
            }
          },
          {
            title: 'Search',
            text: 'material-table lets users to search any text on data',
            button: {
              path: '/docs/features/search',
              text: 'Details and Examples'
            }
          },
          {
            title: 'Selection',
            text: 'Selection feature lets users to select rows',
            button: {
              path: '/docs/features/selection',
              text: 'Details and Examples'
            }
          },
          {
            title: 'Sorting',
            text: 'material-table has sorting feature on columns',
            button: {
              path: '/docs/features/sorting',
              text: 'Details and Examples'
            }
          },
          {
            title: 'Styling',
            text: 'You can add styles easily to components of material-table',
            button: {
              path: '/docs/features/styling',
              text: 'Details and Examples'
            }
          },
          {
            title: 'Tree Data',
            text: 'You can manage your nested data in material-table easily',
            button: {
              path: '/docs/features/tree-data',
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
          text: 'Get Started',
          path: 'get-started',
          component: GetStarted
        },
        {
          text: 'Install',
          path: 'install',
          component: Install
        },
        {
          text: 'All Props',
          path: 'all-props',
          component: AllProps
        },
        {
          text: 'Features',
          path: 'features',
          tree: [
            {
              text: 'Actions',
              path: 'actions',
              component: actions
            },
            {
              text: 'Component Overriding',
              path: 'component-overriding',
              component: componentOverriding
            },
            {
              text: 'Custom Column Rendering',
              path: 'custom-column-rendering',
              component: customColumnRendering
            },
            {
              text: 'Detail Panel',
              path: 'detail-panel',
              component: detailPanel
            },
            {
              text: 'Editable',
              path: 'editable',
              component: editable
            },
            {
              text: 'Export',
              path: 'export',
              component: exportPage
            },
            {
              text: 'Filtering',
              path: 'filtering',
              component: filtering
            },
            {
              text: 'Grouping',
              path: 'grouping',
              component: grouping
            },
            {
              text: 'Localization',
              path: 'localization',
              component: localization
            },
            {
              text: 'Remote Data',
              path: 'remote-data',
              component: remoteData
            },
            {
              text: 'Search',
              path: 'search',
              component: search
            },
            {
              text: 'Selection',
              path: 'selection',
              component: selection
            },
            {
              text: 'Sorting',
              path: 'sorting',
              component: sorting
            },
            {
              text: 'Styling',
              path: 'styling',
              component: styling
            },
            {
              text: 'Tree Data',
              path: 'tree-data',
              component: treeData
            },
          ]
        },
        {
          text: 'Support',
          path: 'support',
          component: Support
        }
      ]
    }
  ],
  theme: {
    palette: {
      primary: {
        main: '#3f51b5'
      },
      secondary: {
        main: '#f50057',
      },
    }
  },
  options: {
    routerType: 'hash', // hash | browser
    search: false
  }
}