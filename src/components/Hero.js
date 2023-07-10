import Image from "next/image";
import React from "react";

function Hero() {
	return (
		<>
			{/* ======= Hero Section ======= */}
			<section id="hero" className="hero d-flex align-items-center section-bg">
				<div className="container">
					<div className="row justify-content-between gy-5">
						<div className="col-lg-5 order-2 order-lg-1 d-flex flex-column justify-content-center align-items-center align-items-lg-start text-center text-lg-start">
							<h2 data-aos="fade-up">
								Enjoy Your Cake
								<br />
								And Snack
							</h2>
							<div className="d-flex" data-aos="fade-up" data-aos-delay={200}>
								<a href="#menu" className="btn-book-a-table">
									<span>Lihat Menu</span>
								</a>
							</div>
						</div>
						<div className="col-lg-5 order-1 order-lg-2 text-center text-lg-start">
							<Image
								src="/img/cheese_stick_banner.png"
								width={526}
								height={526}
								className="img-fluid"
								alt="Cheese Stick Banner"
								data-aos="zoom-out"
								data-aos-delay={300}
							/>
							{/* <img
								src="img/cheese_stick_banner.png"
								className="img-fluid"
								alt=""
								data-aos="zoom-out"
								data-aos-delay={300}
							/> */}
						</div>
					</div>
				</div>
			</section>
			{/* End Hero Section */}
		</>
	);
}

export default Hero;
