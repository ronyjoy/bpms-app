import React, { Component } from 'react';

import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham.css";
import axios from 'axios';
import { connect } from "react-redux";
import { fetchEnquries } from "../../actions/enquiryActions";
import { Spin } from "antd";

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
        { headerName: "Id", field: "id" ,sortable: true,filter: "agTextColumnFilter"},
        { headerName: "Date", field: "enq_date" ,filter: "agTextColumnFilter"},
        { headerName: "Time", field: "enq_time" ,filter: "agTextColumnFilter"},
        { headerName: "Exp Date", field: "exp_date" ,filter: "agTextColumnFilter"},
        { headerName: "Enquiry Description", field: "description" ,sortable: true,filter: "agTextColumnFilter"},
        { headerName: "Customer", field: "customer" ,sortable: true,filter: "agTextColumnFilter"},
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
    const { processing, error, enquiries } = this.props;
    
    if (processing) {
      return  <Spin size="large" />;
    }
    if (error) {
      return <div>Error! {error.message}</div>;
    }
    if (!processing && !error && enquiries) {
    return (
      <div
        className="ag-theme-balham"
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
  processing: state.listenquiry.processing,
  enquiries: state.listenquiry.data,
  error: state.listenquiry.error
});

export default connect(mapStateToProps)(ListEnquiry);