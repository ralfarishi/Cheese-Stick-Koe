import Image from "next/image";
import Link from "next/link";
import React from "react";

function Header() {
	return (
		<>
			{/* ======= Header ======= */}
			<header
				id="header"
				className="header fixed-top d-flex align-items-center"
			>
				<div className="container d-flex align-items-center justify-content-between">
					<Link
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
					</Link>
					<nav id="navbar" className="navbar">
						<ul>
							<li>
								<Link href="#hero">Home</Link>
							</li>
							<li>
								<Link href="#about">About</Link>
							</li>
							<li>
								<Link href="#menu">Menu</Link>
							</li>
							<li>
								<Link href="#gallery">Gallery</Link>
							</li>
							<li>
								<Link href="#testimonials">Testimonial</Link>
							</li>
						</ul>
					</nav>
					{/* .navbar */}
					<Link className="btn-book-a-table" href="#menu">
						Order now
					</Link>
					<i className="mobile-nav-toggle mobile-nav-show bi bi-list" />
					<i className="mobile-nav-toggle mobile-nav-hide d-none bi bi-x" />
				</div>
			</header>
			{/* End Header */}
		</>
	);
}

export default Header;
