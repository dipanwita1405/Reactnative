import { View, TextInput, Image } from "react-native";
import React from "react";
import MyButton from "@/components/Mybutton";
import { useRouter } from "expo-router";

const Login = () => {
  const router = useRouter();

  const onLogin = () => {
    router.navigate("/signup");
  };

  return (
    <View style={{ flex: 1 }}>
      
      <Image
        source={require("@/assets/images/logo.png")}
        style={{
          width: "100%",
          height: 400,
          resizeMode: "cover",
        }}
      />

     
      <View style={{ padding: 20 }}>
        
        <TextInput
          placeholder="Enter Your Email"
          style={{
            borderWidth: 1,
            height: 50,
            paddingHorizontal: 20,
            borderRadius: 10,
            marginBottom: 20,
          }}
          onChangeText={(e) => console.log(e)}
        />
         <TextInput
          placeholder="Enter Your Password"
          style={{
            borderWidth: 1,
            height: 50,
            paddingHorizontal: 20,
            borderRadius: 10,
            marginBottom: 20,
          }}
          onChangeText={(e) => console.log(e)}
        />

       
        <MyButton title="Login" onPress={onLogin} />
      </View>
    </View>
  );
};

export default Login;
