import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Award, CheckCircle } from "lucide-react";

export default function Modal() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  useEffect(() => {
    const hasSeenModal = sessionStorage.getItem("hasSeenHalalModal");
    if (!hasSeenModal) {
      setTimeout(() => {
        setIsModalVisible(true);
      }, 1000);
    }
  }, []);

  // Disable body scroll when modal is open
  useEffect(() => {
    if (isModalVisible) {
      const scrollY = window.scrollY;
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = "100%";
      document.body.style.overflow = "hidden";
    } else {
      const scrollY = document.body.style.top;
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      document.body.style.overflow = "";

      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || "0") * -1);
      }
    }

    return () => {
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      document.body.style.overflow = "";
    };
  }, [isModalVisible]);

  const closeModal = () => {
    setIsModalVisible(false);
    sessionStorage.setItem("hasSeenHalalModal", "true");
  };

  return (
    <AnimatePresence>
      {isModalVisible && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeModal}
        >
          <motion.div
            className="relative card max-w-3xl w-full max-h-[90vh] overflow-y-auto md:overflow-visible"
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 20 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6 sm:p-8 md:p-8">
              <div className="block md:hidden">
                <div className="flex justify-center mb-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-success rounded-full">
                    <Award className="w-4 h-4 text-white" />
                    <span className="text-xs font-semibold text-white">
                      Sertifikasi Resmi
                    </span>
                  </div>
                </div>

                <div className="relative w-40 h-40 sm:w-48 sm:h-48 mx-auto">
                  <Image
                    src="/img/logo-halal.png"
                    alt="Logo Halal"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>

                <motion.h2
                  className="text-2xl sm:text-3xl font-bold text-center mb-1"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <span className="font-sans! text-red-600">PERHATIAN!</span>
                </motion.h2>

                <motion.div
                  className="space-y-3 dark:text-bg-white"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <p className="text-center leading-relaxed text-sm">
                    Kami dengan bangga mengumumkan bahwa produk kami telah
                    berhasil memperoleh{" "}
                    <span className="font-bold text-success">
                      sertifikasi halal resmi
                    </span>
                    .
                  </p>

                  <div className="bg-surface rounded-lg p-4 space-y-2.5">
                    {[
                      "Diproduksi sesuai standar halal yang ketat",
                      "Bahan-bahan berkualitas dan terjamin halal",
                      "Proses produksi yang higienis dan terstandar",
                    ].map((item, index) => (
                      <div key={index} className="flex items-start gap-2.5">
                        <CheckCircle className="w-4 h-4 text-success shrink-0 mt-0.5" />
                        <span className="text-xs leading-relaxed">{item}</span>
                      </div>
                    ))}
                  </div>

                  <p className="text-center text-xs text-muted">
                    Terima kasih atas dukungan dan kepercayaan Anda pada produk
                    halal kami.
                  </p>
                </motion.div>

                <motion.div
                  className="mt-4 text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <button
                    onClick={closeModal}
                    className="btn bg-red-600 text-white px-6 text-sm w-full"
                  >
                    Mengerti, Terima Kasih
                  </button>
                </motion.div>
              </div>

              <div className="hidden md:grid md:grid-cols-[auto,1fr] gap-6">
                <div className="flex flex-col items-center justify-center">
                  <div className="mb-4">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-emerald-500 rounded-full">
                      <Award className="w-4 h-4 text-white" />
                      <span className="text-xs font-semibold text-white">
                        Sertifikasi Resmi
                      </span>
                    </div>
                  </div>

                  <div className="relative w-52 h-52">
                    <Image
                      src="/img/logo-halal.png"
                      alt="Logo Halal"
                      fill
                      className="object-contain"
                      priority
                    />
                  </div>
                </div>

                <div className="flex flex-col justify-center space-y-4">
                  <motion.h2
                    className="text-3xl font-bold text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <span className="font-sans! text-red-600">PERHATIAN!</span>
                  </motion.h2>

                  <motion.div
                    className="space-y-3 dark:text-bg-white"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <p className="text-sm leading-relaxed">
                      Kami dengan bangga mengumumkan bahwa produk kami telah
                      berhasil memperoleh{" "}
                      <span className="font-bold text-emerald-500">
                        sertifikasi halal resmi
                      </span>
                      .
                    </p>

                    <div className="bg-surface rounded-lg p-4 space-y-2.5">
                      {[
                        "Diproduksi sesuai standar halal yang ketat",
                        "Bahan-bahan berkualitas dan terjamin halal",
                        "Proses produksi yang higienis dan terstandar",
                      ].map((item, index) => (
                        <div key={index} className="flex items-start gap-2.5">
                          <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                          <span className="text-sm leading-relaxed">
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>

                    <p className="text-sm text-center text-neutral-400">
                      Terima kasih atas dukungan dan kepercayaan Anda pada
                      produk halal kami.
                    </p>
                  </motion.div>

                  <motion.div
                    className="flex justify-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    <button
                      onClick={closeModal}
                      className="btn bg-red-600 text-white px-8 hover:opacity-90"
                    >
                      Mengerti, Terima Kasih
                    </button>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
