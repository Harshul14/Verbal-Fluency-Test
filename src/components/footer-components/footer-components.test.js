import React from 'react';
import ReactDOM from 'react-dom';
import FooterComponents from './FooterComponents';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<FooterComponents />, div);
  ReactDOM.unmountComponentAtNode(div);
});