import logo from './logo.svg';
import './App.css';
import RooterComponent from './components/RooterComponent';

import {Outlet}  from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <RooterComponent/>
      <Outlet/>
    </div>
  );
}

export default App;
