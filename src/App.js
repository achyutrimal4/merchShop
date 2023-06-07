import Header from "./components/Header";
import './index.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import ShopAllScreen from "./screens/ShopAllScreen";
import EssentialScreen from "./screens/EssentialScreen";
import AboutScreen from "./screens/AboutScreen";
import ContactScreen from "./screens/ContactScreen";
import FaqScreen from "./screens/FaqScreen";

function App() {
  return (
    <BrowserRouter>
      <div className="canvas">
        <div className="container">
          <Header />
          <Routes>
            <Route path='/' exact element={<HomeScreen/>}/>
            <Route path='/shop' element={<ShopAllScreen/>}/>
            <Route path='/essentials' element={<EssentialScreen/>}/>
            <Route path='/about' element={<AboutScreen/>}/>
            <Route path='/faq' element={<FaqScreen/>}/>
            <Route path='/contact' element={<ContactScreen/>}/>
          </Routes>
        </div>
      </div>

    </BrowserRouter>
  );
}

export default App;
