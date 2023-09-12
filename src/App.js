import './App.css';
import Header from './Header/Header.js';
import HomePage from './HomePage.js';
import SecretPage from './SecretPage/SecretPage.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header/>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path="/MLE-Secret-Link" element={<SecretPage/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
