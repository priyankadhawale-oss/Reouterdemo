import { BrowserRouter } from 'react-router-dom';

import './App.css';
import Myapp from './Component/Myapp';

function App() {
  return (
    <div className="App">
      <h2>I am in app component</h2>
      <BrowserRouter>
      <Myapp/>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
