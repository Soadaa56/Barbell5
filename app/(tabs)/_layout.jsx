import { View, Text, Image } from 'react-native';
import { Tabs, Redirect } from 'expo-router';
import React from 'react';
import { icons } from '../../constants';

const TabIcon = ({ icon, color, name, focused}) => {
  return (
    <View className="items-center justify-center gap-1">
      <Image 
        source={icon}
        resizeMode="contain"
        tintColor={color}
        className="w-6 h-6"
      />
      <Text className={`${focused ? 'font-semibold' : 'font-pregular'} text-xs`}>{name}</Text>
    </View>
  )
}

const TabsLayout = () => {
  return (
    <>
      <Tabs
        screenOptions={{
          tabBarShowLabel: false,
          tabBarActiveTintColor: 'red',
          tabBarInactiveTintColor: '#CDCDE0',
          tabBarStyle: {
            backgroundColor: '#161622',
            borderTopWidth: 1,
            borderTopColor: '#232533',
            height: 64,
          }
        }}
      >
        <Tabs.Screen
          name="home"
          options={{
            title: 'Home',
            headerShown: false,
            tabBarIcon: ({color, focused }) => (
              <TabIcon 
                icon={icons.home}
                color={color}
                name="Home"
                focused={focused}
              />
            )
          }}
        />
        <Tabs.Screen
          name="workout"
          options={{
            title: 'Workout',
            headerShown: false,
            tabBarIcon: ({color, focused }) => (
              <TabIcon 
                icon={icons.home}
                color={color}
                name="Workout"
                focused={focused}
              />
            )
          }}
        />
        <Tabs.Screen
          name="stats"
          options={{
            title: 'Stats',
            headerShown: false,
            tabBarIcon: ({color, focused }) => (
              <TabIcon 
                icon={icons.home}
                color={color}
                name="Stats"
                focused={focused}
              />
            )
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            title: 'Profile',
            headerShown: false,
            tabBarIcon: ({color, focused }) => (
              <TabIcon 
                icon={icons.profile}
                color={color}
                name="Profile"
                focused={focused}
              />
            )
          }}
        />
      </Tabs>
    </>
  )
}

export default TabsLayout