import { useEffect } from "react";
import Image from "next/image";

import Swiper from "swiper/bundle";

export default function Testimonials() {
	useEffect(() => {
		/**
		 * Init swiper slider with 1 slide at once in desktop view
		 */
		const swiper1 = new Swiper(".swiper-1", {
			speed: 600,
			loop: true,
			autoplay: {
				delay: 5000,
				disableOnInteraction: false,
			},
			slidesPerView: "auto",
			pagination: {
				el: ".swiper-pagination",
				type: "bullets",
				clickable: true,
			},
			navigation: {
				nextEl: ".swiper-button-next",
				prevEl: ".swiper-button-prev",
			},
		});
	});

	return (
		<>
			{/* ======= Testimonials Section ======= */}
			<section id="testimonials" className="testimonials section-bg">
				<div className="container" data-aos="fade-up">
					<div className="section-header">
						<h2>Testimonials</h2>
						<p>
							What are they saying <span>About Us</span>
						</p>
					</div>
					<div
						className="swiper-1 swiper"
						data-aos="fade-up"
						data-aos-delay={100}
					>
						<div className="swiper-wrapper">
							<div className="swiper-slide">
								<div className="testimonial-item">
									<div className="row gy-4 justify-content-center">
										<div className="col-lg-6">
											<div className="testimonial-content">
												<p>
													<i className="bi bi-quote quote-icon-left" />
													Cheese stick &amp; pie susunya juaraaa.
													<i className="bi bi-quote quote-icon-right" />
												</p>
												<a
													href="https://www.instagram.com/stories/highlights/17875161236808935/"
													target="_blank"
												>
													<h3>Audy Item</h3>
												</a>
												<h4>Celebrity</h4>
												<div className="stars">
													<i className="bi bi-star-fill" />
													<i className="bi bi-star-fill" />
													<i className="bi bi-star-fill" />
													<i className="bi bi-star-fill" />
													<i className="bi bi-star-half" />
												</div>
											</div>
										</div>
										<div className="col-lg-2 text-center">
											<Image
												src="/img/testimonials/audy.png"
												className="img-fluid testimonial-img"
												alt="Audy Item"
												width={196}
												height={196}
											/>
										</div>
									</div>
								</div>
							</div>
							{/* End testimonial item */}
							<div className="swiper-slide">
								<div className="testimonial-item">
									<div className="row gy-4 justify-content-center">
										<div className="col-lg-6">
											<div className="testimonial-content">
												<p>
													<i className="bi bi-quote quote-icon-left" />
													Kejunya sangat melekat dan berasa sekali.
													<i className="bi bi-quote quote-icon-right" />
												</p>
												<a
													href="https://www.instagram.com/stories/highlights/18016160635396785/"
													target="_blank"
												>
													<h3>Dustin Tiffani</h3>
												</a>
												<h4>Selebgram</h4>
												<div className="stars">
													<i className="bi bi-star-fill" />
													<i className="bi bi-star-fill" />
													<i className="bi bi-star-fill" />
													<i className="bi bi-star-fill" />
													<i className="bi bi-star-half" />
												</div>
											</div>
										</div>
										<div className="col-lg-2 text-center">
											<Image
												src="/img/testimonials/dustin.jpg"
												className="img-fluid testimonial-img"
												alt="Dustin Tiffani"
												width={196}
												height={196}
											/>
										</div>
									</div>
								</div>
							</div>
							{/* End testimonial item */}
							<div className="swiper-slide">
								<div className="testimonial-item">
									<div className="row gy-4 justify-content-center">
										<div className="col-lg-6">
											<div className="testimonial-content">
												<p>
													<i className="bi bi-quote quote-icon-left" />
													Buat yang suka nyemil kaya aku boleh coba.
													<i className="bi bi-quote quote-icon-right" />
												</p>
												<a
													href="https://www.instagram.com/stories/highlights/17951403782157014/"
													target="_blank"
												>
													<h3>Fitri Salhuteru</h3>
												</a>
												<h4>Selebgram</h4>
												<div className="stars">
													<i className="bi bi-star-fill" />
													<i className="bi bi-star-fill" />
													<i className="bi bi-star-fill" />
													<i className="bi bi-star-fill" />
													<i className="bi bi-star" />
												</div>
											</div>
										</div>
										<div className="col-lg-2 text-center">
											<Image
												src="/img/testimonials/fitri.jpg"
												className="img-fluid testimonial-img"
												alt="Fitri Salhuteru"
												width={196}
												height={196}
											/>
										</div>
									</div>
								</div>
							</div>
							{/* End testimonial item */}
							<div className="swiper-slide">
								<div className="testimonial-item">
									<div className="row gy-4 justify-content-center">
										<div className="col-lg-6">
											<div className="testimonial-content">
												<p>
													<i className="bi bi-quote quote-icon-left" />
													Yang suka sama yang kres-kres dan keju-keju boleh coba
													ini nih, @cheesestick_koe.
													<i className="bi bi-quote quote-icon-right" />
												</p>
												<a
													href="https://www.instagram.com/stories/highlights/17945089205058105/"
													target="_blank"
												>
													<h3>Tike Priyatnakusuma</h3>
												</a>
												<h4>Celebrity</h4>
												<div className="stars">
													<i className="bi bi-star-fill" />
													<i className="bi bi-star-fill" />
													<i className="bi bi-star-fill" />
													<i className="bi bi-star-fill" />
													<i className="bi bi-star-fill" />
												</div>
											</div>
										</div>
										<div className="col-lg-2 text-center">
											<Image
												src="/img/testimonials/tike.jpg"
												className="img-fluid testimonial-img"
												alt="Tike Priyatnakusuma"
												width={196}
												height={196}
											/>
										</div>
									</div>
								</div>
							</div>
							{/* End testimonial item */}
							<div className="swiper-slide">
								<div className="testimonial-item">
									<div className="row gy-4 justify-content-center">
										<div className="col-lg-6">
											<div className="testimonial-content">
												<p>
													<i className="bi bi-quote quote-icon-left" />
													Makanan untuk nyemil "cheese stick", pas banget buat
													nonton TV.
													<i className="bi bi-quote quote-icon-right" />
												</p>
												<a
													href="https://www.instagram.com/stories/highlights/17956963832173114/"
													target="_blank"
												>
													<h3>Gunawan Sudrajat</h3>
												</a>
												<h4>Actor &amp; Model</h4>
												<div className="stars">
													<i className="bi bi-star-fill" />
													<i className="bi bi-star-fill" />
													<i className="bi bi-star-fill" />
													<i className="bi bi-star-fill" />
													<i className="bi bi-star-fill" />
												</div>
											</div>
										</div>
										<div className="col-lg-2 text-center">
											<Image
												src="/img/testimonials/gunawan.jpg"
												className="img-fluid testimonial-img"
												alt="Gunawan Sudrajat"
												width={196}
												height={196}
											/>
										</div>
									</div>
								</div>
							</div>
							{/* End testimonial item */}
						</div>
						<div className="swiper-pagination" />
					</div>
				</div>
			</section>
			{/* End Testimonials Section */}
		</>
	);
}
