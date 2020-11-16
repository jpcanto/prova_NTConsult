import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';

import '@testing-library/jest-dom/extend-expect';

import Main from './Main';
import Routes from '../../routes';

test('Should render mains title', () => {
  render(<Main />);
  const linkElement = screen.getByText(/Who's watching Star-Wars-Flix\?/i);
  expect(linkElement).toBeInTheDocument();
});

test('Should change to films view', () => {
  const history = createMemoryHistory();

  render(<Router history={history}>
    <Routes />
  </Router>)

  let navigation = screen.getByText(/films/i);

  expect(navigation).toBeInTheDocument();
  userEvent.click(navigation, { button: 0 });
  expect(screen.getByRole('films')).toBeInTheDocument();
});

test('Should change to characters view', () => {
  const history = createMemoryHistory();

  render(<Router history={history}>
      <Routes />
    </Router>)

  let navigation = screen.getByText(/characters/i);

  expect(navigation).toBeInTheDocument();
  userEvent.click(navigation, { button: 0 });
  expect(screen.getByRole('characters')).toBeInTheDocument();

});
