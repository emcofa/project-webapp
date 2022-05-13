import { Ionicons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import Home from "./components/Home";
import StationsNavigate from "./components/stations/StationsNavigate";
import Messages from "./components/messages/Messages";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useState, useEffect } from 'react';
import styles from "./styles/Base.js";
import FlashMessage from "react-native-flash-message";
import { LogBox } from "react-native";

LogBox.ignoreLogs([
  "ViewPropTypes will be removed",
  "ColorPropType will be removed",
  "PointPropType will be removed",
  "EdgeInsetsPropType will be removed",
])


const routeIcons = {
  "Stationer": "md-walk-sharp",
  "Tåg": "train-outline",
  "Trafikmeddelanden": "notifications-outline",
};

const Tab = createBottomTabNavigator();


export default function App() {

  const [delays, setDelays] = useState([]);

  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <Tab.Navigator screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName = routeIcons[route.name] || "alert";

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#1e90ff',
          tabBarInactiveTintColor: 'gray',
          headerShown: false
        })}
        >
          <Tab.Screen name="Tåg">
            {() => <Home delays={delays} setDelays={setDelays} />}
          </Tab.Screen>
          <Tab.Screen name="Stationer">
            {() => <StationsNavigate delays={delays} setDelays={setDelays} />}
          </Tab.Screen>
          <Tab.Screen name="Trafikmeddelanden">
            {() => <Messages delays={delays} setDelays={setDelays} />}
          </Tab.Screen>
        </Tab.Navigator>
      </NavigationContainer>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
