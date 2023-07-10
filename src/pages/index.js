import Head from "next/head";
import Image from "next/image";
import { useEffect } from "react";

import AOS from "aos";
import Swiper from "swiper/bundle";

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";

function Home() {
	useEffect(() => {
		AOS.init({
			duration: 1000,
			easing: "ease-in-out",
			once: true,
			mirror: false,
		});

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
	}, []);

	return (
		<>
			<Header />
			<Hero />

			<main id="main">
				{/* ======= About Section ======= */}
				<section id="about" className="about">
					<div className="container" data-aos="fade-up">
						<div className="section-header">
							<h2>About Us</h2>
							<p>
								Learn More <span>About Us</span>
							</p>
						</div>
						<div className="row gy-4">
							<div
								className="col-lg-7 position-relative about-img"
								style={{ backgroundImage: "url(/img/food.jpg)" }}
								data-aos="fade-up"
								data-aos-delay={150}
							/>
							<div
								className="col-lg-5 d-flex align-items-end"
								data-aos="fade-up"
								data-aos-delay={300}
							>
								<div className="content ps-0 ps-lg-5">
									<p className="fst-italic">
										Cheese Stick Koe adalah toko makanan ringan dengan
										spesialisasi
										<span className="fw-bold"> Cheese Stick Keju Edam</span>.
										Selain menjual cheese stick, toko kami juga menjual berbagai
										macam makanan dan minuman lainnya seperti, bolu, pie susu,
										strudel, es yakult, dan lain-lain. Kenapa harus membeli di
										toko kami:
									</p>
									<ul>
										<li>
											<i className="bi bi-check2-all" /> Menggunakan bahan
											premium.
										</li>
										<li>
											<i className="bi bi-check2-all" /> Harga terjangkau.
										</li>
										<li>
											<i className="bi bi-check2-all" /> Rasa bintang lima.
										</li>
									</ul>
									<p>
										Silahkan scroll ke bawah untuk melihat menu yang terdapat di
										toko kami. Jangan lupa untuk melihat bagian testimoni ya ...
										😉
									</p>
									<div className="position-relative mt-4">
										<Image
											src="/img/cheese_stick_2.jpeg"
											className="img-fluid"
											width={382.4}
											height={509.86}
											alt="Cheese Stick Tabung"
										/>
										{/* <Image
											src="/img/cheese_stick_2.jpeg"
											className="img-fluid"
											alt=""
										/> */}
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				{/* End About Section */}

				{/* ======= Menu Section ======= */}
				<section id="menu" className="menu section-bg">
					<div className="container" data-aos="fade-up">
						<div className="section-header">
							<h2>Our Menu</h2>
							<p>
								Check Our <span>Menu</span>
							</p>
						</div>
						<ul
							className="nav nav-tabs d-flex justify-content-center"
							data-aos="fade-up"
							data-aos-delay={200}
						>
							<li className="nav-item">
								<a
									className="nav-link active show"
									data-bs-toggle="tab"
									data-bs-target="#menu-popular"
								>
									<h4>Popular</h4>
								</a>
							</li>
							{/* End tab nav item */}
							<li className="nav-item">
								<a
									className="nav-link"
									data-bs-toggle="tab"
									data-bs-target="#menu-cakes"
								>
									<h4>Cakes</h4>{" "}
								</a>
								{/* End tab nav item */}
							</li>
							<li className="nav-item">
								<a
									className="nav-link"
									data-bs-toggle="tab"
									data-bs-target="#menu-snacks"
								>
									<h4>Snacks</h4>
								</a>
							</li>
							{/* End tab nav item */}
							<li className="nav-item">
								<a
									className="nav-link"
									data-bs-toggle="tab"
									data-bs-target="#menu-drinks"
								>
									<h4>Drinks</h4>
								</a>
							</li>
							{/* End tab nav item */}
						</ul>
						<div
							className="tab-content"
							data-aos="fade-up"
							data-aos-delay={300}
						>
							<div className="tab-pane fade active show" id="menu-popular">
								<div className="tab-header text-center">
									<p>Menu</p>
									<h3>Popular</h3>
								</div>
								<div className="row gy-5">
									<div className="col-lg-4 menu-item">
										<a
											href="/img/menu/cheese_stick_1kg.png"
											className="glightbox"
										>
											<Image
												src="/img/menu/cheese_stick_1kg.png"
												className="menu-img img-fluid"
												alt="Cheese Stick 1 kg"
												width={416}
												height={296}
											/>
										</a>
										<h4>Cheese Stick 1 Kg</h4>
										<p className="descriptions">
											Packing: Plastik pouch uk. 250 gr x 4 pcs
										</p>
										<p className="price">Rp. 150.000</p>
									</div>
									{/* Menu Item */}
									<div className="col-lg-4 menu-item">
										<a
											href="/img/menu/chees_stick_1_ons.png"
											className="glightbox"
										>
											<Image
												src="/img/menu/chees_stick_1_ons.png"
												className="menu-img img-fluid"
												alt="Cheese Stick 1 ons"
												width={416}
												height={296}
											/>
										</a>
										<h4>Cheese Stick 1 Ons</h4>
										<p className="descriptions">Ukuran 1 ons</p>
										<p className="price">Rp. 15.000</p>
									</div>
									{/* Menu Item */}
									<div className="col-lg-4 menu-item">
										<a href="/img/menu/bolu_marmer.png" className="glightbox">
											<Image
												src="/img/menu/bolu_marmer.png"
												className="menu-img img-fluid"
												alt="Bolu Marmer"
												width={416}
												height={296}
											/>
										</a>
										<h4>Bolu Marmer</h4>
										<p className="price mt-4">Rp. 50.000</p>
									</div>
									{/* Menu Item */}
									<div className="col-lg-4 menu-item">
										<a href="/img/menu/bolu_pisang.png" className="glightbox">
											<Image
												src="/img/menu/bolu_pisang.png"
												className="menu-img img-fluid"
												alt="Bolu Pisang"
												width={416}
												height={296}
											/>
										</a>
										<h4>Bolu Pisang</h4>
										<p className="price mt-4">Rp. 50.000</p>
									</div>
									{/* Menu Item */}
									<div className="col-lg-4 menu-item">
										<a href="/img/menu/bolu_zebra.png" className="glightbox">
											<Image
												src="/img/menu/bolu_zebra.png"
												className="menu-img img-fluid"
												alt="Bolu Zebra"
												width={416}
												height={296}
											/>
										</a>
										<h4>Bolu Zebra</h4>
										<p className="price mt-4">Rp. 50.000</p>
									</div>
									{/* Menu Item */}
									<div className="col-lg-4 menu-item">
										<a
											href="/img/menu/bolu_marmer_pan.png"
											className="glightbox"
										>
											<Image
												src="/img/menu/bolu_marmer_pan.png"
												className="menu-img img-fluid"
												alt="Bolu Marmer Pandan"
												width={416}
												height={296}
											/>
										</a>
										<h4>Bolu Marmer Pandan</h4>
										<p className="price mt-4">Rp. 50.000</p>
									</div>
									{/* Menu Item */}
								</div>
							</div>
							{/* End Popular Menu Content */}
							<div className="tab-pane fade" id="menu-cakes">
								<div className="tab-header text-center">
									<p>Menu</p>
									<h3>Cakes</h3>
								</div>
								<div className="row gy-5">
									<div className="col-lg-4 menu-item">
										<a
											href="/img/menu/bolu_coklat_coc.png"
											className="glightbox"
										>
											<Image
												src="/img/menu/bolu_coklat_coc.png"
												className="menu-img img-fluid"
												alt="Bolu Coklat Chocochip"
												width={416}
												height={296}
											/>
										</a>
										<h4>Bolu Coklat Chocochip</h4>
										<p className="price mt-4">Rp. 50.000</p>
									</div>
									{/* Menu Item */}
									<div className="col-lg-4 menu-item">
										<a href="/img/menu/bolu_sukade.png" className="glightbox">
											<Image
												src="/img/menu/bolu_sukade.png"
												className="menu-img img-fluid"
												alt="Bolu Sukade"
												width={416}
												height={296}
											/>
										</a>
										<h4>Bolu Sukade</h4>
										<p className="price mt-4">Rp. 50.000</p>
									</div>
									{/* Menu Item */}
									<div className="col-lg-4 menu-item">
										<a href="/img/menu/bolu_keju.png" className="glightbox">
											<Image
												src="/img/menu/bolu_keju.png"
												className="menu-img img-fluid"
												alt="Bolu Keju"
												width={416}
												height={296}
											/>
										</a>
										<h4>Bolu Keju</h4>
										<p className="price mt-4">Rp. 50.000</p>
									</div>
									{/* Menu Item */}
									<div className="col-lg-4 menu-item">
										<a href="/img/menu/bolu_meses.png" className="glightbox">
											<Image
												src="/img/menu/bolu_meses.png"
												className="menu-img img-fluid"
												alt="Bolu Meses"
												width={416}
												height={296}
											/>
										</a>
										<h4>Bolu Meses</h4>
										<p className="price mt-4">Rp. 50.000</p>
									</div>
									{/* Menu Item */}
									<div className="col-lg-4 menu-item">
										<a
											href="/img/menu/brownies_coklat.png"
											className="glightbox"
										>
											<Image
												src="/img/menu/brownies_coklat.png"
												className="menu-img img-fluid"
												alt="Bolu Coklat"
												width={416}
												height={296}
											/>
										</a>
										<h4>Brownies Coklat</h4>
										<p className="price mt-4">Rp. 50.000</p>
									</div>
									{/* Menu Item */}
									<div className="col-lg-4 menu-item">
										<a href="/img/menu/brownies_keju.png" className="glightbox">
											<Image
												src="/img/menu/brownies_keju.png"
												className="menu-img img-fluid"
												alt="Brownies Keju"
												width={416}
												height={296}
											/>
										</a>
										<h4>Brownies Keju</h4>
										<p className="price mt-4">Rp. 50.000</p>
									</div>
									{/* Menu Item */}
									<div className="col-lg-4 menu-item">
										<a
											href="/img/menu/brownies_coklat_keju.png"
											className="glightbox"
										>
											<Image
												src="/img/menu/brownies_coklat_keju.png"
												className="menu-img img-fluid"
												alt="Brownies Coklat Keju"
												width={416}
												height={296}
											/>
										</a>
										<h4>Brownies Coklat Keju</h4>
										<p className="price mt-4">Rp. 50.000</p>
									</div>
									{/* Menu Item */}
									<div className="col-lg-4 menu-item">
										<a
											href="/img/menu/bolu_gula_merah.png"
											className="glightbox"
										>
											<Image
												src="/img/menu/bolu_gula_merah.png"
												className="menu-img img-fluid"
												alt="Bolu Gula Merah"
												width={416}
												height={296}
											/>
										</a>
										<h4>Bolu Gula Merah</h4>
										<p className="price mt-4">Rp. 50.000</p>
									</div>
									{/* Menu Item */}
								</div>
							</div>
							{/* End Cakes Menu Content */}
							<div className="tab-pane fade" id="menu-snacks">
								<div className="tab-header text-center">
									<p>Menu</p>
									<h3>Snacks</h3>
								</div>
								<div className="row gy-5">
									<div className="col-lg-4 menu-item">
										<a href="/img/menu/pie susu.png" className="glightbox">
											<Image
												src="/img/menu/pie susu.png"
												className="menu-img img-fluid"
												alt="Pie Susu"
												width={416}
												height={296}
											/>
										</a>
										<h4>Pie Susu</h4>
										<p className="price mt-4">Rp. 3.500/pcs</p>
									</div>
									{/* Menu Item */}
									<div className="col-lg-4 menu-item">
										<a
											href="/img/menu/cheese_stick_tabung.png"
											className="glightbox"
										>
											<Image
												src="/img/menu/cheese_stick_tabung.png"
												className="menu-img img-fluid"
												alt="Cheese Stick Tabung"
												width={416}
												height={296}
											/>
										</a>
										<h4>Cheese Stick Tabung</h4>
										<p className="descriptions">Ukuran 150 gram</p>
										<p className="price">Rp. 35.000</p>
									</div>
									{/* Menu Item */}
									<div className="col-lg-4 menu-item">
										<a
											href="/img/menu/banana_strudel.png"
											className="glightbox"
										>
											<Image
												src="/img/menu/banana_strudel.png"
												className="menu-img img-fluid"
												alt="Banana Strudel"
												width={416}
												height={296}
											/>
										</a>
										<h4>Banana Strudel</h4>
										<p className="price mt-4">Rp. 45.000</p>
									</div>
									{/* Menu Item */}
								</div>
							</div>
							{/* End Snacks Menu Content */}
							<div className="tab-pane fade" id="menu-drinks">
								<div className="tab-header text-center">
									<p>Menu</p>
									<h3>Drinks</h3>
								</div>
								<div className="row gy-5">
									<div className="col-lg-4 menu-item">
										<a href="/img/menu/yakult_anggur.png" className="glightbox">
											<Image
												src="/img/menu/yakult_anggur.png"
												className="menu-img img-fluid"
												alt="Es Yakult - Anggur"
												width={416}
												height={356}
											/>
										</a>
										<h4>Es Yakult - Anggur</h4>
										<p className="price mt-4">Rp. 8.000</p>
									</div>
									{/* Menu Item */}
									<div className="col-lg-4 menu-item">
										<a href="/img/menu/yakult_jambu.png" className="glightbox">
											<Image
												src="/img/menu/yakult_jambu.png"
												className="menu-img img-fluid"
												alt="Es Yakult - Jambu"
												width={416}
												height={356}
											/>
										</a>
										<h4>Es Yakult - Jambu</h4>
										<p className="price mt-4">Rp. 8.000</p>
									</div>
									{/* Menu Item */}
									<div className="col-lg-4 menu-item">
										<a href="/img/menu/yakult_mangga.png" className="glightbox">
											<Image
												src="/img/menu/yakult_mangga.png"
												className="menu-img img-fluid"
												alt="Es Yakult - Mangga"
												width={416}
												height={356}
											/>
										</a>
										<h4>Es Yakult - Mangga</h4>
										<p className="price mt-4">Rp. 8.000</p>
									</div>
									{/* Menu Item */}
									<div className="col-lg-4 menu-item">
										<a href="/img/menu/yakult_jeruk.png" className="glightbox">
											<Image
												src="/img/menu/yakult_jeruk.png"
												className="menu-img img-fluid"
												alt="Es Yakult - Jeruk"
												width={416}
												height={356}
											/>
										</a>
										<h4>Es Yakult - Jeruk</h4>
										<p className="price mt-4">Rp. 8.000</p>
									</div>
									{/* Menu Item */}
									<div className="col-lg-4 menu-item">
										<a href="/img/menu/yakult_melon.png" className="glightbox">
											<Image
												src="/img/menu/yakult_melon.png"
												className="menu-img img-fluid"
												alt="Es Yakult - Melon"
												width={416}
												height={356}
											/>
										</a>
										<h4>Es Yakult - Melon</h4>
										<p className="price mt-4">Rp. 8.000</p>
									</div>
									{/* Menu Item */}
									<div className="col-lg-4 menu-item">
										<a href="/img/menu/yakult_sirsak.png" className="glightbox">
											<Image
												src="/img/menu/yakult_sirsak.png"
												className="menu-img img-fluid"
												alt="Es Yakult - Sirsak"
												width={416}
												height={356}
											/>
										</a>
										<h4>Es Yakult - Sirsak</h4>
										<p className="price mt-4">Rp. 8.000</p>
									</div>
									{/* Menu Item */}
									<div className="col-lg-4 menu-item">
										<a
											href="/img/menu/yakult_strawberry.png"
											className="glightbox"
										>
											<Image
												src="/img/menu/yakult_strawberry.png"
												className="menu-img img-fluid"
												alt="Es Yakult - Strawberry"
												width={416}
												height={356}
											/>
										</a>
										<h4>Es Yakult - Strawberry</h4>
										<p className="price mt-4">Rp. 8.000</p>
									</div>
									{/* Menu Item */}
									<div className="col-lg-4 menu-item">
										<a href="/img/menu/yakult_leci.png" className="glightbox">
											<Image
												src="/img/menu/yakult_leci.png"
												className="menu-img img-fluid"
												alt="Es Yakult - Leci"
												width={416}
												height={356}
											/>
										</a>
										<h4>Es Yakult - Leci</h4>
										<p className="price mt-4">Rp. 8.000</p>
									</div>
									{/* Menu Item */}
								</div>
							</div>
							{/* End Drinks Menu Content */}
						</div>
					</div>
				</section>
				{/* End Menu Section */}

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
														Yang suka sama yang kres-kres dan keju-keju boleh
														coba ini nih, @cheesestick_koe.
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
			</main>
			{/* End #main */}

			<Footer />

			<div className="floating_btn">
				<a target="_blank" href="https://wa.link/mvdgi5">
					<div className="contact_icon">
						<i className="bi bi-whatsapp my-float"></i>
					</div>
				</a>
				<p className="text_icon">Pesan sekarang!</p>
			</div>
		</>
	);
}

export default Home;
