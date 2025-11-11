import Image from "next/image";
import { Star, ExternalLink, Quote } from "lucide-react";
import { motion } from "framer-motion";

export default function TestiItem({ quote, link, name, work, stars, image }) {
  const generateStars = () => {
    const fullStars = Math.min(Math.floor(stars), 5);
    const hasHalfStar = stars % 1 !== 0;
    const emptyStars = Math.max(5 - fullStars - (hasHalfStar ? 1 : 0), 0);

    return (
      <div className="flex gap-1 justify-center md:justify-start">
        {[...Array(fullStars)].map((_, i) => (
          <motion.div
            key={`full-${i}`}
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: i * 0.1, type: "spring" }}
          >
            <Star className="w-5 h-5 fill-warning-10 text-warning-10" />
          </motion.div>
        ))}
        {hasHalfStar && (
          <motion.div
            className="relative"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: fullStars * 0.1, type: "spring" }}
          >
            <Star className="w-5 h-5 text-warning-10" />
            <div className="absolute inset-0 overflow-hidden w-1/2">
              <Star className="w-5 h-5 fill-warning-10 text-warning-10" />
            </div>
          </motion.div>
        )}
        {[...Array(emptyStars)].map((_, i) => (
          <motion.div
            key={`empty-${i}`}
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{
              delay: (fullStars + (hasHalfStar ? 1 : 0) + i) * 0.1,
              type: "spring",
            }}
          >
            <Star className="w-5 h-5 text-warning-10" />
          </motion.div>
        ))}
      </div>
    );
  };

  return (
    <div className="relative">
      {/* Main Card */}
      <div className="card p-8 md:p-10 max-w-4xl mx-auto shadow-2xl border border-secondary-100 dark:border-gray-700">
        <div className="grid md:grid-cols-[1fr,auto] gap-8 items-center">
          {/* Content */}
          <div className="order-2 md:order-1 text-center md:text-left space-y-6">
            <div className="flex justify-center md:justify-start">
              <div className="w-12 h-12 dark:bg-primary rounded-full flex items-center justify-center">
                <Quote className="w-6 h-6 text-gray-200" />
              </div>
            </div>

            <motion.p
              className="text-xl md:text-2xl text-secondary-700 dark:text-secondary-300 italic leading-relaxed relative"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <span className="dark:text-primary text-4xl absolute -left-2 -top-2 opacity-50">
                "
              </span>
              {quote}
              <span className="dark:text-primary text-4xl opacity-50">"</span>
            </motion.p>

            <div className="w-full h-1 bg-linear-to-r from-primary to-surface dark:from-primary-10 dark:to-surface-10 mx-auto md:mx-0 rounded-full" />

            <motion.div
              className="space-y-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 group"
              >
                <h3 className="text-xl font-bold dark:text-bg-white dark:group-hover:text-primary">
                  {name}
                </h3>
                <ExternalLink className="w-4 h-4 text-secondary-400 dark:group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>

              <p className="text-secondary-600 dark:text-secondary-400 font-medium">
                {work}
              </p>

              <div className="pt-2">{generateStars()}</div>
            </motion.div>
          </div>

          <motion.div
            className="order-1 md:order-2 flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, type: "spring" }}
          >
            <div className="relative">
              <div className="relative w-32 h-32 md:w-44 md:h-44">
                <Image
                  src={`/img/testimonials/${image}`}
                  alt={name}
                  fill
                  className="relative rounded-full object-cover border-3 dark:border-slate-700 shadow-2xl"
                />

                <div className="absolute bottom-1 right-1 md:bottom-2 md:right-2 w-8 h-8 md:w-10 md:h-10 bg-linear-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center border-3 border-white dark:border-gray-800 shadow-lg transform hover:scale-110 transition-transform duration-200">
                  <svg
                    className="w-4 h-4 md:w-5 md:h-5 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="flex justify-center mt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-secondary-500 dark:text-secondary-400 hover:text-primary dark:hover:text-primary-500 flex items-center gap-2"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
            <span>View on Instagram</span>
          </a>
        </motion.div>
      </div>

      <div className="absolute -inset-4 bg-linear-to-r from-primary-500/10 via-accent-500/10 to-primary-500/10 rounded-3xl -z-10 blur-2xl" />
    </div>
  );
}
