import Image from "next/image";
import { ChevronDown, Sparkles } from "lucide-react";
import { useInView } from "react-intersection-observer";

export default function Hero() {
	const { ref, inView } = useInView({
		triggerOnce: true,
		threshold: 0.1,
	});

	const scrollToMenu = () => {
		const menu = document.getElementById("menu");
		if (menu) {
			menu.scrollIntoView({ behavior: "smooth" });
		}
	};

	return (
		<section
			id="hero"
			className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
			style={{ backgroundColor: "var(--color-surface-20)" }}
			ref={ref}
		>
			{/* Background decorative element */}
			<div className="absolute inset-0 overflow-hidden pointer-events-none">
				<div className="absolute bottom-20 right-10 w-96 h-96 bg-surface-50 dark:bg-surface-40 rounded-full blur-3xl hero-bg-float" />
			</div>

			<div className="container-custom relative z-10">
				<div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
					<div
						className={`text-center lg:text-left space-y-8 pt-8 sm:pt-12 lg:pt-0 transition-all duration-700 ${
							inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
						}`}
					>
						<div
							className={`inline-flex items-center gap-2 px-4 py-2 bg-primary backdrop-blur-sm rounded-full shadow-md transition-all duration-500 delay-200 ${
								inView ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5"
							}`}
						>
							<Sparkles className="w-4 h-4 text-white" />
							<span className="text-sm font-semibold text-white">Produk Halal & Berkualitas</span>
						</div>

						{/* Main Heading */}
						<div className="space-y-4">
							<h2
								className={`text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight transition-all duration-500 delay-300 ${
									inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
								}`}
							>
								<span className="block dark:text-bg-white">Enjoy Your</span>
								<span className="block font-primary text-primary text-5xl md:text-6xl lg:text-7xl">
									Cake & Snack
								</span>
							</h2>

							<p
								className={`text-lg md:text-xl text-secondary-600 dark:text-secondary-400 max-w-xl mx-auto lg:mx-0 transition-all duration-500 delay-400 ${
									inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
								}`}
							>
								Nikmati kelezatan cheese stick premium dengan keju Edam asli dan berbagai pilihan
								kue rumahan yang lezat
							</p>
						</div>

						{/* CTA Buttons */}
						<div
							className={`flex flex-col sm:flex-row gap-4 justify-center lg:justify-start transition-all duration-500 delay-500 ${
								inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
							}`}
						>
							<button onClick={scrollToMenu} className="btn btn-primary text-base group">
								<span>Lihat Menu</span>
								<ChevronDown size={20} className="group-hover:animate-bounce" />
							</button>
							<a
								href="https://wa.link/9gzsvd"
								target="_blank"
								rel="noopener noreferrer"
								className="btn btn-outline text-base"
							>
								Hubungi Kami
							</a>
						</div>
					</div>

					<div
						className={`relative transition-all duration-700 ${
							inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
						}`}
					>
						<div className="relative z-10 hero-float">
							<div className="relative w-full aspect-square max-w-lg mx-auto">
								<Image
									src="/img/cheese_stick_banner.png"
									alt="Cheese Stick Banner"
									fill
									sizes="(min-width: 1024px) 50vw, 100vw"
									className="object-contain drop-shadow-2xl"
									priority
								/>
							</div>
						</div>

						{/* Decorative blobs with CSS animations */}
						<div className="absolute -top-4 -right-4 w-24 h-24 bg-primary-40 rounded-full blur-2xl hero-blob-pulse" />
						<div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary-40 rounded-full blur-2xl hero-blob-pulse-delayed" />
					</div>
				</div>
			</div>

			<button
				onClick={scrollToMenu}
				className={`absolute bottom-8 left-1/2 -translate-x-1/2 p-2 text-secondary-600 dark:text-secondary-400 hover:text-primary-30 dark:hover:text-primary transition-all duration-500 delay-800 cursor-pointer ${
					inView ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"
				}`}
				aria-label="Scroll to menu section"
			>
				<div className="hero-scroll-bounce">
					<ChevronDown size={32} />
				</div>
			</button>
		</section>
	);
}
