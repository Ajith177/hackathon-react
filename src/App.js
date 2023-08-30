// import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Login from './Login';
import About from './About';
import Contact from './Contact';
import Home from './Home';
import Cart from './Cart';

const App = () =>{
  return (
    <div className="App">
      {/* <h2 className="text-primary">HELLO REACT</h2> */}
      <Router>
      <Navbar/>
      <Routes>
        <Route path='HOME'element={<Home/>}></Route>
        <Route path='About'element={<About/>}></Route>
        <Route path='Contact'element={<Contact/>}></Route>
        <Route path='Login' element={<Login/>}></Route>
        <Route path='Cart' element={<Cart/>}></Route>
      </Routes>
      </Router>
     
    </div>
  );
}
export default App;
