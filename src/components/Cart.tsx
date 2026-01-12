import {
	createContext,
	useContext,
	useEffect,
	useState,
	type ReactNode,
	type Dispatch,
	type SetStateAction,
} from "react";
import { createPortal } from "react-dom";
import { ShoppingCart, X, Plus, Minus, Trash2, Send, CheckCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useScrollLock } from "../hooks/useScrollLock";

// Types
export interface CartItem {
	name: string;
	price: string;
	image: string;
	description?: string;
	variant?: string;
	quantity: number;
}

export interface CartContextValue {
	cart: CartItem[];
	addToCart: (item: Omit<CartItem, "quantity">) => void;
	removeFromCart: (itemName: string, variant?: string) => void;
	updateQuantity: (itemName: string, variant: string | undefined, quantity: number) => void;
	clearCart: () => void;
	totalItems: number;
	totalPrice: number;
	isOpen: boolean;
	setIsOpen: Dispatch<SetStateAction<boolean>>;
}

// Cart Context
const CartContext = createContext<CartContextValue | undefined>(undefined);

export const useCart = (): CartContextValue => {
	const context = useContext(CartContext);
	if (!context) {
		throw new Error("useCart must be used within CartProvider");
	}
	return context;
};

interface CartProviderProps {
	children: ReactNode;
}

