import { useState, useEffect } from 'react';
import { Text, SafeAreaView, ScrollView, } from 'react-native';
import styles from "../../styles/Base.js";
import delayModel from '../../models/delays'
import { DataTable } from 'react-native-paper';
import Moment from 'moment';




export default function DelaysList({ delays, setDelays }) {

    const myFunction = async () => {
        setDelays(await delayModel.getDelays());
    };

    useEffect(() => {
        myFunction();
    }, []);

    const list = delays.map((delay, index) => {
        Moment.locale('sv');
        return (<DataTable.Row key={index}>
            <DataTable.Cell><Text style={[styles.bold, styles.typoTableBody]}>{delay.AdvertisedTrainIdent}</Text></DataTable.Cell>
            <DataTable.Cell><Text style={[styles.bold, styles.typoTableBody]}>{Moment(delay.AdvertisedTimeAtLocation).format('HH:mm')}</Text></DataTable.Cell>
            <DataTable.Cell><Text style={[styles.bold, styles.yellow, styles.typoTableBody]}>{Moment(delay.EstimatedTimeAtLocation).format('HH:mm')}</Text></DataTable.Cell>
        </DataTable.Row>
        );
    });

    return (
        <SafeAreaView style={[styles.container, styles.base]}>
            <ScrollView>
                <DataTable>
                    <DataTable.Header>
                        <DataTable.Title><Text style={styles.typoTableHeader}>Tågnummer</Text></DataTable.Title>
                        <DataTable.Title><Text style={styles.typoTableHeader}>Urspr. avg</Text></DataTable.Title>
                        <DataTable.Title><Text style={styles.typoTableHeader}>Förv. avg</Text></DataTable.Title>
                    </DataTable.Header>
                    {list}
                </DataTable>
            </ScrollView>
        </SafeAreaView>
    );
}
