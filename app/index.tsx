import MyButton from "@/components/Mybutton";
import { Link, useRouter } from "expo-router";
import { View } from "react-native";

const Index = () => {
  const router = useRouter();

  const onContinue = () => {
    router.navigate("/login");
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <MyButton title={"Continue"} onPress={onContinue} />
    </View>
  );
};

export default Index;
