import logo from './logo.svg';
import './App.css';
import Counter from './Counter/Counter';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Counter></Counter>
      </header>
      
    </div>
  );
}

export default App;
