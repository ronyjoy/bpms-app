import React, { Component } from 'react';

import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-blue.css';
import axios from 'axios';

class ListCustomer extends Component {

  componentDidMount() {
    fetch('/api/customer')
      .then(result => result.json())
      .then(rowData => this.setState({ rowData }))
  }

  onCellValueChanged = (item ) =>{
    console.log(item);
    item.newOrModified="Modified";
   }

  constructor(props) {
    super(props);

    this.state = {
      columnDefs: [
        { headerName: "Customer Name", field: "customername" ,sortable: true,filter: "agTextColumnFilter"},
        { headerName: "Contact Person", field: "contactperson" ,sortable: true,filter: "agTextColumnFilter"},
        { headerName: "Email", field: "email" ,filter: "agTextColumnFilter"},
        { headerName: "Phone", field: "phone",filter: "agTextColumnFilter"},
        { headerName: "Address", field: "address" },
        { headerName: "Status", field: "status" },

      ],
      paginationPageSize: 20,
      defaultColDef: {
        editable: true,
        enableRowGroup: true,
        enablePivot: true,
        enableValue: true,
        sortable: true,
        resizable: true,
        filter: true
      },
      rowSelection: "multiple",
      rowGroupPanelShow: "always",
      pivotPanelShow: "always",
      editType: "fullRow"
    }
    
  }

  onRowValueChanged =(params) => {
    console.log(params.data);
    axios.put('/api/customer/' , params.data) 
    .then(function (response) {
      // handle success
      console.log('update success' + response);
      })
      .catch(function (error) {
      // handle error
      console.log(error);
      })
      .then(function () {
      // always executed
      });
}

  render() {
    return (
      <div
        className="ag-theme-blue"
      >
         <AgGridReact
            columnDefs={this.state.columnDefs}
            autoGroupColumnDef={this.state.autoGroupColumnDef}
            defaultColDef={this.state.defaultColDef}
            suppressRowClickSelection={true}
            groupSelectsChildren={true}
            debug={true}
            editType={this.state.editType}
            rowSelection={this.state.rowSelection}
            rowGroupPanelShow={this.state.rowGroupPanelShow}
            pivotPanelShow={this.state.pivotPanelShow}
            enableRangeSelection={true}
            pagination={true}
            onGridReady={this.onGridReady}
            onRowValueChanged ={this.onRowValueChanged}
            rowData={this.state.rowData}
          />
      </div>
    );
  }
}


export default ListCustomer;