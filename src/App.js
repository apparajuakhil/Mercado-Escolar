import logo from './logo.svg';
import './App.css';
import Login from './components/Login/Login';
import Admin from './components/Admin/Admin';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import AdminQueries from './components/Admin/AdminQueries';
import AdminSchools from './components/Admin/AdminSchools';
import AdminUsers from './components/Admin/AdminUsers';
import AdminInsights from './components/Admin/AdminInsights';
import EditForm from './components/widgets/EditForm';
import AddForm from './components/widgets/AddForm';
import Register from './components/Register/Register';
import Product from './components/Product/Product';
import StudentDashboard from './components/Dashboard/StudentDashboard';
import Content from './components/Content/Content';
import Club from './components/Clubs/Club';
import Profile from './components/Profile/Profile';
import Contact from './components/Contact/Contact';
import About from './components/About/About';
import Services from './components/Services/Services';
import Home from './components/Home/Home';
import Cart from './components/Cart/Cart';
import OtherProfile from './components/Profile/OtherProfile';
import Ads from './components/Ads/Ads';
import Chat from './components/Chat/Chat';
import SchoolAdmin from './components/Admin/SchoolAdmin';
import SchoolAdminUsers from './components/Admin/SchoolAdminUsers';
import SchoolAdminClub from './components/Clubs/SchoolAdminClub';
import SchoolAdminContent from './components/Content/SchoolAdminContent';
import BusinessUser from './components/Admin/BusinessUser';
import BusinessProducts from './components/Product/BusinessProducts';
import BusinessAds from './components/Ads/BusinessAds';
import BusinessChat from './components/Chat/BusinessChat';
import SchoolAdminChat from './components/Chat/SchoolAdminChat';
import ResetPasswordForm from './components/widgets/ResetPasswordForm';
import ContentForm from './components/widgets/ContentForm';
import EditProfileForm from './components/widgets/EditProfileForm';
import CreateClub from './components/widgets/CreateClub';
import AddProduct from './components/widgets/AddProduct';
import AdvertisementForm from './components/widgets/AdvertisementForm';

function App() {
  return (
    <Router>
        <Routes>
          {/* <Route exact path="/mybookings" element={<Bookings/>}/> */}
          <Route exact path="/superadmin/queries" element={<AdminQueries/>}/>
          {/* <Route exact path="/admin/users/:hotelId" element={<AdminRoom/>}/> */}
          {/* <Route exact path="/admin/hotels/:hotelId/rooms/:roomId" element={<AdminEditRoom/>}/> */}
          <Route exact path="/superadmin/schools" element={<AdminSchools/>}/>
          <Route exact path="/superadmin/users" element={<AdminUsers/>}/>
          <Route exact path="/schooladmin/users" element={<SchoolAdminUsers/>}/>
          <Route exact path="/superadmin/insights" element={<AdminInsights/>}/>
          {/* <Route exact path="/booking/:id" element={<Booking/>}/>
          <Route exact path="/contact" element={<Contact/>}/>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/editBooking/:id" element={<RoomOverviewEdit/>}/>
          <Route exact path="/newbooking/:id" element={<RoomOverview/>}/>
          <Route exact path="/hotels/:id/rooms" element={<Rooms/>}/>
          <Route exact path="/hotels" element={<Hotels/>}/>
          
          <Route exact path="/profile" element={<Profile/>}/>*/}
          <Route exact path="/superadmin" element={<AdminInsights/>}/>
          <Route exact path="/schooladmin" element={<SchoolAdmin/>}/>
          <Route exact path="/business/dashboard" element={<BusinessUser/>}/>
          {/* <Admin/>}/>  */}
          <Route exact path="/superadmin/schools/edit/:a" element={<EditForm/>}/> 
          <Route exact path="/superadmin/schools/add/:a" element={<AddForm/>}/> 
          <Route exact path="/schooladmin/users/edit/:a" element={<AddForm/>}/> 
          <Route exact path="/superadmin/users/edit/:a" element={<AddForm/>}/> 
          <Route exact path="/superadmin/users/add/:a" element={<AddForm/>}/> 
          <Route exact path="/login" element={<Login/>}/>
          <Route exact path="/register" element={<Register/>}/>
          <Route exact path="/student/products" element={<Product/>}/>
          <Route exact path="/business/products" element={<BusinessProducts/>}/>
          <Route exact path="/business/products/add/:a" element={<AddProduct/>}/>
          <Route exact path="/business/products/update/:a" element={<AddProduct/>}/>
          <Route exact path="/student/products/add/:a" element={<AddProduct/>}/>
          <Route exact path="/student/products/update/:a" element={<AddProduct/>}/>
          <Route exact path="/dashboard" element={<StudentDashboard/>}/>          
          <Route exact path="/student/content" element={<Content/>}/>          
          <Route exact path="/schooladmin/content" element={<SchoolAdminContent/>}/>          
          <Route exact path="/schooladmin/content/update/:a" element={<ContentForm/>}/>          
          <Route exact path="/student/content/add/:a" element={<ContentForm/>}/>          
          <Route exact path="/student/clubs" element={<Club/>}/>          
          <Route exact path="/schooladmin/clubs" element={<SchoolAdminClub/>}/>          
          <Route exact path="/student/ads" element={<Ads/>}/>          
          <Route exact path="/business/ads" element={<BusinessAds/>}/>          
          <Route exact path="/business/ads/add/:a" element={<AdvertisementForm/>}/>          
          <Route exact path="/business/ads/update/:a" element={<AdvertisementForm/>}/>          
          <Route exact path="/student/clubs/add/:a" element={<CreateClub/>}/>          
          <Route exact path="/student/clubs/update/:a" element={<CreateClub/>}/>          
          <Route exact path="/student/profile" element={<Profile/>}/>  
          <Route exact path="/student/editprofile/:a" element={<EditProfileForm/>}/>  
          <Route exact path="/student/users" element={<OtherProfile/>}/>  
          <Route exact path="/contact" element={<Contact/>}/> 
          <Route exact path="/about" element={<About/>}/>  
          <Route exact path="/services" element={<Services/>}/>     
          <Route exact path="/" element={<Home/>}/>     
          <Route exact path="/cart" element={<Cart/>}/> 
          <Route exact path="/chat" element={<Chat/>}/> 
          <Route exact path="/business/chat" element={<BusinessChat/>}/>
          <Route exact path="/schooladmin/chat" element={<SchoolAdminChat/>}/>
          <Route exact path="/resetpassword" element={<ResetPasswordForm/>}/> 
        </Routes>
    </Router>
  );
}

export default App;
