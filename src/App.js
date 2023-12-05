import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import ContactUsPage from "./pages/contactUsPage";
import DetailOlahBahanPage from "./pages/detailOlahBahanPage";
import ModulOlahBahanPage from "./pages/olahBahanPage";
import AktitasPage from "./pages/aktivitasPage";
import BelanjaPages from "./pages/belanjaPage";
import "./style/page.css";
import "./style/navbar.css";
import "./style/belanja.css";
import "./style/olahBahan.css";
import "./style/contactUs.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ModulOlahBahanPage />}></Route>
        <Route path="/modulOlahBahan" element={<ModulOlahBahanPage />}></Route>
        <Route
          path="/modulOlahBahan/:id"
          element={<DetailOlahBahanPage />}
        ></Route>
        <Route path="/contactUs" element={<ContactUsPage />}></Route>
        <Route path="/BelanjaPages" element={<BelanjaPages />}></Route>
        <Route path="/aktivitas" element={<AktitasPage />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
