| Field         | Type                    | Default   | Description                                                                                 |
|:--------------|:------------------------|:----------|:--------------------------------------------------------------------------------------------|
| disabled      | boolean                 | false     | Flag for button disabled or enabled                                                         |
| icon          | string or ReactElement  |           | Icon of button from material icons or custom component                                      |
| openIcon      | string or ReactElement  |           | Icon of button when detailPanel is open                                                     |
| tooltip       | string                  |           | Tooltip for button                                                                          |
| iconProps     | object                  |           | Props for icon as IconProps from https://material-ui.com/api/icon/                          |
| isFreeAction  | boolean                 | false     | Independent actions that will not on row' actions section                                   |
| render        | func                    |           | render result of detail panel according rowData                                             |