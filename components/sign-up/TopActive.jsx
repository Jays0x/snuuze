/* eslint-disable prettier/prettier */
import { Image, View } from "react-native";
import Back from '../../assets/back.png'
import { Link } from "expo-router";


const TopActive = () => {
  return (
   
    <View >
      <View className="p-4 bg-comp-color rounded-full ">
         <Link href='/onboardingThree' className="flex flex-row justify-center items-center"> <Image source={Back} className=" w-[20px] mb-1 h-[20px] "/></Link>
      </View>
    </View>
  );
}


export default TopActive;
