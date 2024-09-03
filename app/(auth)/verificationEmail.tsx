/* eslint-disable prettier/prettier */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable prettier/prettier */
import React, { useRef, useState, useEffect } from 'react';
import { View, TextInput, Text, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Link, useRouter } from "expo-router"; 
import { Overlay, Button } from 'react-native-elements';
import TopActive from '@/components/sign-up/TopActive';
import Edit from '../../assets/edit.png'

const VerificationScreen = () => {
  const [code, setCode] = useState(['', '', '', '']);
  const [isOverlayVisible, setIsOverlayVisible] = useState(false); // State to manage overlay visibility
  const [timer, setTimer] = useState(59); // Timer state
  const inputRefs = [useRef(), useRef(), useRef(), useRef()];
  const router = useRouter(); 

  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(interval); // Cleanup on unmount
    }
  }, [timer]);

  const handleInputChange = (value, index) => {
    let newCode = [...code];
    
    if (value) {
      if (/^\d$/.test(value)) {  
        newCode[index] = value;
        setCode(newCode);
        if (index < 3) {
          inputRefs[index + 1].current.focus();
        }
      }
    } else {
      newCode[index] = '';
      setCode(newCode);

      if (index > 0) {
        inputRefs[index].current.blur();  
        inputRefs[index - 1].current.focus(); 
      }
    }
  };

  const handleKeyPress = (e, index) => {
    if (e.nativeEvent.key === 'Backspace' && code[index] === '' && index > 0) {
      inputRefs[index - 1].current.focus();
    }
  };

  const handleSubmit = () => {
    router.push('/personalDetails');
  };

  const handleResendCode = () => {
    setIsOverlayVisible(true); // Show the overlay
    setTimer(58); // Reset the timer when resending the code
  };

  return (
    <SafeAreaView className='bg-secondary h-full p-5 w-full'>
        
      <Link href='/(auth)/sign-up' className='w-[60px] h-[60px] '><TopActive  /></Link>
    
      <View className="flex flex-col gap-2 mt-8 mb-10 justify-center items-center">
        <Text className="text-[30px] text-white text-center tracking-tighter font-[CenturyGothic-Bold]">
          00:{timer < 10 ? `0${timer}` : timer} 
        </Text>
        <Text className="text-white text-[14px] text-center mb-4 opacity-70 font-[CenturyGothic]">
          We&apos;ve sent a verification code to your email.
        </Text>
        <TouchableOpacity className='bg-comp-color px-10 py-3  rounded-full mb-8' onPress={handleResendCode}>
          <Text className='text-white opacity-70'>Resend</Text>
        </TouchableOpacity>

        <View className='flex flex-row justify-center items-center gap-2'>
            <Text className='text-white text-[18px] opacity-70 font-[CenturyGothic-Bold]'>talk2jays0x@gmail.com</Text>
            <Link href='/(auth)/sign-up' className='h-full'><Image source={Edit} className='w-[20px] h-[20px]'/></Link>
        </View>

      </View>
      

      <View className="flex flex-row justify-between bg-secondary h-full">
        {code.map((digit, index) => (
          <TextInput
            key={index}
            ref={inputRefs[index]}
            selectionColor="#FFF"
            placeholderTextColor='#ffffff30'
            value={digit}
            onChangeText={(value) => handleInputChange(value, index)}
            onKeyPress={(e) => handleKeyPress(e, index)}
            onSubmitEditing={index === 3 ? handleSubmit : null} 
            keyboardType="numeric"
            maxLength={1}
            className="w-[85px] h-[60px] text-white bg-comp-color rounded-lg text-center text-xl"
            returnKeyType={index === 3 ? "done" : "next"} 
          />
        ))}
        
      </View>

      

      <Overlay 
        isVisible={isOverlayVisible} 
        onBackdropPress={() => setIsOverlayVisible(false)} 
        overlayStyle={{ width: '90%', padding: 30, borderRadius: 10, backgroundColor: '#121212' }} 
      >
        <Text className='text-[25px] text-center pb-2 text-white font-[CenturyGothic-Bold] tracking-tighter'>Code sent</Text>
        <Text className='text-white opacity-70 pb-5 font-[CenturyGothic] text-center'>
          A verification code has been sent to your email.
        </Text>
        <Button 
          title="OK" 
          onPress={() => setIsOverlayVisible(false)} 
          buttonStyle={{ backgroundColor: '#B48DC6', borderRadius: 100 }} // Custom button color
          titleStyle={{ fontFamily: 'CenturyGothic-Bold' }} // Optional: customize the button text style
        />
      </Overlay>

      

    </SafeAreaView>
  );
};

export default VerificationScreen;
