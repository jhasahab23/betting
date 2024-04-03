import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import Navbar from './components/Navbar';
import RegistrationPage from "./pages/RegistrationPage"
import ActivityPage from './pages/ActivityPage';
import WalletPage from './pages/WalletPage';


function App() {
  return (
    <>
      <BrowserRouter basename='/online-gaming'>
        <Navbar/>
        <Routes>
            <Route exact path='/' element={<HomePage/>}/>
            <Route exact path='/activity' element={<ActivityPage/>}/>
            <Route exact path='/wallet' element={<WalletPage/>}/>
            <Route exact path='/registration' element={<RegistrationPage/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
