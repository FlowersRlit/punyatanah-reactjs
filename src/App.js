import { Form, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import DetailsItem from "./pages/marketplace/children/DetailsItem";
import Marketplace from "./pages/marketplace/Marketplace";
import MarketplaceMain from "./pages/marketplace/Main/MarketplaceMain";

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
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
