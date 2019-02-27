import React from 'react';
import DefaultLayout from './containers/DefaultLayout';

const AddCustomer = React.lazy(() => import('./views/Customer/AddCustomer'));
const ListCustomer = React.lazy(() => import('./views/Customer/ListCustomer'));
const AddEnquiry = React.lazy(() => import('./views/Enquiry/AddEnquiry'));
const ListEnquiry = React.lazy(() => import('./views/Enquiry/ListEnquiry'));
const Dashboard = React.lazy(() => import('./views/Dashboard'));
const Page404 = React.lazy(() => import('./views/Pages/Page404'));
const Page401 = React.lazy(() => import('./views/Pages/Page401'));


const routes = [
  { path: '/', exact: true, name: 'Home', component: DefaultLayout },
  { path: '/dashboard/addcustomer', name: 'Add Customer', component: AddCustomer },
  { path: '/dashboard/customers', name: 'List Customer', component: ListCustomer },
  { path: '/dashboard/addenquiry', name: 'Add Enquiry', component: AddEnquiry },
  { path: '/dashboard/enquiries', name: 'List Enquiry', component: ListEnquiry },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/404', name: 'Page404', component: Page404 },
  { path: '/401', name: 'Page401', component: Page401 }
];

export default routes;
