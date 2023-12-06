import Navbar from "../components/navbarComponent";
import EditAccount from "../components/editAccount";
function EditAccountPage() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <h1 className="text-center ">Aktivitas</h1>
        <EditAccount />
      </div>
    </div>
  );
}

export default EditAccountPage;
