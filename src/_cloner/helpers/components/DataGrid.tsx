import { AgGridReact } from 'ag-grid-react';

type Props = {
    rowData: any[]
    columns: any[]
}

const DataGrid = (props: Props) => {
    const { rowData, columns } = props;

    return (
        <div className="ag-theme-alpine" style={{ height: '420px', width: '100%' }}>
            <AgGridReact
                enableRtl
                rowData={rowData}
                columnDefs={columns}
                defaultColDef={{sortable: true}}
                columnHoverHighlight={true}
            />
        </div>
    )
}

export default DataGrid