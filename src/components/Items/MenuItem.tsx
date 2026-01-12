import Image from "next/image";
import { useState } from "react";
import { createPortal } from "react-dom";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { ShoppingCart, Eye, Sparkles, Plus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import { Toast, useCart } from "../Cart";
import { useScrollLock } from "../../hooks/useScrollLock";

interface MenuItemProps {
	image: string;
	name: string;
	description?: string;
	price: string;
	variants?: string[];
}

export default function MenuItem({
	image,
	name,
	description = "",
	price,
	variants = [],
}: MenuItemProps) {
	const [isOpen, setIsOpen] = useState(false);
	const [isHovered, setIsHovered] = useState(false);
	const [showToast, setShowToast] = useState(false);
	const [toastTrigger, setToastTrigger] = useState(0);
	const [selectedVariant, setSelectedVariant] = useState<string | null>(null);
	const [showVariantModal, setShowVariantModal] = useState(false);
	const { addToCart } = useCart();

	// Disable body scroll when variant modal is open
	useScrollLock(showVariantModal);

	const handleAddToCart = () => {
		// If item has variants and no variant is selected yet, show modal
		if (variants.length > 0 && !selectedVariant) {
			setShowVariantModal(true);
			return;
		}

		addToCart({ image, name, description, price, variant: selectedVariant ?? undefined });
		if (showToast) {
			setToastTrigger((prev) => prev + 1);
		} else {
			setShowToast(true);
		}

		// Reset selection after adding if it came from modal
		if (showVariantModal) {
			setShowVariantModal(false);
			setSelectedVariant(null);
		}
	};

	const handleCloseModal = () => {
		setShowVariantModal(false);
		setSelectedVariant(null);
	};

	return (
		<>
			<Toast
				message="Berhasil menambahkan produk ke keranjang"
				isVisible={showToast}
				onClose={() => setShowToast(false)}
				triggerZoom={toastTrigger}
			/>

			{/* Variant Selection Modal - Rendered via Portal */}
			{typeof document !== "undefined" &&
				createPortal(
					<AnimatePresence>
						{showVariantModal && (
							<div className="fixed inset-0 z-9999 flex items-center justify-center p-4">
								<motion.div
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									exit={{ opacity: 0 }}
									onClick={handleCloseModal}
									className="absolute inset-0 bg-black/60 backdrop-blur-sm"
								/>
								<motion.div
									initial={{ scale: 0.9, opacity: 0, y: 20 }}
									animate={{ scale: 1, opacity: 1, y: 0 }}
									exit={{ scale: 0.9, opacity: 0, y: 20 }}
									className="relative w-full max-w-md bg-surface-10 rounded-3xl shadow-2xl overflow-hidden"
								>
									<div className="p-6">
										<div className="flex justify-between items-start mb-6">
											<div>
												<h3 className="text-xl font-bold dark:text-bg-white mb-1">{name}</h3>
												<p className="text-primary font-bold text-lg">Rp {price}</p>
											</div>
											<button
												onClick={handleCloseModal}
												className="p-2 hover:bg-surface-20 rounded-full transition-colors"
											>
												<Plus className="w-6 h-6 rotate-45 text-secondary-500" />
											</button>
										</div>

										<div className="space-y-4">
											<p className="text-sm font-bold text-secondary-500 uppercase tracking-widest">
												Pilih Rasa:
											</p>
											<div className="grid grid-cols-2 gap-3">
												{variants.map((v) => (
													<button
														key={v}
														onClick={() => setSelectedVariant(v)}
														className={`px-4 py-3 rounded-2xl text-sm font-semibold transition-all duration-200 border-2 ${
															selectedVariant === v
																? "bg-primary/10 border-primary text-primary shadow-sm"
																: "bg-surface-20 border-transparent text-secondary-600 hover:bg-surface-30"
														}`}
													>
														{v}
													</button>
												))}
											</div>
										</div>

										<button
											onClick={handleAddToCart}
											disabled={!selectedVariant}
											className={`mt-8 w-full py-4 rounded-2xl font-bold transition-all duration-300 flex items-center justify-center gap-2 ${
												selectedVariant
													? "bg-primary text-white shadow-lg shadow-primary/20 hover:scale-[1.02]"
													: "bg-surface-30 text-secondary-400 cursor-not-allowed"
											}`}
										>
											<Plus className="w-5 h-5" />
											<span>Tambah ke Keranjang</span>
										</button>
									</div>
								</motion.div>
							</div>
						)}
					</AnimatePresence>,
					document.body
				)}

			<motion.div
				className="group relative h-full"
				onHoverStart={() => setIsHovered(true)}
				onHoverEnd={() => setIsHovered(false)}
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				whileHover={{ y: -8 }}
				transition={{ duration: 0.3 }}
			>
				<div className="card h-full flex flex-col overflow-hidden bg-surface-10 border border-transparent hover:border-primary/30 transition-all duration-300 hover:shadow-xl">
					{/* Image Section */}
					<div
						className="relative aspect-4/3 overflow-hidden bg-surface-20 cursor-pointer"
						onClick={() => setIsOpen(true)}
					>
						<Image
							src={`/img/menu/${image}`}
							alt={name}
							fill
							sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
							className="object-cover transition-transform duration-500 group-hover:scale-110"
						/>

						{/* Zoom Indicator - Always visible on mobile */}
						<div className="absolute top-3 right-3 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300">
							<div className="w-8 h-8 bg-surface-10 backdrop-blur-sm rounded-full flex items-center justify-center shadow-md">
								<Eye className="w-4 h-4 text-primary" />
							</div>
						</div>

						{/* Overlay Gradient */}
						<div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

						{/* Fresh Badge */}
						<AnimatePresence>
							{isHovered && (
								<motion.div
									className="absolute top-3 left-3"
									initial={{ scale: 0, rotate: -180, opacity: 0 }}
									animate={{ scale: 1, rotate: 0, opacity: 1 }}
									exit={{ scale: 0, rotate: 180, opacity: 0 }}
									transition={{ type: "spring", stiffness: 200 }}
								>
									<div className="bg-emerald-500/90 backdrop-blur-sm text-white px-3 py-1.5 rounded-full text-xs font-bold flex items-center gap-1.5 shadow-lg">
										<Sparkles size={12} className="animate-pulse" />
										<span>Fresh Daily</span>
									</div>
								</motion.div>
							)}
						</AnimatePresence>

						{/* Hover Actions - Desktop only */}
						<div className="hidden lg:flex absolute inset-0 items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-all duration-300">
							<motion.button
								onClick={(e) => {
									e.stopPropagation();
									setIsOpen(true);
								}}
								className="w-12 h-12 bg-white/95 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg cursor-pointer border border-white/20"
								initial={{ scale: 0, y: 20 }}
								whileHover={{
									scale: 1.1,
									backgroundColor: "rgba(255,255,255,1)",
								}}
								whileTap={{ scale: 0.95 }}
								aria-label="View image"
							>
								<Eye className="w-5 h-5 text-primary" />
							</motion.button>

							<motion.button
								onClick={(e) => {
									e.stopPropagation();
									handleAddToCart();
								}}
								className="w-12 h-12 bg-success/95 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg cursor-pointer border border-white/20"
								initial={{ scale: 0, y: 20 }}
								whileHover={{
									scale: 1.1,
									backgroundColor: "rgba(27, 127, 92, 1)",
								}}
								whileTap={{ scale: 0.95 }}
								aria-label="Add to cart"
							>
								<ShoppingCart className="w-5 h-5 text-white" />
							</motion.button>
						</div>
					</div>

					{/* Content Section */}
					<div className="p-5 flex flex-col grow bg-surface-10">
						<div className="flex-1 flex flex-col space-y-4">
							<h4 className="text-lg font-sans! font-bold text-secondary-900 dark:text-bg-white line-clamp-2 group-hover:text-primary dark:group-hover:text-primary-500 transition-colors">
								{name}
							</h4>

							{description && (
								<p className="text-sm text-secondary-600 line-clamp-2">{description}</p>
							)}
						</div>

						{/* Bottom Content (Price & Button) */}
						<div className="mt-6 pt-4 border-t border-surface-20">
							<div className="flex items-baseline gap-2 mb-4">
								<span className="text-2xl font-bold text-primary">Rp {price}</span>
							</div>

							<motion.button
								onClick={handleAddToCart}
								className="w-full bg-primary hover:bg-primary-10 text-white font-semibold py-3 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 shadow-md hover:shadow-lg group/btn cursor-pointer"
								whileHover={{ scale: 1.02 }}
								whileTap={{ scale: 0.98 }}
							>
								<Plus className="w-5 h-5 group-hover/btn:rotate-90 transition-transform duration-300" />
								<span>Tambah ke Keranjang</span>
							</motion.button>
						</div>
					</div>
				</div>

				{/* Glow Effect */}
				<motion.div
					className="absolute -inset-1 bg-linear-to-r from-primary/20 via-primary/10 to-primary/20 rounded-2xl -z-10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
					initial={false}
				/>
			</motion.div>

			<Lightbox
				open={isOpen}
				close={() => setIsOpen(false)}
				slides={[{ src: `/img/menu/${image}` }]}
				render={{
					buttonPrev: () => null,
					buttonNext: () => null,
				}}
			/>
		</>
	);
}
