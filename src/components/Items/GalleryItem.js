import Image from "next/image";
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { ZoomIn } from "lucide-react";

export default function GalleryItem({ image, name, category }) {
  const [isOpen, setIsOpen] = useState(false);

  const getCategoryColor = (cat) => {
    const colors = {
      cakes: "bg-pink-100 text-pink-700 dark:bg-pink-900/30 dark:text-pink-400",
      snacks:
        "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400",
      drinks:
        "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
    };
    return (
      colors[cat] ||
      "bg-surface text-gray-700 dark:bg-surface dark:text-gray-400"
    );
  };

  return (
    <>
      <div
        className="relative group cursor-pointer overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
        onClick={() => setIsOpen(true)}
      >
        <div className="relative aspect-square">
          <Image
            src={`/img/galleries/${image}`}
            alt={name}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-500"
          />

          <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4">
              <ZoomIn className="w-12 h-12 mb-3 animate-pulse" />
              <h4 className="font-sans! text-lg font-bold text-center">
                {name}
              </h4>
              <span
                className={`mt-2 px-3 py-1 rounded-full text-xs font-semibold ${getCategoryColor(
                  category,
                )}`}
              >
                {category}
              </span>
            </div>
          </div>
        </div>
      </div>

      <Lightbox
        open={isOpen}
        close={() => setIsOpen(false)}
        slides={[{ src: `/img/galleries/${image}`, alt: name }]}
        render={{
          buttonPrev: () => null,
          buttonNext: () => null,
        }}
      />
    </>
  );
}
