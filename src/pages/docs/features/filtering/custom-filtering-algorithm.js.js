class CustomFilteringAlgorithm extends React.Component {
  render() {
    return (
      <MaterialTable
        title="Custom Filtering Algorithm Preview"
        columns={[
          {
            title: 'Name', 
            field: 'name',
            customFilterAndSearch: (term, rowData) => term == rowData.name.length
          },
          { title: 'Surname', field: 'surname' },
          { title: 'Birth Year', field: 'birthYear', type: 'numeric' },
          {
            title: 'Birth Place',
            field: 'birthCity',
            lookup: { 34: 'İstanbul', 63: 'Şanlıurfa' },
          },
        ]}
        data={[
          { name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 },
          { name: 'Zerya Betül', surname: 'Baran', birthYear: 2017, birthCity: 34 },
        ]}
        options={{
          filtering: true
        }}
      />
    )
  }
}