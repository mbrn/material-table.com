function BulkEdit() {
  const { useState } = React;

  const [columns, setColumns] = useState([
    { title: 'Name', field: 'name' },
    { title: 'Surname', field: 'surname', initialEditValue: 'initial edit value' },
    { title: 'Birth Year', field: 'birthYear', type: 'numeric' },
    {
      title: 'Birth Place',
      field: 'birthCity',
      lookup: { 34: 'İstanbul', 63: 'Şanlıurfa' },
    },
  ]);

  const [data, setData] = useState([
    { name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 },
    { name: 'Zerya Betül', surname: 'Baran', birthYear: 2017, birthCity: 34 },
  ]);

  return (
    <MaterialTable
      title="Bulk Edit Preview"
      columns={columns}
      data={data}
      editable={{
        onBulkUpdate: changes =>
          new Promise((resolve, reject) => {
            setTimeout(() => {
              resolve();
            }, 1000);
          }),     
        onRowDelete: oldData =>
          new Promise((resolve, reject) => {
            setTimeout(() => {
              resolve();
            }, 1000);
          }),     
      }}
    />
  )
}
