export default {
  items: [
   
    {
      title: true,
      name: 'Customer',
      wrapper: {
        element: '',
        attributes: {},
      },
    },
    {
      name: 'Customer Mgt',
      url: '/cms',
      icon: 'icon-user',
      children: [
        {
          name: 'List Customer',
          url: '/dashboard/customers',
          icon: 'icon-list',
        },
        {
          name: 'Add Customer',
          url: '/dashboard/addcustomer',
          icon: 'icon-magnifier-add',
        }
     
      ],
    },
    
    
    {
      name: 'Enquiry Mgt',
      url: '/cms',
      icon: 'icon-pencil',
      children: [
        {
          name: 'List Enquiry',
          url: '/customer',
          icon: 'icon-list',
        },
        {
          name: 'Add Enquiry',
          url: '/base/cards',
          icon: 'icon-magnifier-add',
        }
     
      ],
    },
   
    {
      name: 'Quote Mgt',
      url: '/cms',
      icon: 'icon-folder',
      children: [
        {
          name: 'List Quote',
          url: '/customer',
          icon: 'icon-list',
        },
        {
          name: 'Add Quote',
          url: '/base/cards',
          icon: 'icon-magnifier-add',
        }
     
      ],
    }
    
    
   
  ],
};
