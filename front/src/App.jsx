import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import { themeNav } from "./components/Theme";
import NavBar from "./components/Navbar";
import Home from "./pages/Home";
import NoPage from "./pages/NoPage";
import Login from "./pages/Login";
import Contact from "./pages/Contact";
import DashboardRH from "./pages/DashboardRH";
import DashboardConsultant from "./pages/DashboardConsultant";
import CreateConsultant from "./pages/consultant/Create";
import UpdateConsultant from "./pages/consultant/Update";
import useAuth from "./hooks/useAuth";
import Forum from "./components/Consultant/Forum";

export default function App() {
  useAuth();
  
  return (
    <ThemeProvider theme={themeNav}>
          <BrowserRouter>
      {<NavBar />}
      <Routes>
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="contact" element={<Contact />} />
        <Route path="dashboard" element={<DashboardRH />} />
        <Route path="consultant" element={<DashboardConsultant />} />
        <Route path="consultant/create" element={<CreateConsultant />} />
        <Route path="consultant/update" element={<UpdateConsultant />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
    </ThemeProvider>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
