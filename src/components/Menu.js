import Image from "next/image";
import { useEffect } from "react";

export default function Menu() {
	useEffect(() => {
		import("bootstrap/dist/js/bootstrap.bundle.min.js");
	});

	return (
		<>
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
					<div className="tab-content" data-aos="fade-up" data-aos-delay={300}>
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
									<p className="price">Rp. 175.000</p>
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
									<p className="price mt-4">Rp. 75.000</p>
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
									<p className="price mt-4">Rp. 75.000</p>
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
									<p className="price mt-4">Rp. 75.000</p>
								</div>
								{/* Menu Item */}
								<div className="col-lg-4 menu-item">
									<a href="/img/menu/bolu_marmer_pan.png" className="glightbox">
										<Image
											src="/img/menu/bolu_marmer_pan.png"
											className="menu-img img-fluid"
											alt="Bolu Marmer Pandan"
											width={416}
											height={296}
										/>
									</a>
									<h4>Bolu Marmer Pandan</h4>
									<p className="price mt-4">Rp. 75.000</p>
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
									<a href="/img/menu/bolu_coklat_coc.png" className="glightbox">
										<Image
											src="/img/menu/bolu_coklat_coc.png"
											className="menu-img img-fluid"
											alt="Bolu Coklat Chocochip"
											width={416}
											height={296}
										/>
									</a>
									<h4>Bolu Coklat Chocochip</h4>
									<p className="price mt-4">Rp. 75.000</p>
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
									<p className="price mt-4">Rp. 75.000</p>
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
									<p className="price mt-4">Rp. 75.000</p>
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
									<p className="price mt-4">Rp. 75.000</p>
								</div>
								{/* Menu Item */}
								<div className="col-lg-4 menu-item">
									<a href="/img/menu/brownies_coklat.png" className="glightbox">
										<Image
											src="/img/menu/brownies_coklat.png"
											className="menu-img img-fluid"
											alt="Bolu Coklat"
											width={416}
											height={296}
										/>
									</a>
									<h4>Brownies Coklat</h4>
									<p className="price mt-4">Rp. 60.000</p>
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
									<p className="price mt-4">Rp. 60.000</p>
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
									<p className="price mt-4">Rp. 65.000</p>
								</div>
								{/* Menu Item */}
								<div className="col-lg-4 menu-item">
									<a href="/img/menu/bolu_gula_merah.png" className="glightbox">
										<Image
											src="/img/menu/bolu_gula_merah.png"
											className="menu-img img-fluid"
											alt="Bolu Gula Merah"
											width={416}
											height={296}
										/>
									</a>
									<h4>Bolu Gula Merah</h4>
									<p className="price mt-4">Rp. 75.000</p>
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
									<a href="/img/menu/banana_strudel.png" className="glightbox">
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
		</>
	);
}
