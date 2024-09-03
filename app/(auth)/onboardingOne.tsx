/* eslint-disable prettier/prettier */
import { Image, ImageBackground, StatusBar, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import TopActive from '../../components/onboardingOne/TopActive';
import MenuDown from '../../components/onboardingOne/MenuDown';
import backgroundImage from '../../assets/line.png';
import FirstOnboarding from '../../assets/first-onboarding.png';

const onboardingOne = () => {
  return (
    <SafeAreaView className="h-full w-full bg-secondary flex flex-col justify-between">
      <ImageBackground source={backgroundImage} className="bg-contain bg-top">
          <TopActive />
          <View><Image source={FirstOnboarding} className="bg-contain w-[100%] h-[80%]"/></View>
          <MenuDown />
          <StatusBar style="light" backgroundColor="#090909" />
      </ImageBackground>
    </SafeAreaView>
  );
}


export default onboardingOne;
