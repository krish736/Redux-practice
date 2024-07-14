import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Bag from "./components/Bag.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bag" element={<Bag />} />
        </Routes>
      <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
