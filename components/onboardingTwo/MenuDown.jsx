/* eslint-disable prettier/prettier */
import { Link } from 'expo-router';
import { View, Text } from 'react-native'

const MenuDown = () => {
  return (
    <View className='bg-comp-color flex flex-col h-[340px] w-full rounded-[40px] pt-4 items-center absolute bottom-[-0px]'>

      <View className='w-[80px] bg-overlay h-[6px] rounded-full mb-16'></View>
     <View className='text-center flex flex-col items-center justify-center gap-2 pb-8 w-[60%]'>
        <Text className='text-center text-white text-[32px] tracking-tighter font-[CenturyGothic-Bold]'>Relax and enjoy your journey</Text>
        <Text className='text-[16px] text-white text-center opacity-70 font-[CenturyGothic]'>Curated playlist that help you unwind and make your trip more enjoyable.</Text>
     </View>

     <Link href='/onboardingThree' className='bg-primary font-[CenturyGothic-Bold] text-[16px] px-40 py-4 font-semibold text-white rounded-full'>Next</Link>
    </View>
  )
}

export default MenuDown;