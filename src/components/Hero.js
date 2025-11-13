import Image from "next/image";
import { useEffect, useState } from "react";
import { ChevronDown, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const scrollToMenu = () => {
    const menu = document.getElementById("menu");
    if (menu) {
      menu.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
      style={{ backgroundColor: "var(--color-surface-20)" }}
      ref={ref}
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-surface-50 dark:bg-surface-40 rounded-full blur-3xl"
          animate={{
            x: -mousePosition.x * 0.3,
            y: -mousePosition.y * 0.3,
          }}
          transition={{ type: "spring", stiffness: 50 }}
        />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            className="text-center lg:text-left space-y-8 pt-8 sm:pt-12 lg:pt-0"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 dark:bg-primary backdrop-blur-sm rounded-full shadow-md"
              initial={{ opacity: 0, y: -20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
            >
              <Sparkles className="w-4 h-4 text-white" />
              <span className="text-sm font-semibold text-white">
                Produk Halal & Berkualitas
              </span>
            </motion.div>

            {/* Main Heading */}
            <div className="space-y-4">
              <motion.h2
                className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 }}
              >
                <span className="block dark:text-bg-white">Enjoy Your</span>
                <span className="block font-primary dark:text-primary text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
                  Cake & Snack
                </span>
              </motion.h2>

              <motion.p
                className="text-lg md:text-xl text-secondary-600 dark:text-secondary-400 max-w-xl mx-auto lg:mx-0"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 }}
              >
                Nikmati kelezatan cheese stick premium dengan keju Edam asli dan
                berbagai pilihan kue rumahan yang lezat
              </motion.p>
            </div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 }}
            >
              <button
                onClick={scrollToMenu}
                className="btn btn-primary text-base group"
              >
                <span>Lihat Menu</span>
                <ChevronDown size={20} className="group-hover:animate-bounce" />
              </button>
              <a
                href="https://wa.link/9gzsvd"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline text-base"
              >
                Hubungi Kami
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="relative z-10"
              animate={{
                y: [0, -20, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <div className="relative w-full aspect-square max-w-lg mx-auto">
                <Image
                  src="/img/cheese_stick_banner.png"
                  alt="Cheese Stick Banner"
                  fill
                  className="object-contain drop-shadow-2xl"
                  priority
                />
              </div>
            </motion.div>

            <motion.div
              className="absolute -top-4 -right-4 w-24 h-24 bg-primary-40 rounded-full blur-2xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary-40 rounded-full blur-2xl"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5,
              }}
            />
          </motion.div>
        </div>
      </div>

      <motion.button
        onClick={scrollToMenu}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 p-2 text-secondary-600 dark:text-secondary-400 hover:text-primary-30 dark:hover:text-primary transition-colors cursor-pointer"
        initial={{ opacity: 0, y: -10 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.8 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <ChevronDown size={32} />
        </motion.div>
      </motion.button>
    </section>
  );
}
