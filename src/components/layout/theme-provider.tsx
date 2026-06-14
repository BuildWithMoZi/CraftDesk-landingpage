"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { Moon, Sun } from "lucide-react";
import {
  applyTheme,
  DEFAULT_THEME,
  getStoredTheme,
  storeTheme,
  type Theme,
} from "@/lib/theme";
import { cn } from "@/lib/utils";

interface ThemeContextValue {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
  mounted: boolean;
}

const ThemeContext = createContext<ThemeContextValue | null>(null);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>(DEFAULT_THEME);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const stored = getStoredTheme();
    setThemeState(stored);
    applyTheme(stored);
    setMounted(true);
  }, []);

  const setTheme = useCallback((next: Theme) => {
    setThemeState(next);
    applyTheme(next);
    storeTheme(next);
  }, []);

  const toggleTheme = useCallback(() => {
    setThemeState((prev) => {
      const next = prev === "dark" ? "light" : "dark";
      applyTheme(next);
      storeTheme(next);
      return next;
    });
  }, []);

  const value = useMemo(
    () => ({ theme, setTheme, toggleTheme, mounted }),
    [theme, setTheme, toggleTheme, mounted]
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within ThemeProvider");
  }
  return context;
}

interface ThemeToggleProps {
  className?: string;
  size?: "sm" | "md";
}

export function ThemeToggle({ className, size = "md" }: ThemeToggleProps) {
  const { theme, toggleTheme, mounted } = useTheme();

  const iconSize = size === "sm" ? "h-4 w-4" : "h-5 w-5";
  const buttonSize = size === "sm" ? "h-9 w-9" : "h-10 w-10";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={cn(
        "flex items-center justify-center rounded-full border border-[var(--border)] bg-[var(--card)] text-[var(--foreground)] transition-colors hover:border-[var(--orange)]/30 hover:bg-[var(--subtle)]",
        buttonSize,
        className
      )}
      aria-label={mounted && theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
      suppressHydrationWarning
    >
      {mounted && theme === "dark" ? (
        <Sun className={iconSize} />
      ) : (
        <Moon className={iconSize} />
      )}
    </button>
  );
}
