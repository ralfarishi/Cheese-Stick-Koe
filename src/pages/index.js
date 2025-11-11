import Modal from "@/components/Modal";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import Menu from "@/components/Menu";
import WhatsappFloating from "@/components/WhatsappFloating";
import Galleries from "@/components/Galleries";
import Testimonials from "@/components/Testimonials";
import About from "@/components/About";
import { CartPanel } from "@/components/Cart";

function Home() {
  return (
    <>
      <Header />
      <Hero />

      <main id="main">
        <Modal />
        <About />
        <Menu />
        <Galleries />
        <Testimonials />
      </main>

      <Footer />

      <WhatsappFloating />
      <CartPanel />
    </>
  );
}

export default Home;
