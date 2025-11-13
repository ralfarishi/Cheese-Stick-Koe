import { Phone, Clock, Music2, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Footer() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const Instagram = () => (
    <svg
      role="img"
      fill="currentColor"
      className="w-5 h-5"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  );

  const waLink = (phone) => {
    const message =
      "Halo admin, saya pengunjung website *cheesestick-koe.my.id* ingin memesan makanan.";

    return `https://wa.me/${phone}?text=${message}`;
  };

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
      href: waLink("62811973173"),
    },
    {
      icon: Phone,
      label: "Admin 2",
      value: "+62 812-8147-2627",
      href: waLink("6281281472627"),
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
              Spesialis cheese stick premium dengan keju Edam asli. Kami
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
