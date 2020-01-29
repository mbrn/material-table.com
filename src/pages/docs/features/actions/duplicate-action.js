class DuplicateAction extends React.Component {
  constructor(props) {
    super(props);

    this.materialTableRef = React.createRef();

    this.state = {
      initialFormData: {},
    };
  }

  render() {
    const { initialFormData } = this.state;

    return (
      <MaterialTable
        title="Duplicate Action Preview"
        columns={[
          { title: 'Name', field: 'name' },
          { title: 'Surname', field: 'surname' },
          { title: 'Birth Year', field: 'birthYear', type: 'numeric' },
          {
            title: 'Birth Place',
            field: 'birthCity',
            lookup: { 62: 'Cucq' },
          },
        ]}
        data={[
          { name: 'Poyo', surname: 'Man', birthYear: 1992, birthCity: 62 },
        ]}
        tableRef={this.materialTableRef}
        initialFormData={initialFormData}
        actions={[
          {
            icon: 'library_add',
            tooltip: 'Duplicate User',
            onClick: (event, rowData) => {
              const materialTable = this.materialTableRef.current;

              this.setState({
                initialFormData: {
                  ...rowData,
                  name: null,
                },
              });

              materialTable.dataManager.changeRowEditing();
              materialTable.setState({
                ...materialTable.dataManager.getRenderState(),
                showAddRow: true,
              });
            }
          }
        ]}
      />
    )
  }
}
