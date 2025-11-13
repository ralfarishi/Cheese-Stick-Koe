import Image from "next/image";
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { ShoppingCart, Eye, Sparkles, Plus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import { Toast, useCart } from "../Cart";

export default function MenuItem({ image, name, description = "", price }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastTrigger, setToastTrigger] = useState(0);
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({ image, name, description, price });
    if (showToast) {
      setToastTrigger((prev) => prev + 1);
    } else {
      setShowToast(true);
    }
  };

  return (
    <>
      <Toast
        message="Berhasil menambahkan produk ke keranjang"
        isVisible={showToast}
        onClose={() => setShowToast(false)}
        triggerZoom={toastTrigger}
      />

      <motion.div
        className="group relative h-full"
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ y: -8 }}
        transition={{ duration: 0.3 }}
      >
        <div className="card h-full flex flex-col overflow-hidden dark:bg-surface-10 border border-transparent hover:border-primary/30 dark:hover:border-primary/50 transition-all duration-300 hover:shadow-xl">
          {/* Image Section */}
          <div
            className="relative aspect-[4/3] overflow-hidden bg-surface-20 dark:bg-surface-30 cursor-pointer"
            onClick={() => setIsOpen(true)}
          >
            <Image
              src={`/img/menu/${image}`}
              alt={name}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />

            {/* Zoom Indicator - Always visible on mobile */}
            <div className="absolute top-3 right-3 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300">
              <div className="w-8 h-8 bg-white/90 dark:bg-surface-10/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-md">
                <Eye className="w-4 h-4 text-primary dark:text-primary-500" />
              </div>
            </div>

            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            {/* Fresh Badge */}
            <AnimatePresence>
              {isHovered && (
                <motion.div
                  className="absolute top-3 left-3"
                  initial={{ scale: 0, rotate: -180, opacity: 0 }}
                  animate={{ scale: 1, rotate: 0, opacity: 1 }}
                  exit={{ scale: 0, rotate: 180, opacity: 0 }}
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  <div className="bg-emerald-500/90 backdrop-blur-sm text-white px-3 py-1.5 rounded-full text-xs font-bold flex items-center gap-1.5 shadow-lg">
                    <Sparkles size={12} className="animate-pulse" />
                    <span>Fresh Daily</span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Hover Actions - Desktop only */}
            <div className="hidden lg:flex absolute inset-0 items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-all duration-300">
              <motion.button
                onClick={(e) => {
                  e.stopPropagation();
                  setIsOpen(true);
                }}
                className="w-12 h-12 bg-white/95 dark:bg-surface-10/95 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg cursor-pointer border border-white/20"
                initial={{ scale: 0, y: 20 }}
                whileHover={{
                  scale: 1.1,
                  backgroundColor: "rgba(255,255,255,1)",
                }}
                whileTap={{ scale: 0.95 }}
                aria-label="View image"
              >
                <Eye className="w-5 h-5 text-primary dark:text-primary-500" />
              </motion.button>

              <motion.button
                onClick={(e) => {
                  e.stopPropagation();
                  handleAddToCart();
                }}
                className="w-12 h-12 bg-success/95 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg cursor-pointer border border-white/20"
                initial={{ scale: 0, y: 20 }}
                whileHover={{
                  scale: 1.1,
                  backgroundColor: "rgba(27, 127, 92, 1)",
                }}
                whileTap={{ scale: 0.95 }}
                aria-label="Add to cart"
              >
                <ShoppingCart className="w-5 h-5 text-white" />
              </motion.button>
            </div>
          </div>

          {/* Content Section */}
          <div className="p-5 flex flex-col grow bg-white dark:bg-surface-10">
            <div className="space-y-3 flex-1">
              <h4 className="text-lg font-sans! font-bold text-secondary-900 dark:text-bg-white line-clamp-2 group-hover:text-primary dark:group-hover:text-primary-500 transition-colors">
                {name}
              </h4>

              {description && (
                <p className="text-sm text-secondary-600 dark:text-secondary-400 line-clamp-2">
                  {description}
                </p>
              )}

              {/* Price Tag - Always Visible */}
              <div className="pt-2 border-t border-surface-20 dark:border-surface-30">
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-bold text-primary dark:text-primary-500">
                    Rp {price}
                  </span>
                </div>
              </div>
            </div>

            {/* Add to Cart Button */}
            <motion.button
              onClick={handleAddToCart}
              className="mt-4 w-full dark:bg-primary dark:hover:bg-primary-10 text-white font-semibold py-3 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 shadow-md hover:shadow-lg group/btn cursor-pointer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Plus className="w-5 h-5 group-hover/btn:rotate-90 transition-transform duration-300" />
              <span>Tambah ke Keranjang</span>
            </motion.button>
          </div>
        </div>

        {/* Glow Effect */}
        <motion.div
          className="absolute -inset-1 bg-linear-to-r from-primary/20 via-primary/10 to-primary/20 rounded-2xl -z-10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          initial={false}
        />
      </motion.div>

      <Lightbox
        open={isOpen}
        close={() => setIsOpen(false)}
        slides={[{ src: `/img/menu/${image}` }]}
        render={{
          buttonPrev: () => null,
          buttonNext: () => null,
        }}
      />
    </>
  );
}
