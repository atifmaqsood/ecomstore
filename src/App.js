import './App.css';
import './style.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';

// Components Imorts Below
import Header from './components/Header';
import Signin from './components/Signin';
import Signup from './components/Signup';
import Home from './components/Home';
import Shop from './components/Shop';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Cart from './components/Cart';

// User Component imports below
import UserDashboard from './components/userComponents/UserDashboard';
import UserProfile from './components/userComponents/UserProfile';
import UserWishlist from './components/userComponents/UserWishlist';
import OrderHistory from './components/userComponents/OrderHistory';
import OrderStatus from './components/userComponents/OrderStatus';
import ChangePassword from './components/userComponents/ChangePassword';

// Admin Components Imports Below
import AdminDashboard from './components/adminComponents/AdminDashboard'
import ActiveOrders from './components/adminComponents/ActiveOrders'
import AddProduct from './components/adminComponents/AddProduct'
import ViewOrders from './components/adminComponents/ViewOrders'
import ViewProducts from './components/adminComponents/ViewProducts'
import ViewUsers from './components/adminComponents/ViewUsers'


function App() {
  return (
    <>
    <Header/>
    <Routes>

      {/* Components below */}
      <Route path='/signin' element={<Signin/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/' element={<Home/>}/>
      <Route path='/shop' element={<Shop/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/cart' element={<Cart/>}/>

      {/* User Components below */}   
      <Route exact path='/user/userDashboard' element={<UserDashboard />} />
      <Route path='/user/userProfile' element={<UserProfile/>}/>
      <Route path='/user/userWishlist' element={<UserWishlist/>}/>
      <Route path='/user/orderHistory' element={<OrderHistory/>}/>
      <Route exact path='/user/orderStatus' element={<OrderStatus/>}/>
      <Route path='/user/changePassword' element={<ChangePassword/>}/>

      {/* Admin Components Below */}     
      <Route path='/admin/adminDashboard' element={<AdminDashboard/>} />
      <Route path='/admin/activeOrders' element={<ActiveOrders/>} />
      <Route path='/admin/addProduct' element={<AddProduct/>} />
      <Route path='/admin/viewOrders' element={<ViewOrders/>} />
      <Route path='/admin/viewProducts' element={<ViewProducts/>} />
      <Route path='/admin/viewUsers' element={<ViewUsers/>} />
     

    </Routes>
    <Footer/>
    </>
  );
}

export default App;
