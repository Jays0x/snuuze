/* eslint-disable prettier/prettier */
import TopActive from "@/components/sign-up/TopActive";
import { useNavigation } from '@react-navigation/native'; // Import useNavigation for navigation
import { KeyboardAvoidingView, Platform, StatusBar, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styled } from 'nativewind';
import { Link } from "expo-router";

const SignUp = () => {
  const navigation = useNavigation(); // Initialize navigation
  const StyledTextInput = styled(TextInput);

  const handlePhoneSubmit = () => {
    // Navigate to the verification screen
    navigation.navigate('verification'); // Replace with your actual route name
  };

  return (
    <SafeAreaView className="flex h-full items-start justify-between p-5 bg-secondary">
      
      <TopActive />

      <View className="flex flex-col gap-2 mt-8 mb-10">
        <Text className="text-[25px] text-white tracking-tighter font-[CenturyGothic-Bold]">Input your phone no.</Text>
        <Text className="text-white text-[14px] opacity-70 font-[CenturyGothic]">Please provide your phone</Text>
      </View>

      <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'} 
        style={{ flex: 1 }}
        className="w-full flex items-center"
      >
        <TouchableOpacity className="bg-comp-color w-full text-[14px] flex flex-row items-center px-5 text-white rounded-full">
          <Text className="text-[16px] text-white font-bold opacity-70 font-[CenturyGothic]">(+1)</Text>
          <StyledTextInput
            className=" text-[14px] p-4 text-white rounded-full w-full h-full placeholder:text-[16px] font-[CenturyGothic]"
            placeholder="Enter phone no."
            selectionColor="#FFF"
            placeholderTextColor='#ffffff30'
            keyboardType="phone-pad"
            maxLength={10}
            onSubmitEditing={handlePhoneSubmit} // Trigger navigation when "Done" is pressed
            returnKeyType="done" // Shows "Done" button on the keyboard
          />
        </TouchableOpacity>

        <View className="flex flex-row justify-center items-center my-8 ">
          <Text className="text-white text-center w-full opacity-70 font-[CenturyGothic] text-[16px]">Or</Text>
        </View>

        <TouchableOpacity className="w-full">
          <Link href='/useEmail' className="p-5 bg-transparent border border-[#ffffff10] w-full text-white  text-center rounded-full font-[CenturyGothic-Bold] opacity-70 text-[16px]">Use email instead</Link>
        </TouchableOpacity>


      </KeyboardAvoidingView>

      
      

      <StatusBar barStyle="light-content" />
    </SafeAreaView>
  );
}

export default SignUp;
