import Image from "next/image";

export default function About() {
	return (
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
								Cheese Stick Koe adalah toko makanan ringan dengan spesialisasi
								<span className="fw-bold"> Cheese Stick Keju Edam</span>. Selain
								menjual cheese stick, toko kami juga menjual berbagai macam
								makanan dan minuman lainnya seperti, bolu, pie susu, strudel, es
								yakult, dan lain-lain. Kenapa harus membeli di toko kami:
							</p>
							<ul>
								<li>
									<i className="bi bi-check2-all" /> Menggunakan bahan premium.
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
								toko kami. Jangan lupa untuk melihat bagian testimoni ya ... 😉
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
	);
}
