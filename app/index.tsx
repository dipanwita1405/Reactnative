import React from "react";
import { View, StyleSheet } from "react-native";
import MyButton from "../components/Mybutton";
import { useRouter } from "expo-router";

const Index = () => {
  const router = useRouter();

  const navigateToLogin = () => router.push("/login");
  const navigateToSignup = () => router.push("/signup");

  return (
    <View style={styles.container}>
      <MyButton title="Login" onPress={navigateToLogin} />
      <MyButton title="Signup" onPress={navigateToSignup} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Index;
