import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import ContactUsPage from "./pages/contactUsPage";
import AboutUsPage from "./pages/aboutUsPage";
import DetailOlahBahanPage from "./pages/detailOlahBahanPage";
import ModulOlahBahanPage from "./pages/olahBahanPage";
import DetailPenyimpananPage from "./pages/detailPenyimpananPage";
import PenyimpananPage from "./pages/PenyimpananPage";
import DetailResepPage from "./pages/detailResepPage";
import ModulResepPage from "./pages/ResepPage";
import AktitasPage from "./pages/aktivitasPage";
import BelanjaPages from "./pages/belanjaPage";
import DashboardPage from "./pages/dashboardPage";
import AccountPage from "./pages/akunPage";
import EditAccountPage from "./pages/editAkunPage";
import RegisterPage from "./pages/registerPage";
import LoginPage from "./pages/loginPage";
import ForgetPassPage from "./pages/forgetPassPage";
import "./style/page.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DashboardPage />}></Route>
        <Route path="/register" element={<RegisterPage />}></Route>
        <Route path="/forgetPass" element={<ForgetPassPage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
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
        <Route path="/modulResep/:id" element={<DetailResepPage />}></Route>
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
