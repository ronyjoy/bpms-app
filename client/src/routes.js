import React from 'react';
import DefaultLayout from './containers/DefaultLayout';

const AddCustomer = React.lazy(() => import('./views/Customer/AddCustomer'));
const Dashboard = React.lazy(() => import('./views/Dashboard'));


const routes = [
  { path: '/', exact: true, name: 'Home', component: DefaultLayout },
  { path: '/dashboard/addcustomer', name: 'Add Customer', component: AddCustomer },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard }
];

export default routes;
