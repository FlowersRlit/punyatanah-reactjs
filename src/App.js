import { Form, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import DetailsItem from "./pages/Marketplace/MarketplaceDetails/DetailsItem";
import Marketplace from "./pages/Marketplace/MarketplaceCatalog/Marketplace";
import LoginRegister from "./pages/LoginRegister/LoginRegister";
import MarketplaceSearch from "./pages/Marketplace/MarketplaceSearch/MarketplaceSearch";

function App() {
  return (
    <div className="App bg-white font-poppins">
      <Navbar />
      <br />
      <br />
      <br />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/marketplace" element={<MarketplaceSearch />} />
        <Route path="/marketplace/catalog" element={<Marketplace />} />
        <Route path="/marketplace/catalog/:id" element={<DetailsItem />} />
        <Route path="/member/:todo" element={ <LoginRegister /> } />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
