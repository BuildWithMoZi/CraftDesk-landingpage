export const THEME_STORAGE_KEY = "craftdesk-theme";

export type Theme = "dark" | "light";

export const DEFAULT_THEME: Theme = "light";

export function isTheme(value: string | null): value is Theme {
  return value === "dark" || value === "light";
}

export function getStoredTheme(): Theme {
  if (typeof window === "undefined") return DEFAULT_THEME;
  try {
    const stored = localStorage.getItem(THEME_STORAGE_KEY);
    return isTheme(stored) ? stored : DEFAULT_THEME;
  } catch {
    return DEFAULT_THEME;
  }
}

export function applyTheme(theme: Theme) {
  document.documentElement.setAttribute("data-theme", theme);
}

export function storeTheme(theme: Theme) {
  try {
    localStorage.setItem(THEME_STORAGE_KEY, theme);
  } catch {
    // localStorage unavailable
  }
}

export const themeInitScript = `(function(){try{var k="${THEME_STORAGE_KEY}";var t=localStorage.getItem(k);if(t!=="dark"&&t!=="light"){t="${DEFAULT_THEME}";document.documentElement.setAttribute("data-theme",t);return;}document.documentElement.setAttribute("data-theme",t);}catch(e){document.documentElement.setAttribute("data-theme","${DEFAULT_THEME}");}})();`;
