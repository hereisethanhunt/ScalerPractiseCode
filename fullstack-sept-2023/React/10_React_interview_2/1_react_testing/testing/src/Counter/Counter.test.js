import { fireEvent, render, screen } from '@testing-library/react';
import Counter from './Counter';


describe("counter component test case",()=>{

  test('initial values using snapshot', () => {
      const {asFragment} = render(<Counter></Counter>);
      expect(asFragment()).toMatchSnapshot();
  });
  
  test('initial state of count', () => {
    render(<Counter></Counter>);
    const increment = screen.getByText('+');
    const count = screen.getByText('Count 0');
    const decrement = screen.getByText('-');
    expect(increment).toBeInTheDocument();
    expect(count).toBeInTheDocument();
    expect(decrement).toBeInTheDocument();

});

test('update state of count by clicking on + button', () => {
  render(<Counter></Counter>);
  const increment = screen.getByText('+');
  fireEvent.click(increment);
  fireEvent.click(increment);
  fireEvent.click(increment);
  const count = screen.getByText('Count 3');
  expect(count).toBeInTheDocument();

});


})

