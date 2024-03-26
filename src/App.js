import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import Navbar from './components/Navbar';
import RegistrationPage from './pages/RegistrationPage';

function App() {
  return (
    <>
      <BrowserRouter basename='/online-gaming'>
        <Navbar/>
        <Routes>
            <Route exact path='/online-gaming' element={<HomePage/>}/>
            <Route path='/registration' element={<RegistrationPage/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
