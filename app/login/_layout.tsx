import { Stack } from "expo-router";

export default function LoginLayout() {
  return (
    <Stack
      screenOptions={{
        gestureEnabled: false, // ❌ no swipe back
        headerShown: false,    // optional
      }}
    >
      <Stack.Screen name="login" />
    </Stack>
  );
}