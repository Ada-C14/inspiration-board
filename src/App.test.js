import React from 'react';
import ReactDOM from 'react-dom';
import '@testing-library/jest-dom'
import { render, screen} from '@testing-library/react'

import App from './App';

describe('App', () => {
  it('renders without crashing', () => {
    const section = document.createElement('section');
    ReactDOM.render(<App />, section);
    ReactDOM.unmountComponentAtNode(section);
  });
});
