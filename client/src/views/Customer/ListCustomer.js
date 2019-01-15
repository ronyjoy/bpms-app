import React, { Component } from 'react';

import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-material.css';




class ListCustomer extends Component {

  componentDidMount() {
    fetch('/api/customer')
      .then(result => result.json())
      .then(rowData => this.setState({ rowData }))
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

      ]
     
    }
  }

  render() {
    return (
      <div
        className="ag-theme-material"
      >
        <AgGridReact
          columnDefs={this.state.columnDefs}
          rowData={this.state.rowData}>
        </AgGridReact>
      </div>
    );
  }
}
export default ListCustomer;