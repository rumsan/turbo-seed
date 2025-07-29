import { Card, Center, ScrollView, Text, VStack } from '@/components/ui';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { Dimensions } from 'react-native';

export default function LandingScreen() {
  const screenWidth = Dimensions.get('window').width;
  const logoSize = Math.min(screenWidth * 0.5, 200); // Responsive logo size

  return (
    <LinearGradient colors={['#f0f4ff', '#eaf0ff']} style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <VStack className="relative flex-1 min-h-screen justify-center items-center p-8">
          <Center className="w-full mb-12">
            <Card className="w-full px-10 py-20 items-center bg-white/90 backdrop-blur-md rounded-2xl shadow-xs">
              <Text
                size="3xl"
                className="text-center font-bold text-primary-700 mb-2"
              >
                Suchana App
              </Text>

              <Text className="text-center text-gray-600 mt-20">
                Digital Office Assistant
              </Text>
            </Card>
          </Center>
          <Text className="absolute bottom-20 text-gray-400 text-xs italic">
            © {new Date().getFullYear()} Rumsan. All rights reserved.
          </Text>
        </VStack>
      </ScrollView>
    </LinearGradient>
  );
}
