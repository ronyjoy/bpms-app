import React from 'react';
import ReactDOM from 'react-dom';
import Page401 from './Page401';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Page401 />, div);
  ReactDOM.unmountComponentAtNode(div);
});
