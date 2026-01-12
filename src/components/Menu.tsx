import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import MenuItem from "./Items/MenuItem";
import { Cake, Cookie, TrendingUp } from "lucide-react";

type MenuTabId = "popular" | "cakes" | "snacks";

export default function Menu() {
	const [activeTab, setActiveTab] = useState<MenuTabId>("popular");
	const { ref, inView } = useInView({
		triggerOnce: true,
		threshold: 0.1,
	});

	const tabs: { id: MenuTabId; label: string; icon: typeof TrendingUp }[] = [
		{ id: "popular", label: "Popular", icon: TrendingUp },
		{ id: "cakes", label: "Cakes", icon: Cake },
		{ id: "snacks", label: "Snacks", icon: Cookie },
	];

	const menuData = {
		popular: [
			{
				image: "cheese_stick_pouch_1_kg.jpeg",
				name: "Cheese Stick Pouch 1 kg",
				description: "Packing: plastik pouch uk. 250 gr x 4 pcs",
				price: "170.000",
			},
			{
				image: "cheese_stick_pouch_500_gr.webp",
				name: "Cheese Stick Pouch 1/2 kg",
				description: "Packing: plastik pouch uk. 250 gr x 2 pcs",
				price: "85.000",
			},
			{
				image: "cheese_stick_pouch_250_gr.webp",
				name: "Cheese Stick Pouch 250 gr",
				description: "Packing: plastik pouch uk. 250 gr",
				price: "42.500",
			},
			{
				image: "cheese_stick_pouch_100_gr.webp",
				name: "Cheese Stick Pouch 1 ons",
				description: "Packing: plastik pouch uk. 100 gr",
				price: "17.500",
			},
			{
				image: "cheese_stick_jar_150_gr.jpeg",
				name: "Cheese Stick Jar 150 gr",
				description: "Packing: tabung uk. 150 gr",
				price: "38.000",
			},
			{
				image: "cheese_stick_jar_225_gr.jpeg",
				name: "Cheese Stick Jar 225 gr",
				description: "Packing: tabung uk. 225 gr",
				price: "50.000",
			},
			{
				image: "yakult.jpeg",
				name: "Es Yakult",
				description:
					"Dengan berbagai macam rasa: Strawberry, Leci, Anggur, Jambu, Jeruk, Melon, Sirsak, & Mangga",
				variants: ["Strawberry", "Leci", "Anggur", "Jambu", "Jeruk", "Melon", "Sirsak", "Mangga"],
				price: "10.000",
			},
			{
				image: "pie.jpeg",
				name: "Pie Susu",
				description: "Pie susu lezat dengan filling lembut dan crust yang renyah",
				price: "4.500",
			},
			{
				image: "strudel.webp",
				name: "Banana Strudel",
				description: "Pisang coklat yang dibungkus dengan puff pastry",
				price: "60.000",
			},
		],
		cakes: [
			{
				image: "bolu_marmer.webp",
				name: "Bolu Marmer",
				description: "Ukuran loyang 22",
				price: "70.000",
			},
			{
				image: "bolu_pisang.webp",
				name: "Bolu Pisang",
				description: "Ukuran loyang 22",
				price: "70.000",
			},
			{
				image: "bolu_zebra.webp",
				name: "Bolu Zebra",
				description: "Ukuran loyang 22",
				price: "70.000",
			},
			{
				image: "bolu_marmer_pan.webp",
				name: "Bolu Marmer Pandan",
				description: "Ukuran loyang 22",
				price: "70.000",
			},
			{
				image: "bolu_coklat_coc.webp",
				name: "Bolu Coklat Chocochip",
				description: "Ukuran loyang 22",
				price: "70.000",
			},
			{
				image: "bolu_sukade.webp",
				name: "Bolu Sukade",
				description: "Ukuran loyang 22",
				price: "70.000",
			},
			{
				image: "bolu_gula_merah.webp",
				name: "Bolu Gula Merah",
				description: "Ukuran loyang 22",
				price: "70.000",
			},
			{
				image: "bolu_kismis.webp",
				name: "Bolu Kismis",
				description: "Ukuran loyang 22",
				price: "70.000",
			},
			{
				image: "bolu_keju.webp",
				name: "Bolu Keju",
				description: "Ukuran loyang 22",
				price: "80.000",
			},
			{
				image: "bolu_meses.webp",
				name: "Bolu Meses",
				description: "Ukuran loyang 22",
				price: "80.000",
			},
			{
				image: "brownies_coklat.png",
				name: "Brownies Coklat",
				price: "60.000",
			},
			{
				image: "brownies_keju.png",
				name: "Brownies Keju",
				price: "60.000",
			},
			{
				image: "brownies_coklat_keju.webp",
				name: "Brownies Coklat Keju",
				price: "65.000",
			},
		],
		snacks: [
			{
				image: "mac-schotel20x20.jpg",
				name: "Macaroni Schotel",
				description: "Ukuran loyang 20x20",
				price: "95.000",
			},
			{
				image: "brownies-panggang20x20.webp",
				name: "Brownies Panggang",
				description: "Ukuran loyang 20x20",
				price: "85.000",
			},
			{
				image: "brule20x20.jpg",
				name: "Spaghetti Brulee",
				description: "Ukuran loyang 20x20",
				price: "120.000",
			},
			{
				image: "brownies-panggang20x10.webp",
				name: "Brownies Panggang",
				description: "Ukuran loyang 20x10",
				price: "45.000",
			},
			{
				image: "mac-schotel20x10.webp",
				name: "Macaroni Schotel",
				description: "Ukuran loyang 20x10",
				price: "50.000",
			},
			{
				image: "mac-schotel15x10.jpg",
				name: "Macaroni Schotel",
				description: "Ukuran loyang 15x10",
				price: "30.000",
			},
		],
	};

	return (
		<section
			id="menu"
			className="section bg-secondary-50 dark:bg-surface relative overflow-hidden"
			style={{
				backgroundColor: "var(--color-surface-20)",
			}}
			ref={ref}
		>
			<div className="absolute inset-0 opacity-5">
				<div className="absolute top-1/4 right-0 w-96 h-96 bg-primary-500 rounded-full blur-3xl" />
			</div>

			<div className="container-custom relative z-10">
				{/* Section Header */}
				<motion.div
					className="section-header max-w-2xl mx-auto"
					initial={{ opacity: 0, y: 30 }}
					animate={inView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.6 }}
				>
					<h3 className="section-subtitle">Our Menu</h3>
					<h2 className="section-title">
						Check Our <span className="text-primary dark:text-primary-500">Menu</span>
					</h2>
					<p className="text-secondary-600 dark:text-secondary-400 mt-4">
						Pilihan menu terlengkap dengan kualitas terbaik untukmu
					</p>
				</motion.div>

				{/* Tabs */}
				<motion.div
					className="flex flex-wrap justify-center gap-3 mb-12"
					initial={{ opacity: 0, y: 20 }}
					animate={inView ? { opacity: 1, y: 0 } : {}}
					transition={{ delay: 0.2 }}
				>
					{tabs.map((tab, index) => {
						const Icon = tab.icon;
						return (
							<motion.button
								key={tab.id}
								onClick={() => setActiveTab(tab.id)}
								className={`relative px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
									activeTab === tab.id
										? "bg-primary text-white shadow-lg"
										: "bg-surface-30 text-bg-white hover:bg-surface-40 cursor-pointer"
								}`}
								initial={{ opacity: 0, y: 20 }}
								animate={inView ? { opacity: 1, y: 0 } : {}}
								transition={{ delay: 0.3 + index * 0.1 }}
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
							>
								<span className="flex items-center gap-2">
									<Icon size={18} />
									<span>{tab.label}</span>
								</span>
								{activeTab === tab.id && (
									<motion.div
										className="hidden lg:block absolute top-14 left-0 right-0 h-1 bg-primary rounded-full"
										layoutId="activeTab"
									/>
								)}
							</motion.button>
						);
					})}
				</motion.div>

				{/* Menu Content */}
				<AnimatePresence mode="wait">
					<motion.div
						key={activeTab}
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -20 }}
						transition={{ duration: 0.3 }}
						className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
					>
						{menuData[activeTab].map((item, index) => (
							<motion.div
								key={index}
								initial={{ opacity: 0, scale: 0.9 }}
								animate={{ opacity: 1, scale: 1 }}
								transition={{ delay: index * 0.05 }}
							>
								<MenuItem {...item} />
							</motion.div>
						))}
					</motion.div>
				</AnimatePresence>
			</div>
		</section>
	);
}
