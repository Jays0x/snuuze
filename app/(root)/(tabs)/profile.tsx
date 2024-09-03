import { StatusBar, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Profile = () => {
  return (
    <SafeAreaView className="flex-1 items-center justify-center">
      <Text className="text-black text-[30px] font-semibold">Profile</Text>
      <StatusBar style={{ Color: "black" }} />
    </SafeAreaView>
  );
}


export default Profile;
