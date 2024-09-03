/* eslint-disable prettier/prettier */
import { Image, ImageBackground, StatusBar, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import TopActive from '../../components/onboardingThree/TopActive';
import MenuDown from '../../components/onboardingThree/MenuDown';
import backgroundImage from '../../assets/line.png';
import ThirdOnboarding from '../../assets/third-onboarding.png';

const onboardingThree = () => {
  return (
    <SafeAreaView className="h-full w-full bg-secondary flex flex-col justify-between">
      <ImageBackground source={backgroundImage} className="bg-contain bg-top">
          <TopActive />
          <View><Image source={ThirdOnboarding} className="bg-contain w-[100%] h-[96%]"/></View>
          <MenuDown />
          <StatusBar style="light" backgroundColor="#090909" />
      </ImageBackground>
    </SafeAreaView>
  );
}


export default onboardingThree;
