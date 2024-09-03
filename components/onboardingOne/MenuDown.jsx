/* eslint-disable prettier/prettier */
import { Link } from 'expo-router';
import { View, Text } from 'react-native'

const MenuDown = () => {
  return (
    <View className='bg-comp-color flex flex-col h-[340px] w-full rounded-[40px] pt-4 items-center absolute bottom-[-110px]'>

      <View className='w-[80px] bg-overlay h-[6px] rounded-full mb-16'></View>
     <View className='text-center flex flex-col items-center justify-center gap-2 pb-8 w-[60%]'>
        <Text className='text-center text-white text-[32px] font-[CenturyGothic-Bold]'>Always on time</Text>
        <Text className='text-[16px] text-white text-center opacity-70 font-[CenturyGothic]'>Receive timely notifications for your next destination.</Text>
     </View>

     <Link href='/onboardingTwo' className='bg-primary text-[16px] px-40 py-4 font-[CenturyGothic-Bold] text-white rounded-full'>Next</Link>
    </View>
  )
}

export default MenuDown;