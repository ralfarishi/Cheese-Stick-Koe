import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

type Theme = "light" | "dark";

interface ThemeContextValue {
	theme: Theme;
	toggleTheme: () => void;
	mounted: boolean;
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

interface ThemeProviderProps {
	children: ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
	const [theme, setTheme] = useState<Theme>("light");
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		// Get from localStorage atau system preference
		const savedTheme = localStorage.getItem("theme") as Theme | null;
		const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
			? "dark"
			: "light";

		const initialTheme = savedTheme || systemTheme;

		// Set theme dan sync localStorage
		setTheme(initialTheme);
		localStorage.setItem("theme", initialTheme);

		// Apply class ke HTML
		if (initialTheme === "dark") {
			document.documentElement.classList.add("dark");
		} else {
			document.documentElement.classList.remove("dark");
		}

		setMounted(true);
	}, []);

	const toggleTheme = () => {
		const newTheme = theme === "light" ? "dark" : "light";

		// Update state
		setTheme(newTheme);

		// Sync localStorage
		localStorage.setItem("theme", newTheme);

		// Apply class ke HTML
		if (newTheme === "dark") {
			document.documentElement.classList.add("dark");
		} else {
			document.documentElement.classList.remove("dark");
		}
	};

	return (
		<ThemeContext.Provider value={{ theme, toggleTheme, mounted }}>
			{children}
		</ThemeContext.Provider>
	);
}

export function useTheme(): ThemeContextValue {
	const context = useContext(ThemeContext);
	if (context === undefined) {
		throw new Error("useTheme must be used within ThemeProvider");
	}
	return context;
}
