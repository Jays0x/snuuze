/* eslint-disable prettier/prettier */
import { View } from "react-native";


const TopActive = () => {
  return (
   
    <View className="flex flex-row items-center justify-between p-5">

      <View className="flex justify-center items-center flex-row gap-1 pb-5">
        <View className="h-[10px] w-[10px] bg-comp-color rounded-full"></View>
        <View className="h-[10px] w-[10px] bg-comp-color rounded-full"></View>
        <View className="h-[10px] w-[30px] bg-primary rounded-full"></View>
      </View>
      
    </View>
  );
}


export default TopActive;
