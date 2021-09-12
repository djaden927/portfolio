import logo from './logo.svg';
import './App.css';

function App() {


let initialDate = new Date(2019, 7, 29);
let now = Date.now();
let difference = now - initialDate;
let millisecondsPerDay = 24 * 60 * 60 * 1000;
let daysSince = Math.floor(difference / millisecondsPerDay);

  return (
    <div className="App">
        <p>
          {daysSince} days since Utah has beat BYU
        </p>
    </div>
  );
}

export default App;
