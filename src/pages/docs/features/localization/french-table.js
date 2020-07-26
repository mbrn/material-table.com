function FrenchTable() {
    return (
        <MaterialTable
            title="Visualisation du tableau en Français"
            columns={[
                { title: 'Prénom', field: 'name' },
                { title: 'Nom', field: 'surname' },
                {
                    title: 'Date de naissance',
                    field: 'birthYear',
                    type: 'numeric'
                },
                {
                    title: 'Ville de naissance',
                    field: 'birthCity',
                    lookup: { 34: 'Istanbul', 63: 'Sanliurfa' }
                }
            ]}
            data={[
                {
                    name: 'Mehmet',
                    surname: 'Baran',
                    birthYear: 1987,
                    birthCity: 63
                },
                {
                    name: 'Zerya Betül',
                    surname: 'Baran',
                    birthYear: 2017,
                    birthCity: 34
                }
            ]}
            localization={{
                body: {
                    emptyDataSourceMessage: "Pas d'enregistreent à afficher",
                    addTooltip: 'Ajouter',
                    deleteTooltip: 'Supprimer',
                    editTooltip: 'Editer',
                    filterRow: {
                        filterTooltip: 'Filtrer'
                    },
                    editRow: {
                        deleteText: 'Voulez-vous supprimer cette ligne?',
                        cancelTooltip: 'Annuler',
                        saveTooltip: 'Enregistrer'
                    }
                },
                grouping: {
                    placeholder: "Tirer l'entête ...",
                    groupedBy: 'Grouper par:'
                },
                header: {
                    actions: 'Actions'
                },
                pagination: {
                    labelDisplayedRows: '{from}-{to} de {count}',
                    labelRowsSelect: 'lignes',
                    labelRowsPerPage: 'lignes par page:',
                    firstAriaLabel: 'Première page',
                    firstTooltip: 'Première page',
                    previousAriaLabel: 'Page précédente',
                    previousTooltip: 'Page précédente',
                    nextAriaLabel: 'Page suivante',
                    nextTooltip: 'Page suivante',
                    lastAriaLabel: 'Dernière page',
                    lastTooltip: 'Dernière page'
                },
                toolbar: {
                    addRemoveColumns: 'Ajouter ou supprimer des colonnes',
                    nRowsSelected: '{0} ligne(s) sélectionée(s)',
                    showColumnsTitle: 'Voir les colonnes',
                    showColumnsAriaLabel: 'Voir les colonnes',
                    exportTitle: 'Exporter',
                    exportAriaLabel: 'Exporter',
                    exportName: 'Exporter en CSV',
                    searchTooltip: 'Chercher',
                    searchPlaceholder: 'Chercher'
                }
            }}
        />
    );
}
