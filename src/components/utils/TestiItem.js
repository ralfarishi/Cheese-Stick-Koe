import Image from "next/image";
import React from "react";

export default function TestiItem({ quote, link, name, work, stars, image }) {
	const generateStars = () => {
		const fullStars = Math.min(Math.floor(stars), 5);
		const hasHalfStar = stars % 1 !== 0;

		const starArray = Array.from({ length: fullStars }, (_, index) => (
			<i key={index} className="bi bi-star-fill" />
		));

		if (hasHalfStar) {
			starArray.push(<i key="half" className="bi bi-star-half" />);
		}

		const emptyStars = Math.max(5 - starArray.length, 0);

		starArray.push(
			...Array.from({ length: emptyStars }, (_, index) => (
				<i key={`empty-${index}`} className="bi bi-star" />
			))
		);

		return starArray;
	};

	return (
		<div className="swiper-slide">
			<div className="testimonial-item">
				<div className="row gy-4 justify-content-center">
					<div className="col-lg-6">
						<div className="testimonial-content">
							<p>
								<i className="bi bi-quote quote-icon-left" />
								{quote}
								<i className="bi bi-quote quote-icon-right" />
							</p>
							<a href={link} target="_blank">
								<h3>{name}</h3>
							</a>
							<h4>{work}</h4>
							<div className="stars">{generateStars()}</div>
						</div>
					</div>
					<div className="col-lg-2 text-center">
						<Image
							src={`/img/testimonials/${image}`}
							className="img-fluid testimonial-img"
							alt={name}
							width={196}
							height={196}
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
