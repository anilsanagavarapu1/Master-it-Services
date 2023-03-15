import "./App.css";
import Home from "./pages/Home";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Career from "./pages/Career";
import Contact from "./pages/Contact";
// require("./bootstrap");

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        {/* <Home /> */}

        <Routes>
          <Route path="/career" element={<Career />} />
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
