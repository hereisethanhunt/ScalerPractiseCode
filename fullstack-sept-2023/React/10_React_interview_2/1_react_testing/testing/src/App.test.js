import { render, screen } from '@testing-library/react';
import App from './App';


// you should test the behaviour of ur application.
describe("app component test case",()=>{
  test('renders learn react link', () => {
    render(<App />);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
  });
  test('renders a href', () => {
    render(<App />);
    expect(screen.getByRole(
      'link', { name: 'Learn React' })
      ).toHaveAttribute('href', 'https://reactjs.org')
  });
})

