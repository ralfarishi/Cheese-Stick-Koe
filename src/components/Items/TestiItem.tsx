import Image from "next/image";
import { Star, Instagram } from "lucide-react";
import { motion } from "framer-motion";

interface TestiItemProps {
	quote: string;
	link: string;
	name: string;
	work: string;
	stars: number;
	image: string;
}

export default function TestiItem({ quote, link, name, work, stars, image }: TestiItemProps) {
	const generateStars = () => {
		const fullStars = Math.min(Math.floor(stars), 5);
		const hasHalfStar = stars % 1 !== 0;
		const emptyStars = Math.max(5 - fullStars - (hasHalfStar ? 1 : 0), 0);

		return (
			<div className="flex gap-1">
				{[...Array(fullStars)].map((_, i) => (
					<motion.div
						key={`full-${i}`}
						initial={{ scale: 0, rotate: -180 }}
						animate={{ scale: 1, rotate: 0 }}
						transition={{ delay: i * 0.05, type: "spring", stiffness: 200 }}
					>
						<Star className="w-4 h-4 fill-warning-10 text-warning-10" />
					</motion.div>
				))}
				{hasHalfStar && (
					<motion.div
						className="relative"
						initial={{ scale: 0, rotate: -180 }}
						animate={{ scale: 1, rotate: 0 }}
						transition={{
							delay: fullStars * 0.05,
							type: "spring",
							stiffness: 200,
						}}
					>
						<Star className="w-4 h-4 text-warning-10" />
						<div className="absolute inset-0 overflow-hidden w-1/2">
							<Star className="w-4 h-4 fill-warning-10 text-warning-10" />
						</div>
					</motion.div>
				)}
				{[...Array(emptyStars)].map((_, i) => (
					<motion.div
						key={`empty-${i}`}
						initial={{ scale: 0, rotate: -180 }}
						animate={{ scale: 1, rotate: 0 }}
						transition={{
							delay: (fullStars + (hasHalfStar ? 1 : 0) + i) * 0.05,
							type: "spring",
							stiffness: 200,
						}}
					>
						<Star className="w-4 h-4 text-warning-10" />
					</motion.div>
				))}
			</div>
		);
	};

	return (
		<motion.div
			initial={{ opacity: 0, y: 30 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5 }}
			className="relative group"
		>
			{/* Main Card */}
			<div className="card overflow-hidden hover:shadow-2xl transition-all duration-500">
				{/* Header Section with Avatar */}
				<div className="relative bg-primary/15 p-6 md:p-8">
					<div className="flex items-center gap-4 mb-6">
						{/* Avatar */}
						<motion.div
							className="relative"
							initial={{ scale: 0 }}
							animate={{ scale: 1 }}
							transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
						>
							<div className="relative w-16 h-16 md:w-20 md:h-20">
								<Image
									src={`/img/testimonials/${image}`}
									alt={name}
									fill
									sizes="80px"
									className="rounded-full object-cover ring-4 ring-surface-30 shadow-lg"
								/>
								{/* Verified Badge */}
								<div className="absolute -bottom-1 -right-1 w-6 h-6 md:w-7 md:h-7 bg-linear-to-br from-success to-success-10 rounded-full flex items-center justify-center ring-3 ring-surface-30 shadow-md">
									<svg
										className="w-3 h-3 md:w-4 md:h-4 text-white"
										fill="currentColor"
										viewBox="0 0 20 20"
									>
										<path
											fillRule="evenodd"
											d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
											clipRule="evenodd"
										/>
									</svg>
								</div>
							</div>
						</motion.div>

						{/* Name & Work */}
						<motion.div
							className="flex-1"
							initial={{ opacity: 0, x: -20 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ delay: 0.3 }}
						>
							<h3 className="font-sans! font-bold text-lg md:text-xl text-bg-white mb-1">{name}</h3>
							<p className="text-sm text-bg-white">{work}</p>
							<div className="mt-2">{generateStars()}</div>
						</motion.div>

						<motion.a
							href={link}
							target="_blank"
							rel="noopener noreferrer"
							className="p-2.5 bg-white dark:bg-surface-30 rounded-full hover:bg-primary hover:dark:bg-primary transition-all duration-300 shadow-md hover:shadow-lg group/icon"
							initial={{ scale: 0, rotate: -180 }}
							animate={{ scale: 1, rotate: 0 }}
							transition={{ delay: 0.4, type: "spring" }}
							whileHover={{ scale: 1.1, rotate: 5 }}
							whileTap={{ scale: 0.95 }}
						>
							<svg
								className="w-5 h-5 text-primary group-hover/icon:text-white dark:text-primary-500 dark:group-hover/icon:text-white transition-colors"
								fill="currentColor"
								viewBox="0 0 24 24"
							>
								<path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
							</svg>
						</motion.a>
					</div>

					{/* Decorative Quote Mark */}
					<div className="absolute top-4 right-4 md:top-6 md:right-6 opacity-5 dark:opacity-10">
						<svg
							className="w-20 h-20 md:w-28 md:h-28 text-primary"
							fill="currentColor"
							viewBox="0 0 32 32"
						>
							<path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14h-6c0-2.2 1.8-4 4-4V8zm16 0c-3.3 0-6 2.7-6 6v10h10V14h-6c0-2.2 1.8-4 4-4V8z" />
						</svg>
					</div>
				</div>

				{/* Quote Section */}
				<motion.div
					className="p-6 md:p-8"
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.5 }}
				>
					<p className="text-base md:text-lg text-secondary-700 dark:text-secondary-300 leading-relaxed">
						"{quote}"
					</p>
				</motion.div>

				{/* Footer - View on Instagram */}
				<motion.div
					className="px-6 pb-6 md:px-8 md:pb-8"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.6 }}
				>
					<a
						href={link}
						target="_blank"
						rel="noopener noreferrer"
						className="inline-flex items-center gap-2 text-sm text-secondary-500 dark:text-secondary-400 hover:text-primary dark:hover:text-primary-500 font-medium transition-colors group/link"
					>
						<svg
							className="w-4 h-4 group-hover/link:scale-110 transition-transform"
							fill="currentColor"
							viewBox="0 0 24 24"
						>
							<path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
						</svg>
						<span>View on Instagram</span>
					</a>
				</motion.div>
			</div>

			{/* Glow Effect on Hover */}
			<motion.div
				className="absolute -inset-2 bg-linear-to-r from-primary/0 via-primary/10 to-primary/0 dark:from-primary/0 dark:via-primary/20 dark:to-primary/0 rounded-2xl -z-10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
				initial={false}
			/>
		</motion.div>
	);
}
