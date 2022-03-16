import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import { useFonts, PlayfairDisplay_400Regular, PlayfairDisplay_700Bold} from '@expo-google-fonts/playfair-display';
import AppNavigation from './screens/AppNavigation';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { setBackgroundColorAsync } from 'expo-navigation-bar';
import { osName } from 'expo-device';
import { useEffect } from 'react';
import Color from './styles/color';

export default function App() {
  // Zonder google fonts --> met de gedownloade versies
  // let [fontsLoaded] = useFonts({
  //   PlayfairDisplayVariable: require('./assets/fonts/PlayfairDisplay-Italic-VariableFont_wght.ttf'),
  // }); 

  // Als fonts niet willen inladen (Android) --> probeer google fonts 'expo install @expo-google-fonts/playfair-display' 
  let [fontsLoaded, error] = useFonts({
    PlayfairDisplay_400Regular,
    PlayfairDisplay_700Bold,
  })

  useEffect(() => {
    console.log(osName)
    // Android heeft onderaan nog een witte streep --> wegwerken met kijken of je op een android device zit 
    if (osName === 'Android') setBackgroundColorAsync(Color.dark)
  }, [])
  //FONT INLADEN --> fonts zijn overal nodig --> pas nadat fonts geladen zijn, kan de app verder runnen

  if(!fontsLoaded){
    return <AppLoading />
  } 
  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <StatusBar style="inverted" />
        <AppNavigation/>
      </SafeAreaProvider>
    </NavigationContainer>
  );
  
}
