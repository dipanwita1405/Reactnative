import { View, TextInput, Image } from "react-native";
import React from "react";
import MyButton from "@/components/Mybutton";
import { useRouter } from "expo-router";
import { ScrollView } from "react-native-gesture-handler";

const SignUp = () => {
  const router = useRouter();

  const onRegister = () => {
    router.navigate("/login");
  };

  return (
    <View style={{ flex: 1 }}>
    <ScrollView>
      <Image
        source={require("@/assets/images/signup.png")} 
        style={{
          width: "100%",
          height: 400,
          resizeMode: "cover",
        }}
      />

     
      <View style={{ padding: 20 }}>
        
        <TextInput
          placeholder="Enter Your Username"
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
          secureTextEntry={true} 
          onChangeText={(e) => console.log(e)}
        />

<TextInput
          placeholder="Enter Your Phonenumber"
          style={{
            borderWidth: 1,
            height: 50,
            paddingHorizontal: 20,
            borderRadius: 10,
            marginBottom: 20,
          }}
          onChangeText={(e) => console.log(e)}
        />

       
        <MyButton title="SignUp" onPress={onRegister} />
      </View>
      </ScrollView>
    </View>
  );
};

export default SignUp;
