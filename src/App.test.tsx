// src/App.test.tsx
import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

// Simulating a render component for testing using React Testing Library

test('renders MyComponent', ()=>{
  const {getByText} = render(<App />);
  const element = getByText(/My Component/i);
  expect(element).toBeInTheDocument();
});

// Simulating a click event on a button using React Testing Librar?

test('button click changes text', ()=>{
  const {getByText} = render(<App />);
  const button = getByText('Click Me');
  fireEvent.click(button);
  const changedText = getByText('You clicked the button');
  expect(changedText).toBeInTheDocument();
});

// Simulating a component receives the correct props?