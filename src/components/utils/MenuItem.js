import Image from "next/image";
import React from "react";

export default function MenuItem({ image, name, description = "", price }) {
	return (
		<div className="col-lg-4 menu-item">
			<a href={`/img/menu/${image}`} className="glightbox">
				<Image
					src={`/img/menu/${image}`}
					className="menu-img w-100"
					alt={name}
					width={416}
					height={296}
				/>
			</a>
			<h4>{name}</h4>
			{description && <p className="descriptions">{description}</p>}
			<p className="price">Rp. {price}</p>
		</div>
	);
}
