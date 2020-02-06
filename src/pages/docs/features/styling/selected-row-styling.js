function SelectedRowStyling() {
  const { useState } = React;
  const [selectedRow, setSelectedRow] = useState(null);
  
  return (
    <MaterialTable
      title="Selected Row Styling Preview"
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
      onRowClick={((evt, selectedRow) => setSelectedRow(selectedRow.tableData.id))}
      options={{
        rowStyle: rowData => ({
          backgroundColor: (selectedRow === rowData.tableData.id) ? '#EEE' : '#FFF'
        })
      }}
    />
  )
}
