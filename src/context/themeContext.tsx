import React, {
  useState,
  useEffect,
  createContext,
  FunctionComponent,
} from "react";

const localStorageKey = "mode";

// Saved mode
type Mode = "light" | "dark" | "system";
// Visual themes
type Theme = "light" | "dark";

// exposed context for doing awesome things directly in React
export const ThemeContext = createContext<{
  mode: Mode;
  theme: Theme;
  setMode: (mode: Mode) => void;
}>({
  mode: "system",
  theme: "light",
  setMode: () => {},
});

export const saveThemeModePrefences = () => {
  let mode = null;
  if (typeof window !== "undefined") {
    mode = localStorage.getItem("mode") || "system";
  }
  let theme: any;
  if (mode === "system") {
    const isSystemInDarkMode = matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    theme = isSystemInDarkMode ? "dark" : "light";
  } else {
    // for light and dark, the theme is the mode
    theme = mode;
  }
  document.body.classList.add(theme);
};

export const clearAndReload = () => {
  if (typeof window !== "undefined") {
    localStorage.removeItem("mode");
  }
  document.location.reload();
};

export const ThemeProvider: FunctionComponent = ({ children }) => {
  const [mode, setMode] = useState<Mode>(() => {
    let initialMode: any = null;
    if (typeof window !== "undefined") {
      initialMode =
        (localStorage.getItem(localStorageKey) as Mode | undefined) || "system";
    }
    return initialMode;
  });

  // When the mode changes, save it to the localStorage and to the database
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem(localStorageKey, mode);
    }
  }, [mode]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem(localStorageKey, mode);
    }
  }, []);

  const [theme, setTheme] = useState<Theme>(() => {
    if (mode !== "system") {
      return mode;
    }
    const isSystemInDarkMode = matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    return isSystemInDarkMode ? "dark" : "light";
  });

  // Update the theme according to the mode
  useEffect(() => {
    if (mode !== "system") {
      setTheme(mode);
      return;
    }

    const isSystemInDarkMode = matchMedia("(prefers-color-scheme: dark)");
    // If system mode, immediately change theme according to the current system value
    setTheme(isSystemInDarkMode.matches ? "dark" : "light");

    // As the system value can change, we define an event listener when in system mode
    // to track down its changes
    const listener = (event: MediaQueryListEvent) => {
      setTheme(event.matches ? "dark" : "light");
    };
    isSystemInDarkMode.addListener(listener);
    return () => {
      isSystemInDarkMode.removeListener(listener);
    };
  }, [mode]);

  // Update the visuals on theme change
  useEffect(() => {
    // Clear previous classNames on the body and add the new one
    document.body.classList.remove("light");
    document.body.classList.remove("dark");
    document.body.classList.add(theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, mode, setMode }}>
      {children}
    </ThemeContext.Provider>
  );
};
