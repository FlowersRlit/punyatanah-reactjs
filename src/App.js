import { Form, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import LogIn from "./pages/LogIn";
import Register from "./pages/Register";
import Marketplace from "./pages/Marketplace";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SpesefikasiTanah from "./components/SpesefikasiTanah";


function App() {
<<<<<<< HEAD
	return (
		<div className="App bg-white font-poppins">
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/marketplace" element={<Marketplace />} />
				{/* <Route path="/marketplace/:id" element={< />} /> */}
				<Route path="/login" element={<LogIn />} />
				<Route path="/register" element={<Register />} />
			</Routes>
			<Footer />
		</div>
	);
=======
  return (
    <div className="App font-poppins">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/marketplace" element={<Marketplace />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <Footer />
    </div>
  );
>>>>>>> diva
}

export default App;
