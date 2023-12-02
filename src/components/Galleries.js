import { useEffect } from "react";
import Image from "next/image";

import Swiper from "swiper/bundle";
import GalleryItem from "./utils/GalleryItem";

export default function Gallery() {
	useEffect(() => {
		/**
		 * Gallery SWiper
		 */
		const gallerySwiper = new Swiper(".gallery-swiper", {
			speed: 400,
			centeredSlides: true,
			slidesPerView: "auto",
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			pagination: {
				el: ".swiper-pagination",
				type: "bullets",
				clickable: true,
			},
			breakpoints: {
				320: {
					slidesPerView: 1,
					spaceBetween: 20,
				},
				768: {
					slidesPerView: 3,
					spaceBetween: 20,
				},
				992: {
					slidesPerView: 5,
					spaceBetween: 20,
				},
			},
		});
	});

	return (
		<>
			{/* ======= Gallery Section ======= */}
			<section id="gallery" className="gallery">
				<div className="container" data-aos="fade-up">
					<div className="section-header">
						<h2>gallery</h2>
						<p>
							Check <span>Our Gallery</span>
						</p>
					</div>
					<div className="gallery-swiper swiper">
						<div className="swiper-wrapper align-items-center">
							<GalleryItem image="varian-bolu.jpeg" name="Varian Bolu" />
							<GalleryItem image="varian-yakult.jpeg" name="Varian Yakult" />
							<GalleryItem
								image="cheese-stick-tabung.jpeg"
								name="Cheese Stick Tabung"
							/>
							<GalleryItem image="potongan-bolu.jpeg" name="Potongan Bolu" />
							<GalleryItem image="bolu-kardus.jpeg" name="Bolu Kardus" />
							<GalleryItem
								image="cheese-stick-pouch.jpeg"
								name="Cheese Stick Pouch Gallery"
							/>
							<GalleryItem
								image="cheese-stick-pouch-2.jpeg"
								name="Cheese Stick Pouch Gallery 2"
							/>
						</div>
						<div className="swiper-pagination" />
					</div>
				</div>
			</section>
			{/* ======= End Gallery Section ======= */}
		</>
	);
}
