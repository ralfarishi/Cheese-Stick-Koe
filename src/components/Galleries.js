import { useEffect } from "react";
import Image from "next/image";

import Swiper from "swiper/bundle";

export default function Gallery() {
	useEffect(() => {
		/**
		 * Gallery SWiper
		 */
		const gallerySwiper = new Swiper(".gallery-swiper", {
			speed: 400,
			centeredSlides: true,
			slidesPerView: "auto",
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
				640: {
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
							<div className="swiper-slide">
								<a
									className="glightbox"
									data-gallery="images-gallery"
									href="/img/galleries/varian-bolu.jpeg"
								>
									<Image
										src="/img/galleries/varian-bolu.jpeg"
										className="img-fluid"
										alt="Varian Bolu"
										width={243}
										height={263}
									/>
								</a>
							</div>
							<div className="swiper-slide">
								<a
									className="glightbox"
									data-gallery="images-gallery"
									href="/img/galleries/varian-yakult.jpeg"
								>
									<Image
										src="/img/galleries/varian-yakult.jpeg"
										className="img-fluid"
										alt="Varian Yakult"
										width={243}
										height={324}
									/>
								</a>
							</div>
							<div className="swiper-slide">
								<a
									className="glightbox"
									data-gallery="images-gallery"
									href="/img/galleries/cheese-stick-tabung.jpeg"
								>
									<Image
										src="/img/galleries/cheese-stick-tabung.jpeg"
										className="img-fluid"
										alt="Cheese Stick Tabung Gallery"
										width={243}
										height={324}
									/>
								</a>
							</div>
							<div className="swiper-slide">
								<a
									className="glightbox"
									data-gallery="images-gallery"
									href="/img/galleries/potongan-bolu.jpeg"
								>
									<Image
										src="/img/galleries/potongan-bolu.jpeg"
										className="img-fluid"
										alt="Potongan Bolu"
										width={243}
										height={278}
									/>
								</a>
							</div>
							<div className="swiper-slide">
								<a
									className="glightbox"
									data-gallery="images-gallery"
									href="/img/galleries/bolu-kardus.jpeg"
								>
									<Image
										src="/img/galleries/bolu-kardus.jpeg"
										className="img-fluid"
										alt="Bolu Kardus"
										width={243}
										height={289}
									/>
								</a>
							</div>
							<div className="swiper-slide">
								<a
									className="glightbox"
									data-gallery="images-gallery"
									href="/img/galleries/cheese-stick-pouch.jpeg"
								>
									<Image
										src="/img/galleries/cheese-stick-pouch.jpeg"
										className="img-fluid"
										alt="Cheese Stick Pouch Gallery"
										width={243}
										height={324}
									/>
								</a>
							</div>
							<div className="swiper-slide">
								<a
									className="glightbox"
									data-gallery="images-gallery"
									href="/img/galleries/cheese-stick-pouch-2.jpeg"
								>
									<Image
										src="/img/galleries/cheese-stick-pouch-2.jpeg"
										className="img-fluid"
										alt="Cheese Stick Pouch Gallery 2"
										width={224}
										height={298}
									/>
								</a>
							</div>
						</div>
						<div className="swiper-pagination" />
					</div>
				</div>
			</section>
			{/* ======= End Gallery Section ======= */}
		</>
	);
}
