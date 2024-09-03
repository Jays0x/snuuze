/* eslint-disable prettier/prettier */
import { Redirect, SplashScreen } from "expo-router";
import { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const Home = () => {
  const [loaded] = useState(true); // Assuming the app is already loaded

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null; // Prevent rendering until the app is ready
  }

  return (
    <SafeAreaView className="bg-secondary">
      <Redirect href="/(auth)/onboardingOne"/>
    </SafeAreaView>
  );
}

export default Home;
