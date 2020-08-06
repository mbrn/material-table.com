function ObjectValidation() {
  return (
    <MaterialTable
      title="Object Validation Preview"
      columns={[
        {
          title: 'Name', field: 'name', validate: rowData => rowData.name === '' ? { isValid: false, helperText: 'Name cannot be empty' } : true,
        },
        { title: 'Surname', field: 'surname', validate: rowData => rowData.surname.length < 3 ? { isValid: false, helperText: 'Surname must be longer than 3 Chars' } : true, },
        { title: 'Birth Year', field: 'birthYear', type: 'numeric', validate: rowData => rowData.birthYear < 1900 ? { isValid: true, helperText: 'Birthyear should be after 1900' } : true, },
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
      editable={{
        onRowAdd: newData =>
          new Promise((resolve, reject) => {
            setTimeout(() => {
              setData([...data, newData]);
              resolve();
            }, 1000)
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise((resolve, reject) => {
            setTimeout(() => {
              const dataUpdate = [...data];
              const index = oldData.tableData.id;
              dataUpdate[index] = newData;
              setData(dataUpdate);

              resolve();
            }, 1000)
          }),
      }}
    />
  )
}
