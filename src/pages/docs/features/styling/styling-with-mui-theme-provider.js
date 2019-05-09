class StylingWithMuiThemeProvider extends React.Component {

  constructor(props) {
    super(props);
    this.theme = createMuiTheme({
      palette: {
        primary: {
          main: '#4caf50',
        },
        secondary: {
          main: '#ff9100',
        },
      },

    });
  }

  render() {
    return (
      <MuiThemeProvider theme={this.theme}>
        <MaterialTable
          title="Styling with MuiThemeProvider Preview"
          columns={[
            {
              title: 'Name', field: 'name',
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
            selection: true
          }}
        />
      </MuiThemeProvider>
    )
  }
}