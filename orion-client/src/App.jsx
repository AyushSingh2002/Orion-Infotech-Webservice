import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Header from "./components/Header";
import Labels from "./pages/Labels";
import BarcodePrinters from "./pages/BarcodePrinters";
import BarcodeScanners from "./pages/BarcodeScanners";
export default function App() {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products/labels" element={<Labels />} />
        <Route path="/products/barcode-printers" element={<BarcodePrinters />} />
        <Route path="/products/barcode-scanners" element={<BarcodeScanners />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}
