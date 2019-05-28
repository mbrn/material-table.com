| Field         | Type                    | Default   | Description                                                                               |
|:--------------|:------------------------|:----------|:------------------------------------------------------------------------------------------|
| disabled      | boolean                 | false     | Button enabled/disabled                                                                   |
| hidden        | boolean                 | false     | Button hidden flag                                                                        |
| icon          | string or ReactElement  |           | Icon of button from material icons or custom component                                    |
| iconProps     | object                  |           | Props for icon as IconProps from https://material-ui.com/api/icon/                        |
| isFreeAction  | boolean                 | false     | Independent actions that will not on row' actions section                                 |
| onClick       | func                    |           | This event will be fired when button clicked. Parameters are `event` and `row or rows`    |
| tooltip       | string                  |           | Tooltip for button  