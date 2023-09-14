import React from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { loginUser, logoutUser } from '../Actions/userAction';
// import { FontAwesomeIcon } from 'fontawesome'
// import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css'

function Navbar() {

  const dispatch = useDispatch();
  const cartState = useSelector((state)=>state.cartReducers);
  const userState = useSelector((state)=>state.loginUserReducer);
  const {currentUser}= userState;
  console.log(currentUser);

  return (
    
        <nav className="navbar navbar-expand-lg bg-light shadow p-3 mb-5 bg-white rounded">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">GaneshPizza</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav navBar">

        {currentUser ? (
          <div className="dropdown mt-2">
          <a className="dropdown-toggle"  style={{color:"black"}} type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            {currentUser.name}
          </a>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a className="dropdown-item" href="#">Orders</a>
            <a className="dropdown-item" href="#" onClick={()=>{dispatch(logoutUser())}}><li>Logout</li></a>
            
          </div>
        </div>
        ):( <li className="nav-item m-1">
          <a className="nav-link" aria-current="page" href="/login">Login</a>
        </li>)}
       
        
        <li className="nav-item">
        {/* <FontAwesomeIcon icon="fa-solid fa-cart-shopping" beatFade /> */}
      
        
          <a className="nav-link" href="/cart">
          Cart <b style={{fontSize:"18px",color:"red"}}>{cartState.cartItems.length}</b>
          <i class="fa-solid fa-cart-shopping fa-beat-fade"></i>
          </a>
      
       
        </li>
        {/* <li className='nav-item mt-2'>
        <i class="fa-solid fa-cart-shopping fa-beat-fade"></i>
        </li> */}
        
      </ul>
    </div>
  </div>
</nav>
    // </div>
  )
}

export default Navbar