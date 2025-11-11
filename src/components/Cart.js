import { createContext, useContext, useState, useEffect } from "react";
import { ShoppingCart, X, Plus, Minus, Trash2, Send } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

// Cart Context
const CartContext = createContext();

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within CartProvider");
  }
  return context;
};

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const addToCart = (item) => {
    setCart((prev) => {
      const existing = prev.find((i) => i.name === item.name);
      if (existing) {
        return prev.map((i) =>
          i.name === item.name ? { ...i, quantity: i.quantity + 1 } : i,
        );
      }
      return [...prev, { ...item, quantity: 1 }];
    });
  };

  const removeFromCart = (itemName) => {
    setCart((prev) => prev.filter((i) => i.name !== itemName));
  };

  const updateQuantity = (itemName, quantity) => {
    if (quantity <= 0) {
      removeFromCart(itemName);
      return;
    }
    setCart((prev) =>
      prev.map((i) => (i.name === itemName ? { ...i, quantity } : i)),
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const totalItems = cart.length;
  const totalPrice = cart.reduce((sum, item) => {
    const price = parseFloat(item.price.replace(/\./g, "").replace(",", "."));
    return sum + price * item.quantity;
  }, 0);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        totalItems,
        totalPrice,
        isOpen,
        setIsOpen,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

// Cart Button Component (untuk Header)
export const CartButton = () => {
  const { totalItems, setIsOpen } = useCart();

  return (
    <button
      onClick={() => setIsOpen(true)}
      className="relative p-2 rounded-lg hover:bg-surface transition-colors cursor-pointer"
      aria-label="Shopping cart"
    >
      <ShoppingCart
        className="w-5 h-5"
        style={{ color: "var(--color-bg-white)" }}
      />
      {totalItems > 0 && (
        <motion.span
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="absolute -top-1 -right-1 w-5 h-5 bg-danger text-white text-xs font-bold rounded-full flex items-center justify-center"
        >
          {totalItems}
        </motion.span>
      )}
    </button>
  );
};

// Cart Panel Component
export const CartPanel = () => {
  const {
    cart,
    isOpen,
    setIsOpen,
    updateQuantity,
    removeFromCart,
    totalPrice,
    clearCart,
  } = useCart();

  const formatPrice = (price) => {
    return parseFloat(price.replace(/\./g, "").replace(",", "."));
  };

  const handleCheckout = () => {
    if (cart.length === 0) return;

    let message =
      "Hai kak :D, aku order dari website *Cheese Stick Koe*\n\nBerikut pesanan aku ya:\n";

    cart.forEach((item, index) => {
      const price = formatPrice(item.price);
      const subtotal = price * item.quantity;
      message += `${index + 1}. ${item.name} (${item.quantity} x ${price.toLocaleString("id-ID")}) = ${subtotal.toLocaleString("id-ID")}\n`;
    });

    message += `\nGrand total: *Rp ${totalPrice.toLocaleString("id-ID")}*`;
    message += "\n\nDitunggu konfirmasinya ya kak <3";

    const encodedMessage = encodeURI(message);
    const whatsappUrl = `https://wa.me/62811973173?text=${encodedMessage}`;

    window.open(whatsappUrl, "_blank");
    clearCart();
    setIsOpen(false);
  };

  return (
    <>
      {/* Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
          />
        )}
      </AnimatePresence>

      {/* Cart Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 h-full w-full sm:w-96 dark:bg-surface-10 shadow-2xl z-50 flex flex-col"
          >
            {/* Header */}
            <div className="p-6 border-b border-surface-20 dark:border-surface-30">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                    <ShoppingCart className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h2 className="font-sans! text-xl font-bold dark:text-bg-white">
                      Keranjang
                    </h2>
                    <p className="text-sm text-muted">{cart.length} item</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 hover:bg-surface rounded-lg transition-colors cursor-pointer"
                  aria-label="Close cart"
                >
                  <X className="w-6 h-6 dark:text-bg-white" />
                </button>
              </div>
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {cart.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center">
                  <ShoppingCart className="w-20 h-20 text-surface-40 mb-4" />
                  <p className="text-muted text-lg font-medium">
                    Keranjang Kosong
                  </p>
                  <p className="text-sm text-muted mt-2">
                    Tambahkan produk ke keranjang
                  </p>
                </div>
              ) : (
                cart.map((item) => {
                  const price = formatPrice(item.price);
                  const subtotal = price * item.quantity;

                  return (
                    <motion.div
                      key={item.name}
                      layout
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, x: 100 }}
                      className="card p-4 space-y-3"
                    >
                      <div className="flex gap-3">
                        <div className="relative w-20 h-20 rounded-lg overflow-hidden bg-surface-20 shrink-0">
                          <Image
                            src={`/img/menu/${item.image}`}
                            alt={item.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-sans! font-semibold dark:text-bg-white text-sm line-clamp-2 mb-1">
                            {item.name}
                          </h4>
                          <p className="text-primary dark:text-primary-500 font-bold">
                            Rp {price.toLocaleString("id-ID")}
                          </p>
                        </div>
                        <button
                          onClick={() => removeFromCart(item.name)}
                          className="p-1 hover:bg-danger-20 rounded-lg transition-colors h-fit cursor-pointer"
                          aria-label="Remove item"
                        >
                          <Trash2 className="w-4 h-4 text-danger" />
                        </button>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 bg-surface dark:bg-surface-20 rounded-lg p-1">
                          <button
                            onClick={() =>
                              updateQuantity(item.name, item.quantity - 1)
                            }
                            className="p-1.5 hover:bg-surface-20 dark:hover:bg-surface-30 rounded transition-colors"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="w-4 h-4 dark:text-bg-white" />
                          </button>
                          <span className="w-8 text-center font-semibold dark:text-bg-white">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() =>
                              updateQuantity(item.name, item.quantity + 1)
                            }
                            className="p-1.5 hover:bg-surface-20 dark:hover:bg-surface-30 rounded transition-colors"
                            aria-label="Increase quantity"
                          >
                            <Plus className="w-4 h-4 dark:text-bg-white" />
                          </button>
                        </div>
                        <div className="text-right">
                          <div className="text-xs text-muted">Subtotal</div>
                          <div className="font-bold text-primary dark:text-primary-500">
                            Rp {subtotal.toLocaleString("id-ID")}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  );
                })
              )}
            </div>

            {/* Footer */}
            {cart.length > 0 && (
              <div className="border-t border-surface-20 dark:border-surface-30 p-6 space-y-4">
                <div className="flex items-center justify-between text-lg font-bold">
                  <span className="dark:text-bg-white">Grand Total</span>
                  <span className="text-primary dark:text-primary-500">
                    Rp {totalPrice.toLocaleString("id-ID")}
                  </span>
                </div>
                <button
                  onClick={handleCheckout}
                  className="w-full btn btn-primary gap-2 justify-center"
                >
                  <Send size={18} />
                  <span>Checkout via WhatsApp</span>
                </button>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export const Toast = ({ message, isVisible, onClose }) => {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(onClose, 2000);
      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          className="fixed top-24 left-1/2 -translate-x-1/2 z-50"
        >
          <div className="bg-success dark:bg-success-10 text-white px-6 py-3 rounded-lg shadow-lg flex items-center gap-3">
            <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
              <ShoppingCart className="w-4 h-4" />
            </div>
            <span className="font-medium">{message}</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
