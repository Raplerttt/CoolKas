import Navbar from "../components/NavbarComponent";
import Hero from "../components/Dashboard/hero";
import Feature from "../components/Dashboard/feature";
import Recipe from "../components/Dashboard/recipe";
import OlahLimbah from "../components/Dashboard/olahLimbah";
import About from "../components/Dashboard/about";
import { Footer, AppFooter } from "../components/Footer";

function DashboardPage() {
  return (
    <div>
      <Navbar />
      <Hero />

      <main tabIndex="0" id="main-content" className="">
        <section>
          <Feature />
        </section>

        <section className="blue-bg">
          <Recipe />
          <OlahLimbah />
        </section>

        <section>
          <About />
        </section>
      </main>
      <Footer />
      <AppFooter />
    </div>
  );
}

export default DashboardPage;
