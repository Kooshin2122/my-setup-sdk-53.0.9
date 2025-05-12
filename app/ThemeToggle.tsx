import React from "react";
import { Pressable, Text, View } from "react-native";
import { useTheme } from "../providers/theme-provider";

const options = [
  { key: "light", label: "Light", icon: "☀️" },
  { key: "dark", label: "Dark", icon: "🌙" },
  { key: "auto", label: "Automatic", icon: "🌓", disabled: true },
];

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <View className="bg-card rounded-xl p-2 w-full">
      <Text className="text-lg font-semibold mb-2 text-card-foreground">
        Theme
      </Text>
      {options.map((option) => (
        <Pressable
          key={option.key}
          className={`flex-row items-center justify-between px-4 py-3 rounded-lg mb-1 ${
            theme === option.key ? "bg-primary/10" : ""
          } ${option.disabled ? "opacity-50" : ""}`}
          onPress={() => {
            if (!option.disabled && option.key !== "auto")
              setTheme(option.key as "light" | "dark");
          }}
          disabled={option.disabled}
        >
          <View className="flex-row items-center gap-3">
            <Text className="text-xl">{option.icon}</Text>
            <Text className="text-base text-card-foreground">
              {option.label}
            </Text>
          </View>
          <View
            className={`w-5 h-5 rounded-full border-2 border-primary items-center justify-center ${
              theme === option.key ? "bg-primary" : "bg-transparent"
            }`}
          >
            {theme === option.key ? (
              <View className="w-3 h-3 rounded-full bg-primary-foreground" />
            ) : null}
          </View>
        </Pressable>
      ))}
    </View>
  );
}
