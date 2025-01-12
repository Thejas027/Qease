import Navbar from "../components/Home/Navbar";
import Hero from "../components/Home/Hero";
import Features from "../components/Home/Features";
import Contact from "../components/Home/Contact";
import Footer from "../components/Home/Footer";

function HomeLayout() {
  return (
    <div className="text-xl">
      <Navbar />
      <Hero />
      <Features />
      <Contact />
      <Footer />
    </div>
  );
}

export default HomeLayout;
