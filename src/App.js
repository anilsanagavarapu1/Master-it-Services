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
<>
  <link rel="stylesheet" type="text/css" href="styles/all.css"></link>
  <link
    rel="stylesheet"
    type="text/css"
    href="styles/owl.carousel.min.css"
  ></link>
  <link rel="stylesheet" type="text/css" href="styles/bootstrap.min.css"></link>
  <link rel="stylesheet" type="text/css" href="styles/style.css"></link>
  <link
    rel="stylesheet"
    type="text/css"
    href="styles/responsive.min.css"
  ></link>
  <link rel="stylesheet" type="text/css" href="styles/aos.css"></link>
  <script src="js/jquery-3.5.1.min.js"></script>
  <script src="js/SmoothScroll.min.js"></script>
  <script src="js/owl.carousel.min.js"></script>
  <script src="js/aos.js"></script>
  <script src="all.custom.min.js"></script>
</>;
export default App;
