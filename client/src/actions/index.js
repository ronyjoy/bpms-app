import axios from 'axios';
import { FETCH_USER,FETCH_CUSTOMER, ADD_CUSTOMER } from './types';

export const fetchUser = () => async (dispatch) => {
    const res = await axios.get('/api/current_user');
    console.log(res.data);
    dispatch({ type: FETCH_USER, payload: res.data });
    
};
export const fetchCustomer = () => async (dispatch) => {
    const res = await axios.get('/api/customer');
    console.log(res.data);
    dispatch({ type: FETCH_CUSTOMER, payload: res.data });
};
export const addCustomer = (values) => async (dispatch) => {
    const res = await axios.post('/api/customer',values);
    console.log(res.data);
    dispatch({ type: ADD_CUSTOMER, payload: res.data });

};

