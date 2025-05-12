import { Stack } from "expo-router";
import { View } from "react-native";
import "../global.css";
import { ThemeProvider } from "../providers/theme-provider";

export default function RootLayout() {
  return (
    <ThemeProvider>
      <View className="flex-1 bg-background">
        <Stack />
      </View>
    </ThemeProvider>
  );
}
