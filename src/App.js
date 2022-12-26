import './App.css';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import MyNavBar from './components/Navbar';
import Home from './pages/home';

function App() {
  return (
    <BrowserRouter>
      <MyNavBar/>
      <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
