import Image from "next/image";
import React, { useEffect } from "react";

function Header() {
	return (
		<>
			{/* ======= Header ======= */}
			<header
				id="header"
				className="header fixed-top d-flex align-items-center"
			>
				<div className="container d-flex align-items-center justify-content-between">
					<a
						href="/"
						className="logo d-flex align-items-center me-auto me-lg-0"
					>
						<Image
							width={40}
							height={40}
							src="/favicon.ico"
							alt="Cheese Stick Koe Logo"
							className="img"
						/>
						<h1 className="title">Cheese Stick Koe</h1>
					</a>
					<nav id="navbar" className="navbar">
						<ul>
							<li>
								<a href="#hero">Home</a>
							</li>
							<li>
								<a href="#about">About</a>
							</li>
							<li>
								<a href="#menu">Menu</a>
							</li>
							<li>
								<a href="#gallery">Gallery</a>
							</li>
							<li>
								<a href="#testimonials">Testimonial</a>
							</li>
						</ul>
					</nav>
					{/* .navbar */}
					<a className="btn-book-a-table" href="#menu">
						Order now
					</a>
					<i className="mobile-nav-toggle mobile-nav-show bi bi-list" />
					<i className="mobile-nav-toggle mobile-nav-hide d-none bi bi-x" />
				</div>
			</header>
			{/* End Header */}
		</>
	);
}

export default Header;
