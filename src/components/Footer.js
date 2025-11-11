import { Phone, Clock, Instagram, Music2, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Footer() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const socialLinks = [
    {
      icon: Instagram,
      href: "https://www.instagram.com/cheesestick_koe",
      label: "@cheesestick_koe",
      color: "hover:bg-linear-to-br hover:from-purple-600 hover:to-pink-600",
    },
    {
      icon: Music2,
      href: "https://www.tiktok.com/@cheesestickkoe",
      label: "@cheesestickkoe",
      color: "hover:bg-linear-to-br hover:from-[#fe2c55] hover:to-[#25f4ee]",
    },
  ];

  const contactInfo = [
    {
      icon: Phone,
      label: "Admin 1",
      value: "+62 811-973-173",
      href: "https://wa.link/9gzsvd",
    },
    {
      icon: Phone,
      label: "Admin 2",
      value: "+62 812-8147-2627",
      href: "https://wa.link/vi9m34",
    },
  ];

  return (
    <footer
      className="bg-secondary-900 dark:bg-surface-10 text-bg-white relative overflow-hidden"
      ref={ref}
    >
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h3 className="font-logo! text-3xl text-bg-white mb-4">
              Cheese Stick Koe
            </h3>
            <p className="text-secondary-300 mb-6 max-w-md">
              Spesialis cheese stick premium dengan keju edam asli. Kami
              menyediakan berbagai pilihan kue dan minuman rumahan yang lezat
              untuk keluarga Indonesia.
            </p>
            <div className="flex items-center gap-3 text-secondary-300">
              <MapPin className="w-5 h-5 shrink-0" />
              <span>Bekasi, West Java, Indonesia</span>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="font-sans! font-bold text-lg mb-4 flex items-center gap-2">
              <Phone className="w-5 h-5" />
              <span>Hubungi Kami</span>
            </h4>
            <div className="space-y-3">
              {contactInfo.map((contact, index) => (
                <a
                  key={index}
                  href={contact.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-3 rounded-lg bg-dark/10 hover:bg-dark/15 transition-colors group"
                >
                  <div className="text-sm text-secondary-400 mb-1">
                    {contact.label}
                  </div>
                  <div className="font-semibold text-bg-white group-hover:text-primary transition-colors">
                    {contact.value}
                  </div>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Opening Hours & Social */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="font-sans! font-bold text-lg mb-4 flex items-center gap-2">
              <Clock className="w-5 h-5" />
              <span>Jam Buka</span>
            </h4>
            <div className="p-3 rounded-lg bg-dark/15 mb-6">
              <div className="text-secondary-400 text-sm mb-1">Setiap Hari</div>
              <div className="font-semibold">08:00 - 22:00 WIB</div>
            </div>

            <h4 className="font-sans! font-bold text-lg mb-4">Follow Us</h4>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-12 h-12 rounded-full bg-dark/15 flex items-center justify-center transition-all duration-300 ${social.color} hover:text-white hover:scale-110`}
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          className="pt-8 border-t border-white/10"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-secondary-400">
            <div className="text-center md:text-left">
              Modified by{" "}
              <a
                href="https://alfarishi.my.id"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-500 hover:text-indigo-600 font-semibold transition-colors"
              >
                Al Farishi
              </a>
              . All Rights Reserved © {new Date().getFullYear()}
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
