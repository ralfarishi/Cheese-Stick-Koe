import Image from "next/image";
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { ZoomIn } from "lucide-react";

type GalleryHeight = "short" | "medium" | "tall";
type GalleryLayout = "grid" | "masonry";
type CategoryType = "cakes" | "snacks" | "drinks";

interface GalleryItemProps {
	image: string;
	name: string;
	category: CategoryType;
	height?: GalleryHeight;
	layout?: GalleryLayout;
}

export default function GalleryItem({
	image,
	name,
	category,
	height = "medium",
	layout = "grid",
}: GalleryItemProps) {
	const [isOpen, setIsOpen] = useState(false);

	const getCategoryColor = (cat: CategoryType) => {
		const colors: Record<CategoryType, string> = {
			cakes: "bg-pink-900/30 text-pink-400",
			snacks: "bg-amber-900/30 text-amber-400",
			drinks: "bg-blue-900/30 text-blue-400",
		};
		return colors[cat] || "bg-surface text-gray-700 dark:bg-surface dark:text-gray-400";
	};

	const getAspectClass = () => {
		if (layout === "grid") {
			return "aspect-square";
		}

		// Masonry layout
		const heights: Record<GalleryHeight, string> = {
			short: "aspect-[4/3]",
			medium: "aspect-square",
			tall: "aspect-[3/4]",
		};
		return heights[height] || "aspect-square";
	};

	return (
		<>
			<div
				className="relative group cursor-pointer overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
				onClick={() => setIsOpen(true)}
			>
				<div className={`relative ${getAspectClass()}`}>
					<Image
						src={`/img/galleries/${image}`}
						alt={name}
						fill
						sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
						className="object-cover group-hover:scale-110 transition-transform duration-500"
					/>

					<div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
						<div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4">
							<ZoomIn className="w-12 h-12 mb-3 animate-pulse" />
							<h4 className="font-sans! text-lg font-bold text-center">{name}</h4>
							<span
								className={`mt-2 px-3 py-1 rounded-full text-xs font-semibold ${getCategoryColor(
									category
								)}`}
							>
								{category}
							</span>
						</div>
					</div>
				</div>
			</div>

			<Lightbox
				open={isOpen}
				close={() => setIsOpen(false)}
				slides={[{ src: `/img/galleries/${image}`, alt: name }]}
				render={{
					buttonPrev: () => null,
					buttonNext: () => null,
				}}
			/>
		</>
	);
}

