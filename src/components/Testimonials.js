import { useEffect } from "react";

import Swiper from "swiper/bundle";
import TestiItem from "@/components/utils/TestiItem";

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
							<TestiItem
								quote="Cheese stick-nya renyah, harus coba!"
								link="https://www.instagram.com/p/Cw1lSury0cp/"
								name="Bopak Castello"
								work="Celebrity"
								stars={5}
								image="bopak.jpeg"
							/>
							<TestiItem
								quote="Gurih banget cheese stick-nya!"
								link="https://www.instagram.com/stories/highlights/17965840574637480/"
								name="Nyak Kopsah"
								work="Selebgram"
								stars={4.5}
								image="kopsah.jpg"
							/>
							<TestiItem
								quote="Cheese stick &amp; pie susunya juaraaa."
								link="https://www.instagram.com/stories/highlights/17875161236808935/"
								name="Audy Item"
								work="Celebrity"
								stars={4.5}
								image="audy.png"
							/>
							<TestiItem
								quote="Kejunya sangat melekat dan berasa sekali."
								link="https://www.instagram.com/stories/highlights/18016160635396785/"
								name="Dustin Tiffani"
								work="Selebgram"
								stars={4.5}
								image="dustin.jpg"
							/>
							<TestiItem
								quote="Buat yang suka nyemil kaya aku boleh coba."
								link="https://www.instagram.com/stories/highlights/17951403782157014/"
								name="Fitri Salhuteru"
								work="Selebgram"
								stars={4}
								image="fitri.jpg"
							/>
							<TestiItem
								quote="Yang suka sama yang kres-kres dan keju-keju boleh coba ini nih, @cheesestick_koe."
								link="https://www.instagram.com/stories/highlights/17945089205058105/"
								name="Tike Priyatnakusuma"
								work="Celebrity"
								stars={5}
								image="tike.jpg"
							/>
							<TestiItem
								quote='Makanan untuk nyemil "cheese stick", pas banget buat nonton TV.'
								link="https://www.instagram.com/stories/highlights/17956963832173114/"
								name="Gunawan Sudrajat"
								work="Actor &amp; Model"
								stars={5}
								image="gunawan.jpg"
							/>
						</div>
						<div className="swiper-pagination" />
					</div>
				</div>
			</section>
			{/* End Testimonials Section */}
		</>
	);
}
