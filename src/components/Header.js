import Image from "next/image";
import React, { useEffect } from "react";

function Header() {
	useEffect(() => {
		/**
		 * Navbar links active state on scroll
		 */
		let navbarlinks = document.querySelectorAll("#navbar a");

		function navbarlinksActive() {
			navbarlinks.forEach((navbarlink) => {
				if (!navbarlink.hash) return;

				let section = document.querySelector(navbarlink.hash);
				if (!section) return;

				let position = window.scrollY + 200;

				if (
					position >= section.offsetTop &&
					position <= section.offsetTop + section.offsetHeight
				) {
					navbarlink.classList.add("active");
				} else {
					navbarlink.classList.remove("active");
				}
			});
		}
		window.addEventListener("load", navbarlinksActive);
		document.addEventListener("scroll", navbarlinksActive);

		/**
		 * Mobile nav toggle
		 */
		const mobileNavShow = document.querySelector(".mobile-nav-show");
		const mobileNavHide = document.querySelector(".mobile-nav-hide");

		document.querySelectorAll(".mobile-nav-toggle").forEach((el) => {
			el.addEventListener("click", function (event) {
				event.preventDefault();
				mobileNavToogle();
			});
		});

		function mobileNavToogle() {
			document.querySelector("body").classList.toggle("mobile-nav-active");
			mobileNavShow.classList.toggle("d-none");
			mobileNavHide.classList.toggle("d-none");
		}

		/**
		 * Hide mobile nav on same-page/hash links
		 */
		document.querySelectorAll("#navbar a").forEach((navbarlink) => {
			if (!navbarlink.hash) return;

			let section = document.querySelector(navbarlink.hash);
			if (!section) return;

			navbarlink.addEventListener("click", () => {
				if (document.querySelector(".mobile-nav-active")) {
					mobileNavToogle();
				}
			});
		});
	});

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
