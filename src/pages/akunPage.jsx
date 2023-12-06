import Navbar from "../components/navbarComponent";
import Account from "../components/account";
function AccountPage() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <h1 className="text-center ">Aktivitas</h1>
        <Account />
      </div>
    </div>
  );
}

export default AccountPage;
