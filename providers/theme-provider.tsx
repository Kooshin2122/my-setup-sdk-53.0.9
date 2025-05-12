import { createContext, useContext, useEffect, useState } from "react";
import { useColorScheme, View } from "react-native";

type Theme = "light" | "dark";

type ThemeProviderProps = {
  children: React.ReactNode;
};

type ThemeProviderState = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

const initialState: ThemeProviderState = {
  theme: "light",
  setTheme: () => null,
};

const ThemeProviderContext = createContext<ThemeProviderState>(initialState);

export function ThemeProvider({ children }: ThemeProviderProps) {
  const colorScheme = useColorScheme();
  const [theme, setTheme] = useState<Theme>(colorScheme || "light");

  useEffect(() => {
    setTheme(colorScheme || "light");
  }, [colorScheme]);

  return (
    <ThemeProviderContext.Provider value={{ theme, setTheme }}>
      <View className={`flex-1 ${theme === "dark" ? "dark" : ""}`}>
        {children}
      </View>
    </ThemeProviderContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext);

  if (context === undefined)
    throw new Error("useTheme must be used within a ThemeProvider");

  return context;
};
