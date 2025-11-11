import Image from "next/image";
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { ShoppingCart, Eye, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

import { Toast, useCart } from "../Cart";

export default function MenuItem({ image, name, description = "", price }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({ image, name, description, price });
    setShowToast(true);
  };

  return (
    <>
      <Toast
        message="Berhasil menambahkan produk ke keranjang"
        isVisible={showToast}
        onClose={() => setShowToast(false)}
      />

      <motion.div
        className="group relative h-full"
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        whileHover={{ y: -8 }}
        transition={{ duration: 0.3 }}
      >
        <div className="card h-full flex flex-col overflow-hidden dark:bg-surface border border-transparent hover:border-primary dark:hover:border-primary transition-all duration-300">
          <div className="relative aspect-4/3 overflow-hidden dark:bg-surface-40">
            <Image
              src={`/img/menu/${image}`}
              alt={name}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />

            {/* Floating Badge */}
            <motion.div
              className="absolute top-3 right-3"
              initial={{ scale: 0, rotate: -180 }}
              animate={
                isHovered ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }
              }
              transition={{ duration: 0.3 }}
            >
              <div className="bg-warning-10 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 shadow-lg">
                <Sparkles size={12} />
                <span>Fresh</span>
              </div>
            </motion.div>

            <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <motion.button
                onClick={() => setIsOpen(true)}
                className="w-12 h-12 bg-white dark:bg-info-10 rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-lg cursor-pointer"
                aria-label="View image"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Eye className="w-5 h-5 text-white" />
              </motion.button>
            </div>
          </div>

          {/* Content */}
          <div className="p-5 flex flex-col grow dark:bg-surface-10">
            <h4 className="text-lg font-sans! font-bold text-secondary-900 dark:text-primary mb-2 line-clamp-2 group-hover:text-primary dark:group-hover:text-primary-500 transition-colors">
              {name}
            </h4>

            {description && (
              <p className="text-sm text-secondary-600 dark:text-secondary-400 mb-4 line-clamp-2 grow">
                {description}
              </p>
            )}

            {/* Price & CTA */}
            <div className="flex items-center justify-between pt-3 border-t border-secondary-100 dark:border-gray-700 mt-auto">
              <div>
                <div className="text-xs text-secondary-500 dark:text-secondary-400 mb-1">
                  Harga
                </div>
                <span className="text-2xl font-bold text-primary dark:text-primary-500">
                  Rp. {price}
                </span>
              </div>

              <div className="flex gap-2">
                <motion.button
                  onClick={handleAddToCart}
                  className="p-2 bg-success dark:bg-success-10 text-white rounded-xl hover:bg-success-10 dark:hover:bg-success-20 transition-colors shadow-md hover:shadow-lg cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label="Add to cart"
                >
                  <ShoppingCart size={20} />
                </motion.button>
              </div>
            </div>
          </div>
        </div>

        <motion.div
          className="absolute -inset-0.5 bg-linear-to-r from-primary-500 to-accent-500 rounded-xl opacity-0 group-hover:opacity-20 blur-xl -z-10 transition-opacity duration-300"
          animate={isHovered ? { opacity: 0.2 } : { opacity: 0 }}
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
