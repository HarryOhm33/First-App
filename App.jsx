import React from 'react';
import Toast, { BaseToast } from 'react-native-toast-message';
import Home from './src/screens/Home';
import Details from './src/screens/Details';
import Temp from './src/Temp';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialIcons from '@react-native-vector-icons/material-icons';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const toastConfig = {
  success: props => (
    <BaseToast
      {...props}
      style={{ borderLeftColor: 'yellow', backgroundColor: '#dfbe1b' }}
      contentContainerStyle={{ paddingHorizontal: 15 }}
      text1Style={{ fontSize: 16, fontWeight: '600' }}
    />
  ),
};

const App = () => {
  return (
    <NavigationContainer>
      {/* <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Details" component={Details} />
        <Stack.Screen name="Temp" component={Temp} />
      </Stack.Navigator> */}
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          tabBarActiveTintColor: 'teal',
          tabBarInactiveTintColor: 'gray',
          tabBarLabelStyle: { fontSize: 14, fontWeight: '600' },
        }}
      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="home" color={color} size={size} />
            ),
          }}
        />

        <Tab.Screen
          name="Details"
          component={Details}
          initialParams={{ name: 'Parrot' }}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="pets" color={color} size={size} />
            ),
          }}
        />

        <Tab.Screen
          name="Temp"
          component={Temp}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="settings" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
      <Toast config={toastConfig} />
    </NavigationContainer>
  );
};

export default App;
