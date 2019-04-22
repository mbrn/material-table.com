class TurkishTable extends React.Component {
  render() {
    return (
      <MaterialTable
        title="Türkçe Tablo Önizleme"
        columns={[
          { title: 'Adı', field: 'name' },
          { title: 'Soyadı', field: 'surname' },
          { title: 'Doğum Yılı', field: 'birthYear', type: 'numeric' },
          {
            title: 'Doğum Yeri',
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
            emptyDataSourceMessage: 'Gösterilecek kayıt yok'
          },
          toolbar: {
            searchTooltip: 'Arama'
          },
          pagination: {
            labelRowsSelect: 'satır',
            labelDisplayedRows: '{count} satırdan {from}-{to} arası',
            firstTooltip: 'İlk Sayfa',
            previousTooltip: 'Önceki Sayfa',
            nextTooltip: 'Sonraki Sayfa',
            lastTooltip: 'Son Sayfa'
          }
        }}
      />
    )
  }
}