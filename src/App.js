import './App.css';
import Navbar from './components/navbar';
import Hero from './components/hero';
import Feature from './components/feature'
import Recipe from './components/recipe';
import OlahLimbah from './components/olahLimbah';
import About from './components/about';

function App() {
  return (
    <div>
      <header>
        <Navbar />
        <Hero />
      </header>

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

    </div>
  );
}

export default App;
