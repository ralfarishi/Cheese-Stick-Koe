import Image from "next/image";
import { useEffect } from "react";
import MenuItem from "./utils/MenuItem";

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
								<MenuItem
									image="cheese_stick_1kg.png"
									name="Cheese Stick 1 Kg"
									description="Packing: Plastik pouch uk. 250 gr x 4 pcs"
									price="150.000"
								/>
								<MenuItem
									image="chees_stick_1_ons.png"
									name="Cheese Stick 1 Ons"
									description="Ukuran 1 ons"
									price="15.000"
								/>
								<MenuItem
									image="bolu_marmer.png"
									name="Bolu Marmer"
									price="75.000"
								/>
								<MenuItem
									image="bolu_pisang.png"
									name="Bolu Pisang"
									price="75.000"
								/>
								<MenuItem
									image="bolu_zebra.png"
									name="Bolu Zebra"
									price="75.000"
								/>
								<MenuItem
									image="bolu_marmer_pan.png"
									name="Bolu Marmer Pandan"
									price="75.000"
								/>
							</div>
						</div>
						{/* End Popular Menu Content */}
						<div className="tab-pane fade" id="menu-cakes">
							<div className="tab-header text-center">
								<p>Menu</p>
								<h3>Cakes</h3>
							</div>
							<div className="row gy-5">
								<MenuItem
									image="bolu_coklat_coc.png"
									name="Bolu Coklat Chocochip"
									price="75.000"
								/>
								<MenuItem
									image="bolu_sukade.png"
									name="Bolu Sukade"
									price="75.000"
								/>
								<MenuItem
									image="bolu_keju.png"
									name="Bolu Keju"
									price="75.000"
								/>
								<MenuItem
									image="bolu_meses.png"
									name="Bolu Meses"
									price="75.000"
								/>
								<MenuItem
									image="brownies_coklat.png"
									name="Brownies Coklat"
									price="60.000"
								/>
								<MenuItem
									image="brownies_keju.png"
									name="Brownies Keju"
									price="60.000"
								/>
								<MenuItem
									image="brownies_coklat_keju.png"
									name="Brownies Coklat Keju"
									price="65.000"
								/>
								<MenuItem
									image="bolu_gula_merah.png"
									name="Bolu Gula Merah"
									price="75.000"
								/>
							</div>
						</div>
						{/* End Cakes Menu Content */}
						<div className="tab-pane fade" id="menu-snacks">
							<div className="tab-header text-center">
								<p>Menu</p>
								<h3>Snacks</h3>
							</div>
							<div className="row gy-5">
								<MenuItem
									image="pie susu.png"
									name="Pie Susu"
									price="3.500/pcs"
								/>
								<MenuItem
									image="cheese_stick_tabung.png"
									name="Cheese Stick Tabung"
									description="Ukuran 150 gram"
									price="35.000"
								/>
								<MenuItem
									image="banana_strudel.png"
									name="Banana Strudel"
									price="45.000"
								/>
							</div>
						</div>
						{/* End Snacks Menu Content */}
						<div className="tab-pane fade" id="menu-drinks">
							<div className="tab-header text-center">
								<p>Menu</p>
								<h3>Drinks</h3>
							</div>
							<div className="row gy-5">
								<MenuItem
									image="yakult_anggur.png"
									name="Es Yakult - Anggur"
									price="8.000"
								/>
								<MenuItem
									image="yakult_jambu.png"
									name="Es Yakult - Jambu"
									price="8.000"
								/>
								<MenuItem
									image="yakult_mangga.png"
									name="Es Yakult - Mangga"
									price="8.000"
								/>
								<MenuItem
									image="yakult_jeruk.png"
									name="Es Yakult - Jeruk"
									price="8.000"
								/>
								<MenuItem
									image="yakult_melon.png"
									name="Es Yakult - Melon"
									price="8.000"
								/>
								<MenuItem
									image="yakult_sirsak.png"
									name="Es Yakult - Sirsak"
									price="8.000"
								/>
								<MenuItem
									image="yakult_strawberry.png"
									name="Es Yakult - Strawberry"
									price="8.000"
								/>
								<MenuItem
									image="yakult_leci.png"
									name="Es Yakult - Leci"
									price="8.000"
								/>
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
