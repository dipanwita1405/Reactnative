import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { GestureResponderEvent } from "react-native"; 
import React from "react";

interface MyButtonProps {
  title: string;
  onPress: (event: GestureResponderEvent) => void; 
}

const MyButton: React.FC<MyButtonProps> = ({ title, onPress }) => {
  return (
    <TouchableOpacity activeOpacity={0.8} style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

export default MyButton;

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#0047AB",
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: "center", 
  },
  text: {
    fontSize: 16,
    color: "white",
    fontWeight: "bold",
  },
});
