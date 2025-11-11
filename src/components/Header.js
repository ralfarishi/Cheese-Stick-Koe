import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { Menu, X, ShoppingBag, Moon, Sun } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import { CartButton } from "./Cart";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const { theme, toggleTheme } = useTheme();
  const scrollPositionRef = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = ["hero", "about", "menu", "gallery", "testimonials"];
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (currentSection) setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Disable body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      scrollPositionRef.current = window.scrollY;

      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollPositionRef.current}px`;
      document.body.style.width = "100%";
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      document.body.style.overflow = "";

      window.scrollTo(0, scrollPositionRef.current);
    }

    return () => {
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const navItems = [
    { href: "#hero", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#menu", label: "Menu" },
    { href: "#gallery", label: "Gallery" },
    { href: "#testimonials", label: "Testimonial" },
  ];

  const scrollToSection = (e, href) => {
    e.preventDefault();

    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }

    setTimeout(() => {
      const element = document.querySelector(href);
      if (element) {
        const offset = 90;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }, 50);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "glass shadow-lg" : ""
        }`}
        style={{
          backgroundColor: isScrolled ? undefined : "var(--color-surface-10)",
        }}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between h-20 lg:h-24">
            <Link
              href="/"
              className="flex items-center gap-3 group"
              onClick={(e) => scrollToSection(e, "#hero")}
            >
              <div className="relative w-10 h-10 lg:w-12 lg:h-12 transition-transform duration-300 group-hover:scale-110">
                <Image
                  src="/favicon.ico"
                  alt="Cheese Stick Koe Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <h1 className="font-logo! text-xl lg:text-2xl text-primary transition-colors">
                Cheese Stick Koe
              </h1>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.href)}
                  className={`relative px-4 py-2 text-sm font-semibold transition-colors duration-300 rounded-lg group ${
                    activeSection === item.href.slice(1)
                      ? "text-primary"
                      : "text-muted hover:text-primary"
                  }`}
                >
                  {item.label}
                  <span
                    className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-primary transition-all duration-300 ${
                      activeSection === item.href.slice(1)
                        ? "w-15"
                        : "w-0 group-hover:w-15"
                    }`}
                  />
                </Link>
              ))}
            </nav>

            <div className="hidden lg:flex items-center gap-3">
              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg hover:bg-surface transition-colors cursor-pointer"
                aria-label="Toggle theme"
              >
                {theme === "dark" ? (
                  <Sun className="w-5 h-5 text-amber-300" />
                ) : (
                  <Moon className="w-5 h-5 text-neutral-800" />
                )}
              </button>

              <CartButton />

              {/* CTA Button */}
              <Link
                href="#menu"
                onClick={(e) => scrollToSection(e, "#menu")}
                className="btn btn-primary gap-2"
              >
                <ShoppingBag size={18} />
                <span>Order Now</span>
              </Link>
            </div>

            <div className="flex lg:hidden items-center gap-2">
              {/* Theme Toggle Mobile */}
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg hover:bg-surface transition-colors"
                aria-label="Toggle theme"
              >
                {theme === "dark" ? (
                  <Sun className="w-5 h-5 text-amber-300" />
                ) : (
                  <Moon className="w-5 h-5 text-neutral-800" />
                )}
              </button>

              <CartButton />

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 hover:bg-surface rounded-lg"
                style={{ color: "var(--color-bg-white)" }}
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden fixed inset-0 top-20 glass duration-300 ${
            isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        >
          <nav className="container-custom py-8 flex flex-col gap-2">
            {navItems.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                className={`px-6 py-4 text-lg font-semibold rounded-xl duration-300 border-b-2 ${
                  activeSection === item.href.slice(1)
                    ? "bg-primary text-light border-primary"
                    : "border-transparent hover:bg-surface"
                }`}
                style={{
                  animationDelay: `${index * 50}ms`,
                  color:
                    activeSection === item.href.slice(1)
                      ? undefined
                      : "var(--color-bg-white)",
                }}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="#menu"
              onClick={(e) => scrollToSection(e, "#menu")}
              className="btn btn-primary mt-4 gap-2 justify-center"
            >
              <ShoppingBag size={18} />
              <span>Order Now</span>
            </Link>
          </nav>
        </div>
      </header>

      {/* Overlay for mobile menu */}
      {isMobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/20 z-40"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </>
  );
}
