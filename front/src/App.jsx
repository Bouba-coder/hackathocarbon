import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/Navbar";
import Home from "./pages/Home";
import NoPage from "./pages/NoPage";
import Login from "./pages/Login";
import Contact from "./pages/Contact";
import DashboardRH from "./pages/DashboardRH";
import DashboardConsultant from "./pages/DashboardConsultant";

export default function App() {
  return (
    <BrowserRouter>
      {<NavBar />}
      <Routes>
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="contact" element={<Contact />} />
        <Route path="dashboard" element={<DashboardRH />} />
        <Route path="consultant" element={<DashboardConsultant />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
