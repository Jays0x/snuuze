/* eslint-disable prettier/prettier */
import { Image, ImageBackground, StatusBar, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import TopActive from '../../components/onboardingTwo/TopActive';
import MenuDown from '../../components/onboardingTwo/MenuDown';
import backgroundImage from '../../assets/line.png';
import SecondOnboarding from '../../assets/second-onboarding.png';

const onboardingOne = () => {
  return (
    <SafeAreaView className="h-full w-full bg-secondary flex flex-col justify-between">
      <ImageBackground source={backgroundImage} className="bg-contain bg-top">
          <TopActive />
          <View><Image source={SecondOnboarding} className="bg-contain w-[100%] h-[92%]"/></View>
          <MenuDown />
          <StatusBar style="light" backgroundColor="#090909" />
      </ImageBackground>
    </SafeAreaView>
  );
}


export default onboardingOne;
