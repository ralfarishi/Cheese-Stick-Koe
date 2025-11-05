import "@/styles/main.css";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "swiper/css/bundle";
import "@/styles/glightbox.min.css";

import { Analytics } from "@vercel/analytics/react";

import { DefaultSeo } from "next-seo";

export default function App({ Component, pageProps }) {
	return (
		<>
			<DefaultSeo
				title="Cheese Stick Koe: Makanan Ringan Bekasi"
				description="Temukan cheese sticks terbaik dan enak untuk makanan ringan sehat dan praktis. Kami menyediakan berbagai pilihan rasa dan bahan yang berkualitas."
				openGraph={{
					type: "website",
					locale: "id_ID",
					url: "https://www.cheesestick-koe.my.id/",
					siteName: "Cheese Stick Koe",
					description:
						"Temukan cheese sticks terbaik dan enak untuk makanan ringan sehat dan praktis. Kami menyediakan berbagai pilihan rasa dan bahan yang berkualitas.",
					images: [
						{
							url: "/img/cheese_stick_banner.png",
							width: 800,
							height: 600,
							alt: "Cheese Stick Koe",
						},
					],
				}}
				canonical="https://www.cheesestick-koe.my.id/"
				additionalMetaTags={[
					{ name: "author", content: "Cheese Stick Koe" },
					{ name: "language", content: "id-ID" },
					{
						name: "keywords",
						content:
							"cheese stick bekasi, snack rumahan bekasi, jual cemilan enak, bolu bekasi, pie susu",
					},
				]}
				additionalLinkTags={[
					{
						rel: "icon",
						href: "/favicon.ico",
					},
				]}
			/>
			<Component {...pageProps} />
			<Analytics />
		</>
	);
}
