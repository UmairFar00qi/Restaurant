import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import WhyUs from "./components/WhyUs";
import Menu from "./components/Menu";
import Specials from "./components/Specials";
import Events from "./components/Events";
import BookATable from "./components/BookATable";
import Gallery from "./components/Gallery";
import Chefs from "./components/Chefs";
import Contact from "./components/Contact";
import  Footer from "./components/footer";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <main id="main">
        <About />
        <WhyUs />
        <Menu />
        <Specials />
        <Events />
        <BookATable />
        <Gallery />
        <Chefs/>
        <Contact/>
      </main>
      <Footer/>
    </>
  );
}

export default App;
