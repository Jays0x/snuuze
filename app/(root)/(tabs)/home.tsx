/* eslint-disable prettier/prettier */
import { StatusBar, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Home = () => {
  return (
    <SafeAreaView className="flex-1 items-center justify-center">
      <Text className="text-black text-[30px] font-semibold">Home</Text>
      <StatusBar />
    </SafeAreaView>
  );
}


export default Home;