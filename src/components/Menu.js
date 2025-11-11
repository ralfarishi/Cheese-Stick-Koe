import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import MenuItem from "./Items/MenuItem";
import { Cake, Cookie, Coffee, TrendingUp } from "lucide-react";

export default function Menu() {
  const [activeTab, setActiveTab] = useState("popular");
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const tabs = [
    { id: "popular", label: "Popular", icon: TrendingUp },
    { id: "cakes", label: "Cakes", icon: Cake },
    { id: "snacks", label: "Snacks", icon: Cookie },
    { id: "drinks", label: "Drinks", icon: Coffee },
  ];

  const menuData = {
    popular: [
      {
        image: "cheese_stick_1kg.png",
        name: "Cheese Stick 1 Kg",
        description: "Packing: Plastik pouch uk. 250 gr x 4 pcs",
        price: "170.000",
      },
      {
        image: "chees_stick_1_ons.png",
        name: "Cheese Stick 1 Ons",
        description: "Ukuran 1 ons",
        price: "17.500",
      },
      {
        image: "mac-schotel15x10.jpg",
        name: "Macaroni Schotel",
        description: "Ukuran loyang 15x10",
        price: "30.000",
      },
      {
        image: "bolu_marmer.png",
        name: "Bolu Marmer",
        description: "Ukuran loyang 22",
        price: "70.000",
      },
      {
        image: "bolu_pisang.png",
        name: "Bolu Pisang",
        description: "Ukuran loyang 22",
        price: "70.000",
      },
      {
        image: "bolu_zebra.png",
        name: "Bolu Zebra",
        description: "Ukuran loyang 22",
        price: "70.000",
      },
      {
        image: "brule20x20.jpg",
        name: "Spaghetti Brulee",
        description: "Ukuran loyang 20x20",
        price: "120.000",
      },
      {
        image: "brownies-panggang20x10.png",
        name: "Brownies Panggang",
        description: "Ukuran loyang 20x10",
        price: "45.000",
      },
      {
        image: "mac-schotel20x10.png",
        name: "Macaroni Schotel",
        description: "Ukuran loyang 20x10",
        price: "50.000",
      },
    ],
    cakes: [
      {
        image: "bolu_marmer_pan.png",
        name: "Bolu Marmer Pandan",
        description: "Ukuran loyang 22",
        price: "70.000",
      },
      {
        image: "bolu_coklat_coc.png",
        name: "Bolu Coklat Chocochip",
        description: "Ukuran loyang 22",
        price: "70.000",
      },
      {
        image: "bolu_sukade.png",
        name: "Bolu Sukade",
        description: "Ukuran loyang 22",
        price: "70.000",
      },
      {
        image: "bolu_keju.png",
        name: "Bolu Keju",
        description: "Ukuran loyang 22",
        price: "70.000",
      },
      {
        image: "bolu_meses.png",
        name: "Bolu Meses",
        description: "Ukuran loyang 22",
        price: "70.000",
      },
      {
        image: "brownies_coklat.png",
        name: "Brownies Coklat",
        price: "60.000",
      },
      {
        image: "brownies_keju.png",
        name: "Brownies Keju",
        price: "60.000",
      },
      {
        image: "brownies_coklat_keju.png",
        name: "Brownies Coklat Keju",
        price: "65.000",
      },
      {
        image: "bolu_gula_merah.png",
        name: "Bolu Gula Merah",
        description: "Ukuran loyang 22",
        price: "70.000",
      },
    ],
    snacks: [
      { image: "pie susu.png", name: "Pie Susu", price: "4.000/pcs" },
      {
        image: "cheese_stick_tabung.png",
        name: "Cheese Stick Tabung",
        description: "Ukuran 150 gram",
        price: "38.000",
      },
      { image: "banana_strudel.png", name: "Banana Strudel", price: "55.000" },
      {
        image: "mac-schotel20x20.jpg",
        name: "Macaroni Schotel",
        description: "Ukuran loyang 20x20",
        price: "95.000",
      },
      {
        image: "brownies-panggang20x20.png",
        name: "Brownies Panggang",
        description: "Ukuran loyang 20x20",
        price: "85.000",
      },
    ],
    drinks: [
      {
        image: "yakult_anggur.png",
        name: "Es Yakult - Anggur",
        price: "10.000",
      },
      { image: "yakult_jambu.png", name: "Es Yakult - Jambu", price: "10.000" },
      {
        image: "yakult_mangga.png",
        name: "Es Yakult - Mangga",
        price: "10.000",
      },
      { image: "yakult_jeruk.png", name: "Es Yakult - Jeruk", price: "10.000" },
      { image: "yakult_melon.png", name: "Es Yakult - Melon", price: "10.000" },
      {
        image: "yakult_sirsak.png",
        name: "Es Yakult - Sirsak",
        price: "10.000",
      },
      {
        image: "yakult_strawberry.png",
        name: "Es Yakult - Strawberry",
        price: "10.000",
      },
      { image: "yakult_leci.png", name: "Es Yakult - Leci", price: "10.000" },
    ],
  };

  return (
    <section
      id="menu"
      className="section bg-secondary-50 dark:bg-surface relative overflow-hidden"
      style={{
        backgroundColor: "var(--color-surface-20)",
      }}
      ref={ref}
    >
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary-500 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          className="section-header max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h3 className="section-subtitle">Our Menu</h3>
          <h2 className="section-title">
            Check Our{" "}
            <span className="text-primary dark:text-primary-500">Menu</span>
          </h2>
          <p className="text-secondary-600 dark:text-secondary-400 mt-4">
            Pilihan menu terlengkap dengan kualitas terbaik untuk Anda
          </p>
        </motion.div>

        {/* Tabs */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
        >
          {tabs.map((tab, index) => {
            const Icon = tab.icon;
            return (
              <motion.button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  activeTab === tab.id
                    ? "bg-primary dark:bg-primary text-white shadow-lg"
                    : "dark:bg-surface-30 dark:text-bg-white dark:hover:bg-surface-40 cursor-pointer"
                }`}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="flex items-center gap-2">
                  <Icon size={18} />
                  <span>{tab.label}</span>
                </span>
                {activeTab === tab.id && (
                  <motion.div
                    className="hidden lg:block absolute top-14 left-0 right-0 h-1 bg-white dark:bg-primary rounded-full"
                    layoutId="activeTab"
                  />
                )}
              </motion.button>
            );
          })}
        </motion.div>

        {/* Menu Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {menuData[activeTab].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
              >
                <MenuItem {...item} />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
