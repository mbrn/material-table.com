class ToolbarOverriding extends React.Component {
  render() {
    return (
      <MaterialTable
        title="Toolbar Overriding Preview"
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
        components={{
          Toolbar: props => (
            <div>
              <MTableToolbar {...props} />
              <div style={{padding: '0px 10px'}}>
                <Chip label="Chip 1" color="secondary" style={{marginRight: 5}}/>
                <Chip label="Chip 2" color="secondary" style={{marginRight: 5}}/>
                <Chip label="Chip 3" color="secondary" style={{marginRight: 5}}/>
                <Chip label="Chip 4" color="secondary" style={{marginRight: 5}}/>
                <Chip label="Chip 5" color="secondary" style={{marginRight: 5}}/>
              </div>
            </div>
          ),
        }}
      />
    )
  }
}