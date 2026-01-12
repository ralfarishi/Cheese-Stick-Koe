import dynamic from "next/dynamic";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import About from "@/components/About";

// Dynamic imports for below-the-fold components to reduce initial JS bundle
const Modal = dynamic(() => import("@/components/Modal"), { ssr: false });
const Menu = dynamic(() => import("@/components/Menu"));
const Galleries = dynamic(() => import("@/components/Galleries"));
const Testimonials = dynamic(() => import("@/components/Testimonials"));
const WhatsappFloating = dynamic(() => import("@/components/WhatsappFloating"), { ssr: false });
const CartPanel = dynamic(() => import("@/components/Cart").then((mod) => mod.CartPanel), {
	ssr: false,
});

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
