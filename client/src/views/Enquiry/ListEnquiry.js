import React, { Component } from 'react';

import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-blue.css';
import axios from 'axios';

class ListEnquiry extends Component {

  componentDidMount() {
    fetch('/api/enquiry')
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
        { headerName: "Enquiry Id", field: "enquiry_id" ,sortable: true,filter: "agTextColumnFilter"},
        { headerName: "Enquriy Date", field: "enquiry_date" ,filter: "agTextColumnFilter"},
        { headerName: "Enquiry Description", field: "enquiry_description" ,sortable: true,filter: "agTextColumnFilter"},
        { headerName: "Customer", field: "customer_id" ,sortable: true,filter: "agTextColumnFilter"},
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
    axios.put('/api/enquiry/'+params.data._id , params.data) 
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


export default ListEnquiry;