import axios from 'axios';
import { FETCH_USER,CHANGE_LOGGED_IN } from './types';

export const fetchUser = () => async (dispatch) => {
    const res = await axios.get('/api/current_user');
    dispatch({ type: FETCH_USER, payload: res.data });

};

export const changeLoggedIn = (newValue) => ({
    type: CHANGE_LOGGED_IN,
    newValue: newValue,
});

