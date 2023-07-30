import Image from "next/image";
import { useEffect, useState } from "react";

export default function Modal() {
	const [isModalVisible, setIsModalVisible] = useState(false);

	useEffect(() => {
		setIsModalVisible(true);
	}, []);

	const closeModal = () => {
		setIsModalVisible(false);
	};
	return (
		<>
			{isModalVisible && (
				<div
					className="modal fade show modal-overlay"
					id="exampleModal"
					tabIndex="-1"
					aria-labelledby="exampleModalLabel"
					aria-hidden="true"
					style={{ display: "block" }}
					data-aos="zoom-out"
				>
					<div className="modal-dialog modal-lg">
						<div className="modal-content">
							<button
								type="button"
								className="btn-close ms-auto my-2 mx-2"
								data-bs-dismiss="modal"
								aria-label="Close"
								onClick={closeModal}
							></button>
							<div className="modal-body">
								<div className="row justify-content-center">
									<div className="col">
										<Image
											src="/img/logo-halal.png"
											alt="Logo halal"
											className="img-fluid mx-auto d-block"
											width={500}
											height={500}
										/>
									</div>
								</div>
								<div className="row justify-content-center">
									<div className="col">
										<div className="content">
											<h2 className="text-center mt-2">
												<span className="text-danger text-uppercase">
													Perhatian!
												</span>
											</h2>

											<p className="text-center">
												Kami dengan bangga mengumumkan bahwa produk kami telah
												berhasil memperoleh sertifikasi halal resmi. Dengan ini,
												konsumen kami dapat yakin bahwa produk ini telah
												diproduksi sesuai dengan standar dan aturan yang ketat
												dalam proses pembuatan yang halal. Kami berkomitmen
												untuk terus menyediakan produk berkualitas tinggi yang
												sesuai dengan kepercayaan dan kebutuhan pelanggan kami.
												Terima kasih atas dukungan dan kepercayaan Anda pada
												produk halal kami.
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			)}
		</>
	);
}
