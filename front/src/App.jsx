import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import { themeNav } from "./components/Theme";
import NavBar from "./components/Navbar";
import Home from "./pages/Home";
import NoPage from "./pages/NoPage";
import Login from "./pages/Login";
import Contact from "./pages/Contact";
import DashboardConsultant from "./pages/DashboardConsultant";
import Forum from "./components/Consultant/Forum";
import { Entreprise } from "./pages/entreprise/Index";
import { User } from "./pages/user/Index";
import { Formation } from "./pages/formation/Index";
import { DashConsultant } from "./pages/consultant/Index";
import NotAutorize from "./pages/NotAutorize";
import { Dashboard } from "./pages/dashboard/Index";

export default function App() {
  const user = localStorage.getItem("role");

  //console.log('MySuperuser', user);

  return (
    <ThemeProvider theme={themeNav}>
          <BrowserRouter>
      {<NavBar />}
      <Routes>
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="contact" element={<Contact />} />
        <Route path="dashboard/*" element={user === "RH" || user === "ADMIN" ? <Dashboard /> : <NotAutorize />} />
        <Route path="consultant/*" element={user === "CONSULTANT" ? <DashConsultant /> : <NotAutorize />} />
        <Route path="entreprises/*" element={user === "RH" || user === "ADMIN" ? <Entreprise /> : <NotAutorize />} />
        <Route path="users/*" element={user === "RH" || user === "ADMIN" ? <User /> : <NotAutorize />} />
        <Route path="formations/*" element={user === "RH" || user === "ADMIN" ? <Formation /> : <NotAutorize />} />
        <Route path="consultants/*" element={user === "RH" || user === "ADMIN" ? <DashConsultant /> : <NotAutorize />} />
        <Route path="*" element={<NoPage />} />
        <Route path="/notauthorize" element={<NotAutorize />} />
      </Routes>
    </BrowserRouter>
    </ThemeProvider>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
