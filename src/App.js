import Header from "./components/Header";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import ShopAllScreen from "./screens/ShopAllScreen";
import EssentialScreen from "./screens/EssentialScreen";
import AboutScreen from "./screens/AboutScreen";
import ContactScreen from "./screens/ContactScreen";
import FaqScreen from "./screens/FaqScreen";
import AdminScreen from "./screens/AdminScreen";
import AdminLogin from "./screens/AdminLogin";
import Users from "./screens/Users";
import Footer from "./components/Footer";
import ProductDetails from "./screens/ProductDetails";
import ScrollToTop from "./components/ScrollToTop";
import AddProduct from "./screens/AddProduct";

function App() {
  // const {pathname} = useLocation();
  // useEffect(()=>{
  //   window.scrollTo(0,0)
  // }, [pathname])



  return (
    <BrowserRouter>
    <ScrollToTop/>
      <div className="canvas">
        <div className="container">
          <Header />
          <Routes>
            <Route path="/" exact element={<HomeScreen />} />
            <Route path="/shop" element={<ShopAllScreen />} />
            <Route path="/essentials" element={<EssentialScreen />} />
            <Route path="/shop/:id" element={<ProductDetails />} />
            <Route path="/about" element={<AboutScreen />} />
            <Route path="/faq" element={<FaqScreen />} />
            <Route path="/contact" element={<ContactScreen />} />
            <Route path="/admin" element={<AdminScreen />} />
            <Route path="/admin-login" element={<AdminLogin />} />
            <Route path="/users" element={<Users />} />
            <Route path="/add-product" element={<AddProduct/>}/>
            <Route path="/contact" element={<ContactScreen/>}/>
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
