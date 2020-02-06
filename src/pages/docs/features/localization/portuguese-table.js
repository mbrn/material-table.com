function PortugueseTable() {
  return (
    <MaterialTable
      title="Visualização da Tabela em Português"
      columns={[
        { title: 'Nome', field: 'name' },
        { title: 'Sobrenome', field: 'surname' },
        { title: 'Ano de Nascimento', field: 'birthYear', type: 'numeric' },
        {
          title: 'Cidade Natal',
          field: 'birthCity',
          lookup: { 34: 'İstanbul', 63: 'Şanlıurfa', 89: 'Barras' },
        },
      ]}
      data={[
        { name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 },
        { name: 'Zerya Betül', surname: 'Baran', birthYear: 2017, birthCity: 34 },
        { name: 'Augusto', surname: 'Calaca', birthYear: 1997, birthCity: 89 },
      ]}        
      localization={{
        body: {
          emptyDataSourceMessage: 'Nenhum registro para exibir'
        },
        toolbar: {
          searchTooltip: 'Pesquisar'
        },
        pagination: {
          labelRowsSelect: 'linhas',
          labelDisplayedRows: '{count} de {from}-{to}',
          firstTooltip: 'Primeira página',
          previousTooltip: 'Página anterior',
          nextTooltip: 'Próxima página',
          lastTooltip: 'Última página'
        }
      }}
    />
  )
}
