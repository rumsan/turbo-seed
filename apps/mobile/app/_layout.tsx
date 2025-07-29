import { GluestackUIProvider } from '@/components/ui/gluestack-ui-provider';
import { useColorScheme } from '@/components/useColorScheme';
import { AlertPopupProvider } from '@/context/AlertPopupProvider';
import '@/global.css';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from '@react-navigation/native';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: '(tabs)',
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <GluestackUIProvider mode="light">
      <RootLayoutNav />
    </GluestackUIProvider>
  );
}

function RootLayoutNav() {
  const colorScheme = useColorScheme();
  const AppLayout = () => {
    return (
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="modal" options={{ presentation: 'modal' }} />
        <Stack.Screen name="alert" options={{ headerShown: true }} />
        <Stack.Screen name="+not-found" />
        {/* <Stack.Screen name="home" options={{ headerShown: false }} />
        <Stack.Screen name="notification" options={{ headerShown: false }} />
        <Stack.Screen name="settings" options={{ headerShown: false }} /> */}
      </Stack>
    );
  };

  const queryClient = new QueryClient();

  return (
    <GluestackUIProvider mode="light">
      <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <QueryClientProvider client={queryClient}>
          <AlertPopupProvider>
            <AppLayout />
          </AlertPopupProvider>
        </QueryClientProvider>
      </ThemeProvider>
    </GluestackUIProvider>
  );
}
