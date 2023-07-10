import React from "react";

function Footer() {
	return (
		<>
			{/* ======= Footer ======= */}
			<footer id="footer" className="footer">
				<div className="container">
					<div className="row gy-3">
						<div className="col-lg-4 col-md-6 footer-links d-flex">
							<i className="bi bi-telephone icon" />
							<div>
								<h4>Order</h4>
								<a href="https://wa.link/mvdgi5" target="_blank">
									<p>
										<i className="bi bi-whatsapp" /> <strong>Admin 1:</strong>{" "}
										+62 811-973-173
										<br />
									</p>
								</a>
								<a href="https://wa.link/8jw1yj" target="_blank">
									<p>
										<i className="bi bi-whatsapp" /> <strong>Admin 2:</strong>{" "}
										+62 812-8147-2627
										<br />
									</p>
								</a>
							</div>
						</div>
						<div className="col-lg-4 col-md-6 footer-links d-flex">
							<i className="bi bi-clock icon" />
							<div>
								<h4>Opening Hours</h4>
								<p>
									<strong>Everyday:</strong> until 22:00 PM
								</p>
							</div>
						</div>
						<div className="col-lg-4 col-md-6 footer-links">
							<h4>Follow Us</h4>
							<div className="social-links d-flex">
								<a
									href="https://www.instagram.com/cheesestick_koe"
									className="instagram"
									target="_blank"
								>
									<i className="bi bi-instagram" />
								</a>
							</div>
						</div>
					</div>
				</div>
				<div className="container">
					<div className="copyright">
						Modified by{" "}
						<strong>
							<span>
								<a href="https://alfarishi.xyz" target="_blank">
									Al Farishi
								</a>
							</span>
						</strong>
						. All Rights Reserved
					</div>
					<div className="credits">
						Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
					</div>
				</div>
			</footer>
			{/* End Footer */}
		</>
	);
}

export default Footer;
