import { Form, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import DetailsItem from "./pages/Marketplace/children/DetailsItem";
import Marketplace from "./pages/Marketplace/Marketplace";
import MarketplaceMain from "./pages/Marketplace/Main/MarketplaceMain";
import SellTanah from "./components/MarketComponents/FormPages/SellTanah"
function App() {
  return (
    <div className="App bg-white font-poppins">
      <Navbar />
      <br />
      <br />
      <br />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/marketplace" element={<MarketplaceMain />} />
        <Route path="/marketplace/catalog" element={<Marketplace />} />
        <Route path="/marketplace/catalog/:id" element={<DetailsItem />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/sell" element={<SellTanah/>}/>
      </Routes>
      <Footer />
    </div> 
  );
}

export default App;
