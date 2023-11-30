import React from 'react';
import ReactDOM from 'react-dom';
import Output from './Output';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Output />, div);
  ReactDOM.unmountComponentAtNode(div);
});