import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, ScrollView, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import train from '../assets/train.jpg';
import Delays from './delays/Delays';
import styles from "../styles/Base.js";


// API-key: b14d3d731d24a4979327e2179104bfba

export default function Home({delays, setDelays}) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.base}>
        <Delays delays={delays} setDelays={setDelays} />
        <StatusBar style="auto" />
      </ScrollView>
    </SafeAreaView>
  );
}

