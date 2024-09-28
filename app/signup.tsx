import { View, TextInput, Image, ScrollView } from "react-native";
import React, { useState } from "react";
import MyButton from "@/components/Mybutton";
import { useRouter } from "expo-router";

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const router = useRouter();

  const onRegister = async () => {
    try {
      const response = await fetch('http://192.168.0.103/php_backend_signuplogin/signup.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username,
          email,
          password,
          phone,
        }),
      });

      const data = await response.json();
      if (response.ok) {
        console.log('Registration successful:', data);
        router.push('/login'); // Redirect to login after successful signup
      } else {
        console.error('Registration failed:', data);
      }
    } catch (error) {
      console.error('Error during registration:', error);
    }
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
            value={username}
            onChangeText={setUsername}
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
            value={email}
            onChangeText={setEmail}
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
            value={password}
            onChangeText={setPassword}
          />
          <TextInput
            placeholder="Enter Your Phone Number"
            style={{
              borderWidth: 1,
              height: 50,
              paddingHorizontal: 20,
              borderRadius: 10,
              marginBottom: 20,
            }}
            value={phone}
            onChangeText={setPhone}
          />
          <MyButton title="SignUp" onPress={onRegister} />
        </View>
      </ScrollView>
    </View>
  );
};

export default SignUp;
