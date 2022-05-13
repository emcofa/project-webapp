import { useState, useEffect } from 'react';
import { Text, StyleSheet, View, ScrollView, } from 'react-native';
import styles from "../../styles/Base.js";
import delayModel from '../../models/delays'
import { format } from "date-fns";
import { DataTable } from 'react-native-paper';
import Moment from 'moment';
import messageModel from '../../models/messages'


export default function StockList({ delays, setDelays }) {

    const [messages, setMessages] = useState([]);

    const getMessages = async () => {
        setMessages(await messageModel.getMessages());
    };

    useEffect(() => {
        getMessages();
    }, []);

    const myFunction = async () => {
        setDelays(await delayModel.getDelays());
    };

    useEffect(() => {
        myFunction();
    }, []);



    const list = messages.map((message, index) => {
        console.log(message.ReasonCode[0]);
        return (<View key={index} style={styles.base}>
            <Text style={styles.items}> {message.Header}</Text>
            <Text> {message.ExternalDescription}</Text>
            <Text> </Text>
            <Text style={styles.bold}>Beskrivning: </Text><Text>{message.ReasonCode[0].Description}</Text>
        </View>
        );
    });



    return (
        <ScrollView>
            {list}
        </ScrollView>
    );
}
