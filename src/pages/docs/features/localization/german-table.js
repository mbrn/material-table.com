function GermanTable() {
  return (
    <MaterialTable
      title="Türkçe Tablo Önizleme"
      columns={[
        { title: 'Vorname', field: 'name' },
        { title: 'Nachname', field: 'surname' },
        { title: 'Geburtsjahr', field: 'birthYear', type: 'numeric' },
        {
          title: 'Geburtsort',
          field: 'birthCity',
          lookup: { 34: 'Istanbul', 63: 'Sanliurfa' },
        },
      ]}
      data={[
        { name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 },
        { name: 'Zerya Betül', surname: 'Baran', birthYear: 2017, birthCity: 34 },
      ]}        
      localization={{
        body: {
          bulkEditTooltip: "Alle bearbeiten",
          emptyDataSourceMessage: 'Keine Einträge',
          addTooltip: 'Hinzufügen',
          deleteTooltip: 'Löschen',
          editTooltip: 'Bearbeiten',
          filterRow: {
            filterTooltip: 'Filter'
          },
          editRow: {
            deleteText: 'Diese Zeile wirklich löschen?',
            cancelTooltip: 'Abbrechen',
            saveTooltip: 'Speichern'
          }
        },
        grouping: {
          placeholder: 'Spalten ziehen ...',
          groupedBy: 'Gruppiert nach:'
        },
        header: {
          actions: 'Aktionen'
        },
        pagination: {
          labelDisplayedRows: '{from}-{to} von {count}',
          labelRowsSelect: 'Zeilen',
          labelRowsPerPage: 'Zeilen pro Seite:',
          firstAriaLabel: 'Erste Seite',
          firstTooltip: 'Erste Seite',
          previousAriaLabel: 'Vorherige Seite',
          previousTooltip: 'Vorherige Seite',
          nextAriaLabel: 'Nächste Seite',
          nextTooltip: 'Nächste Seite',
          lastAriaLabel: 'Letzte Seite',
          lastTooltip: 'Letzte Seite'
        },
        toolbar: {
          addRemoveColumns: 'Spalten hinzufügen oder löschen',
          nRowsSelected: '{0} Zeile(n) ausgewählt',
          showColumnsTitle: 'Zeige Spalten',
          showColumnsAriaLabel: 'Zeige Spalten',
          exportTitle: 'Export',
          exportAriaLabel: 'Export',
          exportName: 'Export als CSV',
          searchTooltip: 'Suche',
          searchPlaceholder: 'Suche'
        }
      }}
    />
  )
}
