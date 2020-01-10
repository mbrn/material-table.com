## Prerequisites

The minimum `React` version material-table supports is `^16.8.5` since material-table `v1.36.1`. This is due to utilising [`react-beautiful-dnd`](https://github.com/atlassian/react-beautiful-dnd) for drag & drop functionality which uses hooks.

If you use an older version of react we suggest to upgrade your dependencies or use material-table `1.36.0`.

## Installation

#### 1.Install package

To install material-table with `npm`:
```bash
npm install material-table --save
npm install @material-ui/core --save
```

To install material-table with `yarn`:
```bash
yarn add material-table
yarn add @material-ui/core
```

#### 2.Add material icons

There are two ways to use icons in material-table either import the material icons font via html OR import material icons and use the material-table `icons` prop.

##### HTML

```html
<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/icon?family=Material+Icons"
/>
```

OR

##### Import Material icons

Icons can be imported to be used in material-table offering more flexibility for customising the look and feel of material table over using a font library.

To install @material-ui/icons with `npm`:
```bash
npm install @material-ui/icons --save
```
To install @material-ui/icons with `yarn`:
```bash
yarn add @material-ui/icons
```

If your environment doesn't support tree-shaking, the **recommended** way to import the icons is the following:

```jsx
import AddBox from "@material-ui/icons/AddBox";
import ArrowDownward from "@material-ui/icons/ArrowDownward";
```

If your environment support tree-shaking you can also import the icons this way:

```jsx
import { AddBox, ArrowDownward } from "@material-ui/icons";
```

Note: Importing named exports in this way will result in the code for _every icon_ being included in your project, so is not recommended unless you configure [tree-shaking](https://webpack.js.org/guides/tree-shaking/). It may also impact Hot Module Reload performance. Source: [@material-ui/icons](https://github.com/mui-org/material-ui/blob/master/packages/material-ui-icons/README.md#imports)

Example

```jsx
import { forwardRef } from 'react';

import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';

const tableIcons = {
    Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
    Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
    Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
    DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
    Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
    Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
    FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
    LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
    NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
    ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
    SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
    ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
    ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
  };

<MaterialTable
  icons={tableIcons}
  ...
/>
```
