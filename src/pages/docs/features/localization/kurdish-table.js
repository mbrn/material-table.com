class KurdishTable extends React.Component {
  render() {
    return (
      <MaterialTable
        title="Pêşdîtine Tabloye Kurdî"
        columns={[
          { title: 'Nav', field: 'name' },
          { title: 'Paşnav', field: 'surname' },
          { title: 'Salê Zayîn', field: 'birthYear', type: 'numeric' },
          {
            title: 'Cîhe Zayîn',
            field: 'birthCity',
            lookup: { 34: 'İstanbul', 63: 'Şanlıurfa' },
          },
        ]}
        data={[
          { name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 },
          { name: 'Zerya Betül', surname: 'Baran', birthYear: 2017, birthCity: 34 },
        ]}        
        localization={{
          body: {
            emptyDataSourceMessage: 'Guherandinên ku tiştek tune'
          },
          toolbar: {
            searchTooltip: 'Lêgerîn'
          },
          pagination: {
            labelRowsSelect: 'Xet',
            labelDisplayedRows: ' {from}-{to} xete {count}',
            firstTooltip: 'Rûpele Berîn',
            previousTooltip: 'Rûpele Berê',
            nextTooltip: 'Rûpele Piştî',
            lastTooltip: 'Rûpele Talî'
          }
        }}
      />
    )
  }
}