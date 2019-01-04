import React, { Component } from "react";
import { connect } from 'react-redux';
import axios from "axios";

class Enquiry extends Component {

    constructor() {
        super();
        this.state = {
            enq_id: '',
            enq_date: '', 
            enq_details: '',
            customer_id: '',
            contact_id: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const id = target.id;

        this.setState ({
            [id]: value
        });
    }

    handleSubmit(event) {
        console.log(this.state);
        axios.post("/api/enquiry", this.state);
        event.preventDefault();
    }

    render() {
        return (
           <div style={{marginLeft: 30 + 'em', marginTop: 5 + 'em', marginRight: 15 + 'em'}} > 
                <form onSubmit={this.handleSubmit}>
                    <span>Enquiry Id: </span><input id="enq_id" onChange={this.handleChange}></input>
                    <span>Enquiry Date: </span><input id="enq_date" onChange={this.handleChange}></input>
                    <span>Enquiry Details: </span><input id="enq_details" onChange={this.handleChange}></input>
                    <span>Customer: </span><input id="customer_id" onChange={this.handleChange}></input>
                    <span>Contact Person: </span><input id="contact_id" onChange={this.handleChange}></input>
                    <input type="submit" value="Submit" />
                </form>
           </div>
        );
    }
}

function mapStateToProps({ auth }) {
    return { auth };
}

export default connect(mapStateToProps)(Enquiry);