import React, { Component } from 'react';

import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';




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
        { headerName: "Customer Name", field: "customername" },
        { headerName: "Contact Person", field: "contactperson" },
        { headerName: "Email", field: "email" },
        { headerName: "Phone", field: "phone" },
        { headerName: "Address", field: "address" },
        { headerName: "Status", field: "status" },

      ]
     
    }
  }

  render() {
    return (
      <div
        className="ag-theme-balham"
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