export const CartProvider = ({ children }: CartProviderProps) => {
	const [cart, setCart] = useState<CartItem[]>([]);
	const [isOpen, setIsOpen] = useState(false);

	const addToCart = (item: Omit<CartItem, "quantity">) => {
		setCart((prev) => {
			const existing = prev.find((i) => i.name === item.name && i.variant === item.variant);
			if (existing) {
				return prev.map((i) =>
					i.name === item.name && i.variant === item.variant
						? { ...i, quantity: i.quantity + 1 }
						: i
				);
			}
			return [...prev, { ...item, quantity: 1 }];
		});
	};

	const removeFromCart = (itemName: string, variant?: string) => {
		setCart((prev) => prev.filter((i) => !(i.name === itemName && i.variant === variant)));
	};

	const updateQuantity = (itemName: string, variant: string | undefined, quantity: number) => {
		if (quantity <= 0) {
			removeFromCart(itemName, variant);
			return;
		}
		setCart((prev) =>
			prev.map((i) => (i.name === itemName && i.variant === variant ? { ...i, quantity } : i))
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
			<ShoppingCart className="w-5 h-5" style={{ color: "var(--color-bg-white)" }} />
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
	const { cart, isOpen, setIsOpen, updateQuantity, removeFromCart, totalPrice, clearCart } =
		useCart();

	// Disable body scroll when cart panel is open
	useScrollLock(isOpen);

	const formatPrice = (price: string): number => {
		return parseFloat(price.replace(/\./g, "").replace(",", "."));
	};

	const handleCheckout = () => {
		if (cart.length === 0) return;

		let message =
			"Hai kak :D, aku order dari website *Cheese Stick Koe*\n\nBerikut pesanan aku ya:\n";

		cart.forEach((item, index) => {
			const price = formatPrice(item.price);
			const subtotal = price * item.quantity;
			const itemName = item.variant ? `${item.name} - ${item.variant}` : item.name;
			message += `${index + 1}. ${itemName} (${item.quantity} x ${price.toLocaleString(
				"id-ID"
			)}) = ${subtotal.toLocaleString("id-ID")}\n`;
		});

		message += `\nGrand total: *Rp ${totalPrice.toLocaleString("id-ID")}*`;
		message += "\n\nDitunggu konfirmasinya ya kak <3";

		const encodedMessage = encodeURI(message);
		const whatsappUrl = `https://wa.me/62811973173?text=${encodedMessage}`;

		window.open(whatsappUrl, "_blank");
		clearCart();
		setIsOpen(false);
	};

	if (typeof document === "undefined") return null;

	return createPortal(
		<>
			{/* Overlay */}
			<AnimatePresence>
				{isOpen && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						onClick={() => setIsOpen(false)}
						className="fixed inset-0 bg-black/50 backdrop-blur-sm z-9998"
					/>
				)}
			</AnimatePresence>

			{/* Cart Panel */}
			<AnimatePresence>
				{isOpen && (
					<motion.div
						initial={{
							x: window.innerWidth < 640 ? 0 : "100%",
							y: window.innerWidth < 640 ? "100%" : 0,
						}}
						animate={{
							x: 0,
							y: 0,
						}}
						exit={{
							x: window.innerWidth < 640 ? 0 : "100%",
							y: window.innerWidth < 640 ? "100%" : 0,
						}}
						transition={{
							type: "tween",
							duration: 0.3,
							ease: [0.32, 0.72, 0, 1],
						}}
						style={{ willChange: "transform" }}
						className="fixed sm:right-0 right-0 sm:top-0 bottom-0 top-0 h-full w-full sm:w-96 bg-surface-10 shadow-2xl z-9999 flex flex-col"
					>
						{/* Header */}
						<div className="p-6 border-b border-surface-30">
							<div className="flex items-center justify-between">
								<div className="flex items-center gap-3">
									<div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
										<ShoppingCart className="w-5 h-5 text-white" />
									</div>
									<div>
										<h2 className="font-sans! text-xl font-bold text-bg-white">Keranjang</h2>
										<p className="text-sm text-muted">{cart.length} item</p>
									</div>
								</div>
								<button
									onClick={() => setIsOpen(false)}
									className="p-2 hover:bg-surface-20 rounded-lg transition-colors cursor-pointer"
									aria-label="Close cart"
								>
									<X className="w-6 h-6 dark:text-bg-white" />
								</button>
							</div>
						</div>

						{/* Cart Items */}
						<div
							className="flex-1 overflow-y-auto p-6 space-y-4"
							onTouchMove={(e) => e.stopPropagation()}
						>
							{cart.length === 0 ? (
								<div className="flex flex-col items-center justify-center h-full text-center">
									<ShoppingCart className="w-20 h-20 text-surface-40 mb-4" />
									<p className="text-muted text-lg font-medium">Keranjang Kosong</p>
									<p className="text-sm text-muted mt-2">Tambahkan produk ke keranjang</p>
								</div>
							) : (
								cart.map((item) => {
									const price = formatPrice(item.price);
									const subtotal = price * item.quantity;
									const itemKey = item.variant ? `${item.name}-${item.variant}` : item.name;

									return (
										<motion.div
											key={itemKey}
											layout
											initial={{ opacity: 0, y: 20 }}
											animate={{ opacity: 1, y: 0 }}
											exit={{ opacity: 0, x: 100 }}
											className="bg-surface-20 rounded-2xl shadow-[0 4px 6px -1px rgba(0, 0, 0, 0.1)] overflow-hidden transition-all duration-300 p-4 space-y-3"
										>
											<div className="flex gap-3">
												<div className="relative w-20 h-20 rounded-lg overflow-hidden bg-surface-30 shrink-0">
													<Image
														src={`/img/menu/${item.image}`}
														alt={item.name}
														fill
														sizes="80px"
														className="object-cover"
													/>
												</div>
												<div className="flex-1 min-w-0">
													<h4 className="font-sans! font-semibold text-bg-white text-sm line-clamp-2 mb-1">
														{item.name}
														{item.variant && (
															<span className="block text-xs text-primary mt-0.5">
																Rasa: {item.variant}
															</span>
														)}
													</h4>
													<p className="text-primary font-bold">
														Rp {price.toLocaleString("id-ID")}
													</p>
												</div>
												<button
													onClick={() => removeFromCart(item.name, item.variant)}
													className="p-1 hover:bg-danger-20 rounded-lg transition-colors h-fit cursor-pointer"
													aria-label="Remove item"
												>
													<Trash2 className="w-4 h-4 text-danger" />
												</button>
											</div>

											<div className="flex items-center justify-between">
												<div className="flex items-center gap-2 bg-surface-30 rounded-lg p-1">
													<button
														onClick={() =>
															updateQuantity(item.name, item.variant, item.quantity - 1)
														}
														className="p-1.5 hover:bg-surface-40 rounded-2xl transition-colors"
														aria-label="Decrease quantity"
													>
														<Minus className="w-4 h-4 text-bg-white" />
													</button>
													<span className="w-8 text-center font-semibold text-bg-white">
														{item.quantity}
													</span>
													<button
														onClick={() =>
															updateQuantity(item.name, item.variant, item.quantity + 1)
														}
														className="p-1.5 hover:bg-surface-40 rounded-2xl transition-colors"
														aria-label="Increase quantity"
													>
														<Plus className="w-4 h-4 text-bg-white" />
													</button>
												</div>
												<div className="text-right">
													<div className="text-xs text-muted">Subtotal</div>
													<div className="font-bold text-primary">
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
							<div className="border-t border-surface-30 p-6 space-y-4">
								<div className="flex items-center justify-between text-lg font-bold">
									<span className="text-bg-white">Grand Total</span>
									<span className="text-primary">Rp {totalPrice.toLocaleString("id-ID")}</span>
								</div>
								<button
									onClick={handleCheckout}
									className="w-full btn bg-success text-white gap-2 justify-center"
								>
									<Send size={18} />
									<span>Checkout via WhatsApp</span>
								</button>
							</div>
						)}
					</motion.div>
				)}
			</AnimatePresence>
		</>,
		document.body
	);
};

// Toast Notification Component
interface ToastProps {
	message: string;
	isVisible: boolean;
	onClose: () => void;
	triggerZoom: number;
}

export const Toast = ({ message, isVisible, onClose, triggerZoom }: ToastProps) => {
	useEffect(() => {
		if (isVisible) {
			const timer = setTimeout(onClose, 1000);
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
					<motion.div
						className="bg-success dark:bg-success-10 text-white px-6 py-3 rounded-lg shadow-lg flex items-center gap-3"
						key={triggerZoom}
						animate={{ scale: [1, 1.15, 1] }}
						transition={{ duration: 0.3 }}
					>
						<div className="w-6 h-6 rounded-full flex items-center justify-center">
							<CheckCircle className="w-4 h-4" />
						</div>
						<span className="font-medium">{message}</span>
					</motion.div>
				</motion.div>
			)}
		</AnimatePresence>
	);
};
