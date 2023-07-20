import logo from './logo.svg';
import './App.css';
import { Navbar } from './components/Navbar';
import {Routes,Route} from "react-router-dom"
import { Login } from './pages/Login';


function App() {
  return (
    <>
    <Routes>
      <Route path="/login" element={<Login/>}/>
      <Route path="/" element={<Navbar/>}/>
    </Routes>
  
    </>
  );
}

export default App;
