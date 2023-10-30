import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import UsersScreen from '../../screens/UsersScreen/UsersScreen';
import { screenOptions } from '../navigator.styles';
import CounterScreen from '../../screens/CounterScreen/CounterScreen';
import { BottomStackParamList } from '../types';
import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons'; 

const BottomTabNavigator = () => {
  const Tab = createBottomTabNavigator<BottomStackParamList>();
  return (
    <Tab.Navigator {...{ screenOptions }}>
     <Tab.Screen
        name="UsersScreen"
        component={UsersScreen}
        options={{
          title: 'USERS',
          tabBarIcon: ({ color }) => <AntDesign name="user" size={32} color={color} />,
        }}
      />
      <Tab.Screen
        name="CounterScreen"
        component={CounterScreen}
        options={{
          title: 'COUNTER',
          tabBarIcon: ({ color }) => <MaterialCommunityIcons name="counter" size={32} color={color} />,
        }}
      />
    </Tab.Navigator>
  )
}

export default BottomTabNavigator