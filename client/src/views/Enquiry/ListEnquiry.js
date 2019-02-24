import React, { Component } from 'react';

import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-material.css";
import axios from 'axios';
import { connect } from "react-redux";
import { fetchEnquries } from "../../actions/enquiryActions";

class ListEnquiry extends Component {

  componentDidMount() {
    this.props.dispatch(fetchEnquries());
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
        { headerName: "Customer", field: "customername" ,sortable: true,filter: "agTextColumnFilter"},
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
    const { loading, error, enquiries } = this.props;
    
    if (loading) {
      return <div>Loading...</div>;
    }
    if (error) {
      return <div>Error! {error.message}</div>;
    }
    if (!loading) {
    return (
      <div
        className="ag-theme-material"
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
            rowData={enquiries}
          />
      </div>
    );
    }
  }
}

const mapStateToProps = state => ({
  loading: state.listenquiry.loading,
  enquiries: state.listenquiry.data,
  error: state.listenquiry.error
});

export default connect(mapStateToProps)(ListEnquiry);