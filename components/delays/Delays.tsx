import { useState, useEffect } from 'react';
import { Text, StyleSheet, View, } from 'react-native';
import DelaysList from './DelaysList';
import styles from "../../styles/Base.js";
import Home from './Home';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function StationsNavigate(props) {
    return (
        <Stack.Navigator initialRouteName="Hem">
            <Stack.Screen name="Hem" component={Home} />
            <Stack.Screen name="Översikt">
                {(screenProps) => <DelaysList {...screenProps} delays={props.delays} setDelays={props.setDelays} />}
            </Stack.Screen>
        </Stack.Navigator>
    );
};

