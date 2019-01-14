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
      icon: 'icon-puzzle',
      children: [
        {
          name: 'List Customer',
          url: '/customer',
          icon: 'icon-puzzle',
        },
        {
          name: 'Add Customer',
          url: '/dashboard/addcustomer',
          icon: 'icon-puzzle',
        }
     
      ],
    },
    
    
    {
      name: 'Enquiry Mgt',
      url: '/cms',
      icon: 'icon-puzzle',
      children: [
        {
          name: 'List Enquiry',
          url: '/customer',
          icon: 'icon-puzzle',
        },
        {
          name: 'Add Enquiry',
          url: '/base/cards',
          icon: 'icon-puzzle',
        }
     
      ],
    },
   
    {
      name: 'Quote Mgt',
      url: '/cms',
      icon: 'icon-puzzle',
      children: [
        {
          name: 'List Quote',
          url: '/customer',
          icon: 'icon-puzzle',
        },
        {
          name: 'Add Quote',
          url: '/base/cards',
          icon: 'icon-puzzle',
        }
     
      ],
    }
    
    
   
  ],
};
