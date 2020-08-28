| Field                   | Type                                         | Default   | Description                                                                                                   |
|:------------------------|:---------------------------------------------|:----------|:--------------------------------------------------------------------------------------------------------------|
| align               |  'center' or 'inherit' or 'justify' or 'left' or 'right';|   | The cell alignment                                                     |
| cellStyle               | object or func                               |           | Cell cellStyle                                                                                                |
| currencySetting         | object                                       |           | This field can be used when column type is currency.                                                          |
| customFilterAndSearch   | func                                         |           | This field can be used for overriding filter and search algorithm                                             |
| customSort              | func                                         |           | This field can be used for overriding sort algorithm                                                          |
| defaultFilter           | any                                          |           | Default Filter value for filtering column                                                                     |
| defaultGroupOrder       | number                                       |           | Default grouped column by order                                                                               |
| defaultGroupSort        | 'asc' or 'desc'                              | 'asc'     | Default grouped sort direction                                                                                |
| defaultSort             | 'asc' or 'desc'                              |           | Sorting direction: 'asc', 'desc'                                                                              |
| dateSetting             | { locale: string}                            |           | The locale used to format the displayed date/time                                                             |
| disableClick            | boolean                                      | false     | Disable the 'onRowClick' event for this cell                                                                  |
| editable                | 'always' 'never' 'onUpdate' 'onAdd'          | 'always'  | Editable custom component                                                                                     |
| editComponent           | func                                         |           | Editable custom component                                                                                     |
| emptyValue              | string or ReactElement or () => ReactElement |           | When data is empty or undefined, string value, ReactElement or function result can be set as default value    |
| export                  | boolean                                      | true      | Flag for make column exportable or not                                                                        |
| field                   | string                                       |           | Field name of data row                                                                                        |
| filtering               | boolean                                      | true      | Flag to activate or disable filtering feature of column                                                       |
| filterCellStyle         | object                                       |           | Filter cell style                                                                                             |
| filterComponent         | ReactElement                                 |           | Custom component for filtering                                                                                |
| filterPlaceholder       | string                                       |           | Filter textbox placeholder                                                                                    |
| grouping                | boolean                                      | true      | Flag to activate or disable grouping feature of column                                                        |
| headerStyle             | object                                       |           | Header cell style                                                                                             |
| hidden                  | boolean                                      | false     | Flag for hide column                                                                                          |
| hiddenByColumnsButton   | boolean                                      | false     | Flag for showing columns marked as 'hidden' equal to `true`, in the selector under columnsButton              |
| initialEditValue        | any                                          |           | Initial value on add new row                                                                                  |
| lookup                  | object                                       |           | Key value pair for lookup render data from                                                                    |
| readonly                | boolean                                      | false     | Flag to make column readonly when editing, the column will still be editable when adding a row                |
| removable               | boolean                                      | true      | Flag for column that could be removed with columnsButton or not                                               |
| render                  | func                                         |           | Render a custom node for cell. Parameter is `rowData` and return value must be ReactElement                   |
| searchable              | boolean                                      | undefined | If true, includes the column when performing a search                                                         |
| sorting                 | boolean                                      | true      | Flag to activate or disable sorting feature of column                                                         |
| title                   | string                                       |           | Header text                                                                                                   |
| type                    | string                                       |           | Data type: 'boolean', 'numeric', 'date', 'datetime', 'time', 'currency'                                       |
| width                    | number or CSS value                         |           | Column width value                                       |
