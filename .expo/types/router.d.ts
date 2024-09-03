/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string = string> extends Record<string, unknown> {
      StaticRoutes: `/` | `/(auth)` | `/(auth)/onboardingOne` | `/(auth)/onboardingThree` | `/(auth)/onboardingTwo` | `/(auth)/sign-in` | `/(auth)/sign-up` | `/(auth)/useEmail` | `/(auth)/verification` | `/(auth)\personalDetails` | `/(auth)\verificationEmail` | `/(root)` | `/(root)/(tabs)` | `/(root)/(tabs)/home` | `/(root)/(tabs)/profile` | `/(root)/home` | `/(root)/profile` | `/(tabs)` | `/(tabs)/home` | `/(tabs)/profile` | `/_sitemap` | `/home` | `/onboardingOne` | `/onboardingThree` | `/onboardingTwo` | `/profile` | `/sign-in` | `/sign-up` | `/useEmail` | `/verification`;
      DynamicRoutes: never;
      DynamicRouteTemplate: never;
    }
  }
}
