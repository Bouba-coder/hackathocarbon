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
import useAuth from "./hooks/useAuth";
import Forum from "./components/Consultant/Forum";
import { Entreprise } from "./pages/entreprise/Index";
import { User } from "./pages/user/Index";
import { Formation } from "./pages/formation/Index";
import { Consultant } from "./pages/consultant/Index";

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
        <Route path="entreprises/*" element={<Entreprise />} />
        <Route path="users/*" element={<User />} />
        <Route path="formations/*" element={<Formation />} />
        <Route path="consultants/*" element={<Consultant />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
    </ThemeProvider>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
