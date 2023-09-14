// import logo from './logo.svg';
import './App.css';
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Navbar from './Components/Navbar';
import {BrowserRouter,Routes,Route,Link,Switch} from 'react-router-dom';
import HomeScreen from './Screens/HomeScreen';
import CartScreen from './Screens/CartScreen';
import LoginScreen from './Screens/LoginScreen';
import RegisterScreen from './Screens/RegisterScreen';
import 'bootstrap'
function App() {
  return ( 
    <div className="App">
      <Navbar/>
      <BrowserRouter>
       <Routes>

       <Route path="/" exact element={<HomeScreen/>}></Route>
       <Route path="/cart" exact element={<CartScreen/>}></Route>
       <Route path="/login" exact element={<LoginScreen/>}></Route>
       <Route path="/register" exact element={<RegisterScreen/>}></Route>
        </Routes>

      </BrowserRouter>
      
    </div>
  );
}

export default App;
