import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Terms from "./pages/Terms";
import AddAdmin from "./pages/Browse/AddAdmin";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/terms" element={<Terms />} />

          <Route path="/browse/students" element={<Terms />} />
          <Route path="/browse/students/:id" element={< />} />
          <Route path="/browse/colleges" element={<Terms />} />
          <Route path="/browse/verify" element={<Terms />} />
          <Route path="/browse/verify/:id" element={< />} />
          <Route path='/update/:id' element={< />} />
          <Route path='/browse/add-admin' element={< AddAdmin/>} />

          <Route path="/register/students" element={<Terms />} />
          <Route path="/register/colleges" element={<Terms />} />
          <Route path="/register/verify" element={<Terms />} />

          <Route path='/others/fellowships' element={< />} />
          <Route path='/others/training' element={< />} />
        </Routes>
      </BrowserRouter>
      <Toaster />
    </div>
  );
}

export default App;
