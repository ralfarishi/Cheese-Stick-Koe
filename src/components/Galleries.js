import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import GalleryItem from "./Items/GalleryItem";
import { Grid3x3, LayoutGrid } from "lucide-react";

export default function Galleries() {
  const [layout, setLayout] = useState("grid"); // grid or masonry
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const galleryItems = [
    {
      image: "varian-bolu.jpeg",
      name: "Varian Bolu",
      category: "cakes",
      height: "medium ",
    },
    {
      image: "varian-yakult.jpeg",
      name: "Varian Yakult",
      category: "drinks",
      height: "tall",
    },
    {
      image: "cheese-stick-tabung.jpeg",
      name: "Cheese Stick Tabung",
      category: "snacks",
      height: "short",
    },
    {
      image: "potongan-bolu.jpeg",
      name: "Potongan Bolu",
      category: "cakes",
      height: "medium",
    },
    {
      image: "bolu-kardus.jpeg",
      name: "Bolu Kardus",
      category: "cakes",
      height: "tall",
    },
    {
      image: "cheese-stick-pouch.jpeg",
      name: "Cheese Stick Pouch",
      category: "snacks",
      height: "medium",
    },
    {
      image: "cheese-stick-pouch-2.jpeg",
      name: "Cheese Stick Pouch 2",
      category: "snacks",
      height: "short",
    },
  ];

  return (
    <section
      id="gallery"
      className="section relative overflow-hidden"
      style={{ backgroundColor: "var(--color-surface-30)" }}
      ref={ref}
    >
      <div className="absolute inset-0 opacity-5">
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-accent-500 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          className="section-header max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h3 className="section-subtitle">Gallery</h3>
          <h2 className="section-title">
            Check Our{" "}
            <span className="text-primary dark:text-primary">Gallery</span>
          </h2>
          <p className="text-secondary-600 dark:text-secondary-400 mt-4">
            Lihat koleksi produk dan momen spesial kami
          </p>
        </motion.div>

        <motion.div
          className="hidden md:flex justify-center gap-3 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
        >
          <button
            onClick={() => setLayout("grid")}
            className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2 ${
              layout === "grid"
                ? "bg-primary dark:bg-primary text-white"
                : "dark:bg-surface-50 dark:text-bg-white dark:hover:bg-surface-40"
            }`}
          >
            <Grid3x3 size={18} />
            <span>Grid</span>
          </button>
          <button
            onClick={() => setLayout("masonry")}
            className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2 ${
              layout === "masonry"
                ? "bg-primary dark:bg-primary text-white"
                : "dark:bg-surface-50 dark:text-bg-white dark:hover:bg-surface-40"
            }`}
          >
            <LayoutGrid size={18} />
            <span>Masonry</span>
          </button>
        </motion.div>

        <motion.div
          className={
            layout === "grid"
              ? "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
              : "columns-2 md:columns-3 lg:columns-4 gap-4"
          }
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3 }}
        >
          {galleryItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.4 + index * 0.1 }}
              className={layout === "masonry" ? "mb-4 break-inside-avoid" : ""}
            >
              <GalleryItem {...item} layout={layout} />
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.2 }}
        >
          <p className="text-secondary-600 dark:text-secondary-400 mb-6">
            Ingin melihat lebih banyak produk?
          </p>
          <a
            href="https://www.instagram.com/cheesestick_koe"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            Follow Instagram Kami
          </a>
        </motion.div>
      </div>
    </section>
  );
}
