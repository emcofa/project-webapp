import { Ionicons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import Delays from "./components/delays/Delays";
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
  "Trafikinfo": "train-outline",
  "Tåg": "information-circle-outline",
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
          tabBarActiveTintColor: '#000',
          tabBarInactiveTintColor: 'gray',
          headerShown: false
        })}
        >
          <Tab.Screen name="Tåg">
            {() => <Delays delays={delays} setDelays={setDelays} />}
          </Tab.Screen>
          <Tab.Screen name="Trafikinfo">
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
