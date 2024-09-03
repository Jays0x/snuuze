/* eslint-disable prettier/prettier */
import { Link } from "expo-router";
import { View } from "react-native";


const TopActive = () => {
  return (
   
    <View className="flex flex-row items-center justify-between p-5">

      <View className="flex justify-center items-center flex-row gap-1">
        <View className="h-[10px] w-[30px] bg-primary rounded-full"></View>
        <View className="h-[10px] w-[10px] bg-comp-color rounded-full"></View>
        <View className="h-[10px] w-[10px] bg-comp-color rounded-full"></View>
      </View>

        <Link href='/onboardingThree' className="py-3 px-8 font-[CenturyGothic-Bold] bg-comp-color rounded-full text-white text-[14px]" >Skip</Link>
      
    </View>
  );
}


export default TopActive;
