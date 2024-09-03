/* eslint-disable prettier/prettier */
import { Link } from 'expo-router';
import { View, Text } from 'react-native'

const MenuDown = () => {
  return (
    <View className='bg-comp-color flex flex-col h-[400px] w-full rounded-[40px] pt-4 items-center absolute bottom-[-0px]'>

      <View className='w-[80px] bg-overlay h-[6px] rounded-full mb-16'></View>
     <View className='text-center flex flex-col items-center justify-center gap-2 pb-8 w-[60%]'>
        <Text className='text-center text-white text-[32px] font-[CenturyGothic-Bold]'>Never get lost again</Text>
        <Text className='text-[16px] text-white text-center opacity-70 font-[CenturyGothic] '>Always stay on track and arrive at your destination with confidence.</Text>
     </View>

      <View className='flex flex-col gap-4'>
     <Link href='/sign-in' className='bg-overlay font-[CenturyGothic-Bold] text-[16px] px-40 py-4 text-white rounded-full'>Log in</Link>
     <Link href='/sign-up' className='bg-primary font-[CenturyGothic-Bold] text-[16px] px-40 py-4 text-white rounded-full'>Sign up</Link>
     </View>
    </View>
  )
}

export default MenuDown;