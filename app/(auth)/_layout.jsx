/* eslint-disable prettier/prettier */
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

const Layout = () => {
 

  return (
    <Stack>
      <Stack.Screen name="sign-up" options={{ headerShown: false }} />
      <Stack.Screen name="sign-in" options={{ headerShown: true }} />
      <Stack.Screen name="onboardingOne" options={{ headerShown: false }} />
      <Stack.Screen name="onboardingTwo" options={{ headerShown: false }} />
      <Stack.Screen name="onboardingThree" options={{ headerShown: false }} />
      <Stack.Screen name="useEmail" options={{ headerShown: false }} />
      <Stack.Screen name="verification" options={{ headerShown: false }} />
      <Stack.Screen name="verificationEmail" options={{ headerShown: false }} />
      <Stack.Screen name="personalDetails" options={{ headerShown: false }} />
    </Stack>
  );
};


export default Layout;
