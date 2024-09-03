/* eslint-disable prettier/prettier */
import TopActive from "@/components/sign-up/TopActive";
import { useNavigation } from '@react-navigation/native'; // Import useNavigation for navigation
import { Image, KeyboardAvoidingView, Platform, StatusBar, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styled } from 'nativewind';
import ToggleEye from '../../assets/eye.png'
import CheckTick from '../../assets/check.png'
import { Link } from "expo-router";



const SignUp = () => {
  const navigation = useNavigation(); // Initialize navigation
  const StyledTextInput = styled(TextInput);

  const handlePhoneSubmit = () => {
    // Navigate to the verification screen
    navigation.navigate('personalDetails'); // Replace with your actual route name
  };

  return (
    <SafeAreaView className="flex h-full items-start justify-between p-5 bg-secondary">

      <TopActive />
      
      <View className="flex flex-col gap-2 mt-8 mb-10">
        <Text className="text-[30px] text-white tracking-tighter font-[CenturyGothic-Bold]">Personal details</Text>
        <Text className="text-white text-[14px] opacity-70 font-[CenturyGothic]">Please provide your personal details</Text>
      </View>

      <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'} 
        style={{ flex: 1 }}
        className="w-full flex items-start"
      >
        <TouchableOpacity className="bg-comp-color w-full mb-4 text-[14px] flex flex-row items-center px-5 text-white rounded-full">
          <StyledTextInput
            className=" text-[14px] p-4 text-white rounded-full w-full h-full placeholder:text-[16px] font-[CenturyGothic]"
            placeholder="Full name"
            selectionColor="#FFF"
            placeholderTextColor='#ffffff30'
            onSubmitEditing={handlePhoneSubmit} // Trigger navigation when "Done" is pressed
            returnKeyType="done" // Shows "Done" button on the keyboard
          />
        </TouchableOpacity>

        <TouchableOpacity className="bg-comp-color w-full text-[14px] flex justify-between flex-row items-center px-5 text-white rounded-full">
          
          <StyledTextInput
            className=" text-[14px] p-4 text-white rounded-full w-[90%] h-full placeholder:text-[16px] font-[CenturyGothic]"
            placeholder="Password"
            selectionColor="#FFF"
            placeholderTextColor='#ffffff30'
            onSubmitEditing={handlePhoneSubmit} // Trigger navigation when "Done" is pressed
            returnKeyType="done" // Shows "Done" button on the keyboard
          />
          <Image source={ToggleEye} className="w-[20px] h-[20px] "/>
        </TouchableOpacity>

        <View className="mt-8 flex flex-col items-start">
          <View className="flex flex-row gap-2 items-center mb-2 justify-start">
            <Image source={CheckTick} className="w-[24px] h-[24px]"/>
            <Text className="text-[16px] font-[CenturyGothic] text-white opacity-70">Must be at least 8 characters</Text>
          </View>

          <View className="flex flex-row gap-2 items-center mb-2 justify-start">
            <Image source={CheckTick} className="w-[24px] h-[24px]"/>
            <Text className="text-[16px] font-[CenturyGothic] text-white opacity-70">Use Symbols, Upper case, and numbers</Text>
          </View>

          <View className="flex flex-row gap-2 items-center mb-2 justify-start">
            <Image source={CheckTick} className="w-[24px] h-[24px]"/>
            <Text className="text-[16px] font-[CenturyGothic] text-white opacity-70">Password strength - <Text className="text-[#FC3838]">Weak</Text></Text>
          </View>

        </View>

     
      
      </KeyboardAvoidingView>

      <TouchableOpacity className="w-full">
        <Link href='/personalDetails' className='bg-primary font-[CenturyGothic-Bold] text-[16px] w-full text-center py-5 font-semibold text-white rounded-full'>Continue</Link> 
      </TouchableOpacity>
      

      <StatusBar barStyle="light-content" />
    </SafeAreaView>
  );
}

export default SignUp;
