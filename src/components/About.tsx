import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Check, Award, DollarSign, Star, Users, UsersRound } from "lucide-react";

export default function About() {
	const { ref, inView } = useInView({
		triggerOnce: true,
		threshold: 0.1,
	});

	const features = [
		{
			icon: Award,
			title: "Bahan Premium",
			description: "Menggunakan keju Edam asli dan bahan berkualitas tinggi",
		},
		{
			icon: DollarSign,
			title: "Harga Terjangkau",
			description: "Kualitas premium dengan harga yang ramah di kantong",
		},
		{
			icon: Star,
			title: "Rasa Bintang Lima",
			description: "Cita rasa yang dijamin membuat ketagihan",
		},
	];

	const benefits = [
		"Menggunakan bahan premium",
		"Harga terjangkau",
		"Rasa bintang lima",
		"Sertifikat halal resmi",
		"Produksi fresh daily",
		"Kemasan higienis",
	];

	return (
		<section id="about" className="section relative overflow-hidden bg-surface-30" ref={ref}>
			{/* Background Decoration */}
			<div className="absolute inset-0 opacity-5">
				<div className="absolute top-0 left-0 w-96 h-96 bg-primary-500 rounded-full blur-3xl" />
				<div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-500 rounded-full blur-3xl" />
			</div>

			<div className="container-custom relative z-10">
				{/* Section Header */}
				<motion.div
					className="section-header max-w-2xl mx-auto"
					initial={{ opacity: 0, y: 30 }}
					animate={inView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.6 }}
				>
					<h3 className="section-subtitle">About Us</h3>
					<h2 className="section-title">
						Learn More <span className="text-primary dark:text-primary-500">About Us</span>
					</h2>
					<p className="text-secondary-600 dark:text-secondary-400 mt-4">
						Cheese Stick Koe adalah toko makanan ringan dengan spesialisasi Cheese Stick Keju Edam
						premium
					</p>
				</motion.div>

				<div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mt-12">
					{/* Image Section */}
					<motion.div
						className="relative"
						initial={{ opacity: 0, x: -50 }}
						animate={inView ? { opacity: 1, x: 0 } : {}}
						transition={{ duration: 0.8, delay: 0.2 }}
					>
						<div className="relative aspect-4/3 rounded-2xl overflow-hidden shadow-2xl">
							<Image
								src="/img/food.jpg"
								alt="Our Food"
								fill
								sizes="(min-width: 1024px) 50vw, 100vw"
								className="object-cover hover:scale-105 transition-transform duration-500"
							/>
							<div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent" />
						</div>

						{/* Floating Card */}
						<motion.div
							className="absolute -bottom-6 -right-6 bg-surface-10 p-6 rounded-xl shadow-xl"
							initial={{ opacity: 0, scale: 0.8 }}
							animate={inView ? { opacity: 1, scale: 1 } : {}}
							transition={{ delay: 0.5 }}
						>
							<div className="flex items-center gap-4">
								<div className="w-12 h-12 bg-primary-100 bg-primary-900/30 rounded-full flex items-center justify-center">
									<UsersRound className="w-6 h-6 text-primary" />
								</div>
								<div>
									<div className="text-2xl font-bold text-bg-white">300+</div>
									<div className="text-sm text-secondary-600 dark:text-secondary-400">
										Happy Customers
									</div>
								</div>
							</div>
						</motion.div>
					</motion.div>

					{/* Content Section */}
					<motion.div
						className="space-y-8"
						initial={{ opacity: 0, x: 50 }}
						animate={inView ? { opacity: 1, x: 0 } : {}}
						transition={{ duration: 0.8, delay: 0.3 }}
					>
						{/* Description */}
						<div className="space-y-4">
							<p className="text-secondary-700 dark:text-secondary-300 text-lg leading-relaxed">
								Selain menjual cheese stick, kami juga menjual berbagai macam makanan dan minuman
								lainnya seperti{" "}
								<span className="font-semibold text-primary dark:text-primary-500">
									bolu, pie susu, strudel, es yakult
								</span>
								, dan lain-lain.
							</p>
							<p className="text-secondary-600 dark:text-secondary-400">
								Kami berkomitmen untuk selalu menghadirkan produk berkualitas dengan cita rasa yang
								konsisten dan memuaskan.
							</p>
						</div>

						{/* Benefits List */}
						<div className="grid sm:grid-cols-2 gap-3">
							{benefits.map((benefit, index) => (
								<motion.div
									key={index}
									className="flex items-center gap-3 p-3 rounded-lg bg-surface-10 hover:bg-surface-20 transition-colors"
									initial={{ opacity: 0, x: -20 }}
									animate={inView ? { opacity: 1, x: 0 } : {}}
									transition={{ delay: 0.4 + index * 0.1 }}
								>
									<div className="w-5 h-5 rounded-full bg-success-10 flex items-center justify-center shrink-0">
										<Check className="w-3 h-3 text-white" />
									</div>
									<span className="text-sm font-medium text-secondary-700 dark:text-secondary-300">
										{benefit}
									</span>
								</motion.div>
							))}
						</div>

						{/* Feature Cards */}
						<div className="grid gap-4 mt-8">
							{features.map((feature, index) => (
								<motion.div
									key={index}
									className="card p-5 hover:shadow-lg transition-all duration-300 group"
									initial={{ opacity: 0, y: 20 }}
									animate={inView ? { opacity: 1, y: 0 } : {}}
									transition={{ delay: 0.5 + index * 0.1 }}
								>
									<div className="flex items-start gap-4">
										<div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
											<feature.icon className="w-6 h-6 text-neutral-200" />
										</div>
										<div>
											<h4 className="font-sans! font-semibold text-bg-white mb-1">
												{feature.title}
											</h4>
											<p className="text-sm text-secondary-600 text-secondary-400">
												{feature.description}
											</p>
										</div>
									</div>
								</motion.div>
							))}
						</div>

						{/* CTA */}
						<motion.div
							className="pt-4"
							initial={{ opacity: 0, y: 20 }}
							animate={inView ? { opacity: 1, y: 0 } : {}}
							transition={{ delay: 0.8 }}
						>
							<p className="text-secondary-700 dark:text-secondary-300 mb-4">
								Silakan scroll ke bawah untuk melihat menu yang terdapat di toko kami. Jangan lupa
								untuk melihat bagian testimoni ya... 😉
							</p>
							<a href="#menu" className="btn btn-primary">
								Lihat Menu Lengkap
							</a>
						</motion.div>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
