class CellHeaderStyling extends React.Component {
  render() {
    return (
      <MaterialTable
        title="Cell Header Styling Preview"
        columns={[
          {
            title: 'Name', field: 'name',
            cellStyle: {
              backgroundColor: '#039be5',
              color: '#FFF'
            },
            headerStyle: {
              backgroundColor: '#039be5',
            }
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
          headerStyle: {
            backgroundColor: '#01579b',
            color: '#FFF'
          }
        }}
      />
    )
  }
}