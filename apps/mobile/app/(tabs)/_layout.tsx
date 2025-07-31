import { HapticTab } from '@/components/HapticTab';
// import { IconSymbol } from '@/components/ui/IconSymbol';
import { TabBarBackground } from '@/components/ui/TabBarBackground';
import Colors from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';
import {
  BellIcon,
  ChatBubbleBottomCenterIcon,
  ClockIcon,
  HomeIcon,
} from 'react-native-heroicons/outline';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: {
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          elevation: 0,
          backgroundColor: 'white',
          borderTopWidth: 1,
          borderTopColor: '#e0e0e0',
          height: Platform.OS === 'ios' ? 90 : 70,
          paddingBottom: Platform.OS === 'ios' ? 34 : 10,
          paddingTop: 10,
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <HomeIcon size={20} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="myalert"
        options={{
          title: 'My alerts',
          tabBarIcon: ({ color, focused }) => (
            <ClockIcon size={20} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="alert"
        options={{
          title: 'Alert news',
          tabBarIcon: ({ color, focused }) => (
            <ChatBubbleBottomCenterIcon size={20} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="notification"
        options={{
          title: 'Notification',
          tabBarIcon: ({ color, focused }) => (
            <BellIcon size={20} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
