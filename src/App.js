import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import Navbar from './components/Navbar';
import RegistrationPage from './pages/RegistrationPage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/registration' element={<RegistrationPage/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
