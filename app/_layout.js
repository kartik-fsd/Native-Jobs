import { Stack } from "expo-router";
import { useCallback } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

const Layout = () => {
    const [fontsLoaded, fontError] = useFonts({
        'DMSans-Bold': require('../assets/fonts/DMSans-Bold.ttf'),
        'DMSans-Medium': require('../assets/fonts/DMSans-Medium.ttf'),
        'DMSans-Regular': require('../assets/fonts/DMSans-Regular.ttf'),
      });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return <Stack onLayout={onLayoutRootView} />;
};

export default Layout;
