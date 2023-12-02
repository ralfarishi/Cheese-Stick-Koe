import Image from "next/image";
import React from "react";

export default function GalleryItem({ image, name }) {
	return (
		<div className="swiper-slide">
			<a
				className="glightbox"
				data-gallery="images-gallery"
				href={`/img/galleries/${image}`}
			>
				<Image
					src={`/img/galleries/${image}`}
					className="img-fluid"
					alt={name}
					width={243}
					height={263}
				/>
			</a>
		</div>
	);
}
