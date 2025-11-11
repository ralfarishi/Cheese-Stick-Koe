import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import TestiItem from "./Items/TestiItem";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const testimonials = [
    {
      quote: "Cheese stick-nya renyah, harus coba!",
      link: "https://www.instagram.com/p/Cw1lSury0cp/",
      name: "Bopak Castello",
      work: "Celebrity",
      stars: 5,
      image: "bopak.jpeg",
    },
    {
      quote: "Gurih banget cheese stick-nya!",
      link: "https://www.instagram.com/stories/highlights/17965840574637480/",
      name: "Nyak Kopsah",
      work: "Selebgram",
      stars: 4.5,
      image: "kopsah.jpg",
    },
    {
      quote: "Cheese stick & pie susunya juaraaa.",
      link: "https://www.instagram.com/stories/highlights/17875161236808935/",
      name: "Audy Item",
      work: "Celebrity",
      stars: 4.5,
      image: "audy.png",
    },
    {
      quote: "Kejunya sangat melekat dan berasa sekali.",
      link: "https://www.instagram.com/stories/highlights/18016160635396785/",
      name: "Dustin Tiffani",
      work: "Selebgram",
      stars: 4.5,
      image: "dustin.jpg",
    },
    {
      quote: "Buat yang suka nyemil kaya aku boleh coba.",
      link: "https://www.instagram.com/stories/highlights/17951403782157014/",
      name: "Fitri Salhuteru",
      work: "Selebgram",
      stars: 4,
      image: "fitri.jpg",
    },
    {
      quote:
        "Yang suka sama yang kres-kres dan keju-keju boleh coba ini nih, @cheesestick_koe.",
      link: "https://www.instagram.com/stories/highlights/17945089205058105/",
      name: "Tike Priyatnakusuma",
      work: "Celebrity",
      stars: 5,
      image: "tike.jpg",
    },
    {
      quote: 'Makanan untuk nyemil "cheese stick", pas banget buat nonton TV.',
      link: "https://www.instagram.com/stories/highlights/17956963832173114/",
      name: "Gunawan Sudrajat",
      work: "Actor & Model",
      stars: 5,
      image: "gunawan.jpg",
    },
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );
  };

  return (
    <section
      id="testimonials"
      className="section bg-secondary-50 dark:bg-surface-20 relative overflow-hidden"
      ref={ref}
    >
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          className="section-header max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h3 className="section-subtitle">Testimonials</h3>
          <h2 className="section-title">
            What They Say{" "}
            <span className="text-primary dark:text-primary-500">About Us</span>
          </h2>
          <p className="text-secondary-600 dark:text-secondary-400 mt-4">
            Kepuasan pelanggan adalah prioritas kami
          </p>
        </motion.div>

        {/* Testimonials Carousel */}
        <div className="max-w-5xl mx-auto">
          <div className="relative">
            <motion.div
              className="absolute -top-8 left-8 md:left-1/2 md:-translate-x-1/2 w-16 h-16 dark:bg-primary rounded-full flex items-center justify-center z-10"
              initial={{ opacity: 0, scale: 0 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.3 }}
            >
              <Quote className="w-8 h-8 dark:text-neutral-200" />
            </motion.div>

            {/* Testimonial Content */}
            <div className="relative min-h-[400px] flex items-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.3 }}
                  className="w-full"
                >
                  <TestiItem {...testimonials[currentIndex]} />
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                onClick={prevTestimonial}
                className="w-12 h-12 rounded-full bg-primary shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 flex items-center justify-center cursor-pointer"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-6 h-6 text-secondary-900 dark:text-white" />
              </button>

              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentIndex
                        ? "w-8 bg-primary dark:bg-primary-500"
                        : "bg-secondary-300 dark:bg-slate-600 hover:bg-secondary-400"
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={nextTestimonial}
                className="w-12 h-12 rounded-full bg-primary shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 flex items-center justify-center cursor-pointer"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-6 h-6 text-secondary-900 dark:text-white" />
              </button>
            </div>
          </div>
        </div>

        <motion.div
          className="mt-16 grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
        >
          {[
            { value: "98%", label: "Kepuasan Pelanggan" },
            { value: "500+", label: "Review Positif" },
            { value: "4.8/5", label: "Rating Rata-rata" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="card p-8 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.9 + index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="text-4xl font-bold text-primary mb-2">
                {stat.value}
              </div>
              <div className="text-secondary-600 dark:text-secondary-400">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
