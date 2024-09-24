import React from "react";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

const RootLayout = () => {
  return (
    <>
    {/* <Stack screenOptions={{ headerShown: false }}></Stack> */}
      <Stack >
        <Stack.Screen name="index" />
        <Stack.Screen name="login" />
        <Stack.Screen name="signup" />
      </Stack>
      <StatusBar backgroundColor="white" style="dark" />
    </>
  );
};

export default RootLayout;
