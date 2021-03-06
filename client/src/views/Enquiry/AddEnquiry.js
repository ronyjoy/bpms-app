import {
  message,Form, Select, Input, Button,DatePicker,TimePicker,AutoComplete,Slider,Radio,Icon
} from 'antd';
import React from 'react';
import { connect } from 'react-redux';
import {addEnquiry} from '../../actions/enquiryActions'
import {fetchCustomerNames} from '../../actions/customerActions'
import 'antd/dist/antd.css';


const { TextArea } = Input;
const { MonthPicker, RangePicker } = DatePicker;



class AddEnquiry extends React.Component {

  
  
  componentDidMount() {
    this.props.dispatch(fetchCustomerNames());
	}
	
	saveEnquiry(data) {
    this.props.dispatch(addEnquiry(data))
	}
  
  
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        this.props.dispatch(addEnquiry(values))
      }
    });
  }
  
  render() {
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 5 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 12 },
      },
    };
    
    let dataSource = ['loading data'];
		const { getFieldDecorator } = this.props.form;
    const { customerNames, customerLoading,addEnquiryProcessing, enquiryadded,addEnquiryError } = this.props;
    if(!customerLoading) {
      dataSource = customerNames;
    }
	
    return (
      <Form layout="vertical"  onSubmit={this.handleSubmit}>
      	<Form.Item label="Time Received" {...formItemLayout} >
				{getFieldDecorator('enq_time', {rules: [{ required: true, message: 'Enquiry time' }],})(
            <TimePicker />
          )}
				</Form.Item>
        <Form.Item  {...formItemLayout}  label="Enquiry Recd/Exp Date" >
          {getFieldDecorator('enq_date', {rules: [{ type: 'array', required: true, message: 'Select the enq recd and exp date!' }],})(
            <RangePicker />
          )}
        </Form.Item>
		   <Form.Item label="Customer" {...formItemLayout} >
					{getFieldDecorator('customer', {rules: [{ required: true, message: 'Customer!' }],})(
            <AutoComplete
							className="global-search"
							style={{ width: 200 }}
							dataSource={dataSource}
							placeholder="search customer"
							filterOption={(inputValue, option) => option.props.children.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1}
						>
						<Input suffix={<Icon type="search" className="certain-category-icon" />} />
					</AutoComplete>
						
					)}
        </Form.Item>
        <Form.Item label="Customer Contact" {...formItemLayout}>
          {getFieldDecorator('contactPerson', {rules: [{ required: true, message: 'Contact Person' }],})(
            <Input />
          )}
        </Form.Item>
        <Form.Item label="Customer Contact Phone" {...formItemLayout}>
          {getFieldDecorator('contactPhone', {rules: [{ required: true, message: 'Contact Person Phone' }],})(
            <Input />
          )}
        </Form.Item>
        <Form.Item label="Customer Contact email" {...formItemLayout}>
          {getFieldDecorator('contactEmail', {rules: [{ required: true, message: 'Customer Contact Email' }],})(
            <Input />
          )}
        </Form.Item>
        <Form.Item label="Description" {...formItemLayout}>
          {getFieldDecorator('description', {rules: [{ required: true, message: 'Enquiry Description' }],})(
            <TextArea rows={4} />
          )}
        </Form.Item>
				<Form.Item label="Enquiry Priority" {...formItemLayout} >
          {getFieldDecorator('priority')(
            <Radio.Group initialValue="c" buttonStyle="solid">
						<Radio.Button value="LOW">LOW</Radio.Button>
						<Radio.Button value="MED">MED</Radio.Button>
						<Radio.Button value="HIGH">HIGH</Radio.Button>
					</Radio.Group>
          )}
        </Form.Item>
				
        <Form.Item {...formItemLayout}><Button type="primary" htmlType="submit">Submit</Button></Form.Item>
      </Form>
    );
  }
}

const mapStateToProps = state => ({
  addEnquiryProcessing: state.addenquiry.processing,
  enquiryadded: state.addenquiry.data,
	addEnquiryError: state.addenquiry.error,
	customerLoading:state.listcustomernames.processing,
	customerNames:state.listcustomernames.data
});

export default connect(mapStateToProps)(Form.create({ name: 'add-enquiry' })(AddEnquiry));