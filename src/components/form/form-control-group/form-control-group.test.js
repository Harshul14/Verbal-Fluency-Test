import React from 'react';
import ReactDOM from 'react-dom';
import FormControlGroup from './FormControlGroup';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<FormControlGroup />, div);
  ReactDOM.unmountComponentAtNode(div);
});