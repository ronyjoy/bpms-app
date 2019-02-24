import React, { Component } from "react";

import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-material.css";
import axios from "axios";
import { connect } from "react-redux";
import { fetchCustomer } from "../../actions/customerActions";

class ListCustomer extends Component {
  componentDidMount() {
    this.props.dispatch(fetchCustomer());
  }

  onCellValueChanged = item => {
    console.log(item);
    item.newOrModified = "Modified";
  };

  constructor(props) {
    super(props);

    this.state = {
      columnDefs: [
        {
          headerName: "Customer Name",
          field: "customername",
          sortable: true,
          filter: "agTextColumnFilter"
        },
        {
          headerName: "Contact Person",
          field: "contactperson",
          sortable: true,
          filter: "agTextColumnFilter"
        },
        { headerName: "Email", field: "email", filter: "agTextColumnFilter" },
        { headerName: "Phone", field: "phone", filter: "agTextColumnFilter" },
        { headerName: "Address", field: "address" },
        { headerName: "Status", field: "status" }
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
    };
  }

  onRowValueChanged = params => {
    console.log(params.data);
    axios
      .put("/api/customer/" + params.data._id, params.data)
      .then(function(response) {
        // handle success
        console.log("update success" + response);
      })
      .catch(function(error) {
        // handle error
        console.log(error);
      })
      .then(function() {
        // always executed
      });
  };

  render() {
    const { loading, error, customers } = this.props;
    console.log(loading);
    if (loading) {
      return <div>Loading...</div>;
    }
    if (error) {
      return <div>Error! {error.message}</div>;
    }
    if (!loading) {
      return (
        <div className="ag-theme-material">
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
            paginationPageSize={this.state.paginationPageSize}
            onGridReady={this.onGridReady}
            onRowValueChanged={this.onRowValueChanged}
            rowData={customers}
          />
        </div>
      );
    }
  }
}

const mapStateToProps = state => ({
  loading: state.customer.loading,
  customers: state.customer.data,
  error: state.customer.error
});

export default connect(mapStateToProps)(ListCustomer);
