import "@/styles/main.css";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "swiper/css/bundle";
import "@/styles/glightbox.min.css";

import { DefaultSeo } from "next-seo";

export default function App({ Component, pageProps }) {
	return (
		<>
			<DefaultSeo
				title="Cheese Stick Koe: Makanan Ringan Bekasi"
				description="Temukan cheese sticks terbaik dan enak untuk makanan ringan sehat dan praktis. Kami menyediakan berbagai pilihan rasa dan bahan yang berkualitas."
				openGraph={{
					type: "website",
					locale: "en_IE",
					url: "https://www.cheesestick-koe.my.id/",
					siteName: "Cheese Stick Koe",
					description:
						"Temukan cheese sticks terbaik dan enak untuk makanan ringan sehat dan praktis. Kami menyediakan berbagai pilihan rasa dan bahan yang berkualitas.",
				}}
				canonical="https://www.cheesestick-koe.my.id/"
				keywords="jual cheese stick bekasi, toko makanan ringan bekasi, cheese stick keju edam, jual cheese stick"
				additionalLinkTags={[
					{
						rel: "icon",
						href: "/favicon.ico",
					},
				]}
			/>
			<Component {...pageProps} />
		</>
	);
}
