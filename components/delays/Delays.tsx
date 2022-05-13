import { useState, useEffect } from 'react';
import { Text, StyleSheet, View, } from 'react-native';
import DelaysList from './DelaysList';
import styles from "../../styles/Base.js";



export default function Delays({delays, setDelays}) {
    return (
        <View>
            <Text style={styles.info}>Översikt förseningar</Text>
            <DelaysList delays={delays} setDelays={setDelays} />
        </View>
    );
}


