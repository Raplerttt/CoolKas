import Navbar from "../components/navbarComponent";
import { useParams } from "react-router-dom";

import '../style/detailresep.css'

function DetailResepPage() {
  const { id } = useParams();

  return (
    <div>
      <Navbar />
      <div className="container">
        <h1 className="text-center ">Modul Resep</h1>
      </div>
      <div class="detail-recipe">
            <div class="detail-recipe-brief"> 
              <div class="column"> 
                  <img src="./corba-api.jpg" class="img-fluid mx-auto d-block" alt="Logo Coolkas" />
              </div> 
              <div class="column2"> 
                <h1>Corba</h1> 
                <table>
                    <tr>
                        <td><p>Kategori</p></td>
                        <td><p>:</p></td>
                        <td><p>Side</p></td>
                    </tr>
                    <tr>
                        <td><p>Asal</p></td>
                        <td><p>:</p></td>
                        <td><p>Turkish</p></td>
                    </tr>
                </table>
                <div class="categories">
                    <div class="container">
                        <p class="category">Side</p> 
                    </div>
                    <div class="container">
                        <p class="category">Food</p> 
                    </div>
                </div>
              </div>
            </div> 
        </div>

        {/* <DetailResep /> */}
    </div>
  );
}

export default DetailResepPage;
