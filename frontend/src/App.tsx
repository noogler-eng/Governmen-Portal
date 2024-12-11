import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/others/About";
import Terms from "./pages/others/Terms";
import AddAdmin from "./pages/others/AddAdmin";
import StudentDetail from "./pages/students/StudentDetail";
import VerifyStudent from "./pages/students/VerifyStudent";
import UpdateStudent from "./pages/students/UpdateStudent";
import Fellowship from "./pages/others/Fellowship";
import Training from "./pages/others/Training";
import BrowseStudent from "./pages/students/BrowseStudent";
import BrowseCollege from "./pages/colleges/BrowseCollege";
import RegisterStudent from "./pages/students/RegisterStudent";
import RegisterCollege from "./pages/colleges/RegisterCollege";
import Contact from "./pages/others/Contact";
import VerifyStudentDetails from "./pages/students/VerifyStudentDetails";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/terms" element={<Terms />} />

          <Route path="/browse/students" element={<BrowseStudent />} />
          <Route path="/browse/students/:id" element={<StudentDetail />} />
          <Route path="/browse/colleges" element={<BrowseCollege />} />
          <Route path="/browse/verify" element={<VerifyStudent />} />
          <Route path="/browse/verify/:id" element={<VerifyStudentDetails />} />
          <Route path="/browse/add-admin" element={<AddAdmin />} />
          <Route path="/update/:id" element={<UpdateStudent />} />

          <Route path="/register/students" element={<RegisterStudent />} />
          <Route path="/register/colleges" element={<RegisterCollege />} />

          <Route path="/others/contact" element={<Contact />} />
          <Route path="/others/fellowships" element={<Fellowship />} />
          <Route path="/others/training" element={<Training />} />
        </Routes>
      </BrowserRouter>
      <Toaster />
    </div>
  );
}

export default App;
