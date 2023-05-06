import { Form, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import DetailsItem from "./pages/Marketplace/children/DetailsItem";
import Marketplace from "./pages/Marketplace/Marketplace";
import MarketplaceMain from "./pages/Marketplace/Main/MarketplaceMain";
import LoginRegister from "./pages/LoginRegister/LoginRegister";

function App() {
  return (
    <div className="App bg-white font-poppins">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/marketplace" element={<MarketplaceMain/>} />
        <Route path="/marketplace/catalog" element={<Marketplace/>} />
        <Route path="/marketplace/catalog/:id" element={<DetailsItem />} />
        <Route path="/member/:todo" element={ <LoginRegister /> } />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
