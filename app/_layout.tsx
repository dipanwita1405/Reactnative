import React from 'react';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

export default function RootLayout() {
  return (
    <>
      {/* <Stack screenOptions={{ headerShown: false }}> */}
      <Stack >
        <Stack.Screen name="index" />    {/* Main Screen */}
        <Stack.Screen name="login" />    {/* Login Screen */}
        <Stack.Screen name="signup" />   {/* Signup Screen */}
      </Stack>
      <StatusBar backgroundColor="white" style="dark" />
    </>
  );
}
