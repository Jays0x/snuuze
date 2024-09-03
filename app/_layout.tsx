/* eslint-disable prettier/prettier */
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font"; // Import expo-font to load custom fonts
import { useEffect, useState } from "react";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  const loadFonts = async () => {
    await Font.loadAsync({
      'CenturyGothic': require('../assets/fonts/CenturyGothic.ttf'),
      'CenturyGothic-Bold': require('../assets/fonts/gothicb.ttf'),
    });
    setFontsLoaded(true);
    SplashScreen.hideAsync(); // Hide splash screen once fonts are loaded
  };

  useEffect(() => {
    loadFonts(); // Load fonts when the component is mounted
  }, []);

  if (!fontsLoaded) {
    return null; // Return null until fonts are loaded to prevent flickering
  }

  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="(root)/(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="(auth)" options={{ headerShown: false }} />
      <Stack.Screen name="+not-found" />
    </Stack>
  );
}
