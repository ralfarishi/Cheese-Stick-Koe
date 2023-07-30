import Image from "next/image";
import { useEffect } from "react";

import AOS from "aos";

import Modal from "@/components/Modal";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import Menu from "@/components/Menu";
import WhatsappFloating from "@/components/WhatsappFloating";
import Galleries from "@/components/Galleries";
import Testimonials from "@/components/Testimonials";
import About from "@/components/About";

function Home() {
	useEffect(() => {
		AOS.init({
			duration: 1000,
			easing: "ease-in-out",
			once: true,
			mirror: false,
		});
	}, []);

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
			{/* End #main */}

			<Footer />

			<WhatsappFloating />
		</>
	);
}

export default Home;
