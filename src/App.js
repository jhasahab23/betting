import { BrowserRouter, Route, Routes , HashRouter } from 'react-router-dom';
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
            <Route exact path='/' element={<HomePage/>}/>
            <Route path='/registration' element={<RegistrationPage/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
