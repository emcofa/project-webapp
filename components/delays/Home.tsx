import { StatusBar } from 'expo-status-bar';
import { Image, TouchableOpacity, StyleSheet, Text, ScrollView, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import train from '../../assets/train2.jpg';
import Delays from './Delays';
import styles from "../../styles/Base.js";



// API-key: b14d3d731d24a4979327e2179104bfba

export default function Home({ navigation, delays, setDelays }) {
  return (
    <View style={styles.container}>
      <Image source={train} style={styles.img} />
      <Text style={styles.headline}>Tågförseningar</Text>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Översikt');
        }}
        style={styles.appButtonContainer}>
        <Text style={styles.headlineText}>
          Se översiktstabell
        </Text>
      </TouchableOpacity>
    </View>
  );
}

