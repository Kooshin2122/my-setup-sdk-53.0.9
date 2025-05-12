//
import { Stack } from "expo-router";
import { View } from "react-native";
import ThemeToggle from "./ThemeToggle";

export default function Index() {
  return (
    <View className="bg-background flex-1 p-4 gap-4 items-center justify-center">
      <Stack.Screen
        options={{
          title: "Settings",
          headerLargeTitle: true,
          headerTitleStyle: {
            fontSize: 20,
            fontWeight: "400",
          },
          headerStyle: {
            backgroundColor: "hsl(var(--primary))",
          },
          headerTintColor: "hsl(var(--foreground))",
          headerLargeTitleShadowVisible: true,
          headerLargeTitleStyle: {
            fontSize: 28,
            fontWeight: "600",
          },
          headerShadowVisible: false,
        }}
      />

      <ThemeToggle />
    </View>
  );
}
