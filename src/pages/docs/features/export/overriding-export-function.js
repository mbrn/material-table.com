class OverridingExportFunction extends React.Component {
  render() {
    return (
      <MaterialTable
        title="Overriding Export Function Preview"
        columns={[
          { title: 'Name', field: 'name' },
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
          exportButton: true,
          exportCsv: (columns, data) => {
            alert('You should develop a code to export ' + data.length + ' rows');
          }
        }}
      />
    )
  }
}