import { AgGridReact } from 'ag-grid-react';

type Props = {
    rowData: any[]
    columns: any[]
    rowSelection?: any
    onRowDoubleClicked?: any
}

const DataGrid = (props: Props) => {
    const { rowData, columns, rowSelection, onRowDoubleClicked } = props;

    return (
        <div className="ag-theme-alpine" style={{ height: '420px', width: '100%' }}>
            <AgGridReact
                enableRtl
                rowData={rowData}
                columnDefs={columns}
                defaultColDef={{ sortable: true }}
                columnHoverHighlight={true}
                rowSelection={rowSelection}
                onRowDoubleClicked={onRowDoubleClicked} // Attach double-click event handler
            />
        </div>
    )
}

export default DataGrid