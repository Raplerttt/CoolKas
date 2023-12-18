import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import ContactUsPage from "./pages/ContactUsPage";
import AboutUsPage from "./pages/AboutUsPage";
import DetailOlahBahanPage from "./pages/DetailOlahBahanPage";
import ModulOlahBahanPage from "./pages/OlahBahanPage";
import DetailPenyimpananPage from "./pages/DetailPenyimpananPage";
import PenyimpananPage from "./pages/PenyimpananPage";
import DetailResepPage from "./pages/DetailResepPage";
import ModulResepPage from "./pages/ResepPage";
import AktitasPage from "./pages/AktivitasPage";
import BelanjaPages from "./pages/BelanjaPage";
import DashboardPage from "./pages/DashboardPage";
import AccountPage from "./pages/AkunPage";
import EditAccountPage from "./pages/EditAkunPage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import ForgetPassPage from "./pages/ForgetPassPage";
import "./style/page.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/register" element={<RegisterPage />}></Route>
        <Route path="/Dashboard" element={<DashboardPage />}></Route>
        <Route path="/forgetPass" element={<ForgetPassPage />}></Route>
        <Route path="/penyimpanan" element={<PenyimpananPage />}></Route>
        <Route
          path="/detailPenyimpanan/:id"
          element={<DetailPenyimpananPage />}
        ></Route>
        <Route path="/modulOlahBahan" element={<ModulOlahBahanPage />}></Route>
        <Route
          path="/modulOlahBahan/:id"
          element={<DetailOlahBahanPage />}
        ></Route>
        <Route path="/modulResep" element={<ModulResepPage />}></Route>
        <Route path="/modulResep/detail" element={<DetailResepPage />}></Route>
        <Route path="/aboutUs" element={<AboutUsPage />}></Route>
        <Route path="/contactUs" element={<ContactUsPage />}></Route>
        <Route path="/akun" element={<AccountPage />}></Route>
        <Route path="/editAkun" element={<EditAccountPage />}></Route>
        <Route path="/belanja" element={<BelanjaPages />}></Route>
        <Route path="/aktivitas" element={<AktitasPage />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
