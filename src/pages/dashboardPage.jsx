import Navbar from "../components/navbarComponent";
import Hero from "../components/Dashboard/hero";
import Feature from "../components/Dashboard/feature";
import Recipe from "../components/Dashboard/recipe";
import OlahLimbah from "../components/Dashboard/olahLimbah";
import About from "../components/Dashboard/about";
import { Footer, AppFooter } from "../components/footer";

function DashboardPage() {
  return (
    <div>
      <Navbar />
      <Hero />

      <main tabindex="0" id="main-content" class="">
        <section>
          <Feature />
        </section>

        <section class="blue-bg">
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
