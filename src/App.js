import {BrowserRouter, Route} from 'react-router-dom'

import './App.css';
import Home from './component/Home';

function App() {
  return (
    <BrowserRouter className="App">
      <Home/>
    </BrowserRouter>
  );
}

export default App;
