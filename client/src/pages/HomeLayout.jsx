import Features from "../components/Home/Features";
import Contact from "../components/Home/Contact";
import Footer from "../components/Home/Footer";
import Header from "../components/Home/Header";
import Home from "../components/Home/Home";
import Booking from "../components/Home/Booking";
import About from "../components/Home/About";

function HomeLayout() {
  return (
    <div className="text-xl">
      <Header />
      <Home />
      <Features />
      <Booking />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default HomeLayout;
