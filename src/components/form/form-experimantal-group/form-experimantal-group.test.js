import React from 'react';
import ReactDOM from 'react-dom';
import FormExperimantalGroup from './FormExperimantalGroup';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<FormExperimantalGroup />, div);
  ReactDOM.unmountComponentAtNode(div);
});