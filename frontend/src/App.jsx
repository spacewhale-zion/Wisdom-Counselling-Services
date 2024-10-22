import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Pages/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Copyright from './Components/Footer/Copyright';
import Service from './Pages/Service/Service';
import ContactUs from './Components/ContactUs/ContactUs';
import Topheader from './Components/Topheader/Topheader';
import AboutUs from './Pages/AboutUs/AboutUs';
import ArticleDetails from './Pages/ArticleDetails/ArticleDetails';
import Blogs from './Pages/Blogs/Blogs';
import Contact from './Pages/ContactUs/Contact';


function App() {
  return (

    <>
    <Topheader/>
    <Navbar/> 
    <Router>
      <Routes>
 
        <Route path="/" element={<Home />} />
        <Route path="/service" element={<Service />} />
        <Route path="/about" element={<AboutUs/>} />
        <Route path="/article" element={<ArticleDetails/>} />
        <Route path="/blogs" element={<Blogs/>} />
        <Route path="/contact" element={<Contact/>} />





      </Routes>
    </Router>
    <ContactUs/>
    <Footer/>
     <Copyright/> 
    </>
  );
}

export default App;
