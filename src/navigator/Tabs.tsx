import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SearchScreen } from '../screens/SearchScreen';
import { Platform } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Tab2Screen } from './Tab2';
import { Tab1Screen } from './Tab1';

const Tab = createBottomTabNavigator();

export const Tabs = () => {
  return (
    <Tab.Navigator
        sceneContainerStyle={{
            backgroundColor: 'white'
        }}
        screenOptions={{
            headerShown: false,
            tabBarActiveTintColor: "#5856D6",
            tabBarLabelStyle: {
                marginBottom: ( Platform.OS === 'ios' ) ? 0 : 10
            },
            tabBarStyle: {
                position: 'absolute',
                backgroundColor: 'rgba(255,255,255, 0.92)',
                borderWidth: 0,
                elevation: 0,
                height: (Platform.OS === 'ios') ? 80 : 60
            }
        }}
    >
      <Tab.Screen 
        name="HomeScreen" 
        component={ Tab1Screen } 
        options={{
            tabBarLabel: "Listado",
            tabBarIcon: ({color}) => (
                <Icon 
                    color={color} 
                    size={ 25 } 
                    name="list-outline"
                />
            )
        }}
      />

      <Tab.Screen 
        name="SearchScreen" 
        component={ Tab2Screen }
        options={{
            tabBarLabel: "Listado",
            tabBarIcon: ({color}) => (
                <Icon 
                    color={color} 
                    size={20} 
                    name="search-outline"
                />
            )
        }}
       />
    </Tab.Navigator>
  );
}