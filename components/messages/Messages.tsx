import { Text, ScrollView, } from 'react-native';
import styles from "../../styles/Base.js";
import MessageList from './MessageList';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';



import messageModel from '../../models/messages'


export default function Delays({ delays, setDelays }) {

    return (
        <SafeAreaView style={[styles.container, styles.base]}>
            <ScrollView>
                <Text style={[styles.info, styles.center]}>Trafikmeddelanden</Text>
                <MessageList delays={delays} setDelays={setDelays} />
                <StatusBar style="auto" />
            </ScrollView>
        </SafeAreaView>
    );
}
