import { useState, useEffect } from 'react';
import { Text, StyleSheet, ScrollView, } from 'react-native';
import styles from "../../styles/Base.js";
import delayModel from '../../models/delays'
import { format } from "date-fns";
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
            <DataTable.Cell>{delay.AdvertisedTrainIdent}</DataTable.Cell>
            <DataTable.Cell>{Moment(delay.AdvertisedTimeAtLocation).format('HH:mm')}</DataTable.Cell>
            <DataTable.Cell>{Moment(delay.EstimatedTimeAtLocation).format('HH:mm')}</DataTable.Cell>
        </DataTable.Row>
        );
    });



    return (
        <ScrollView>
            <DataTable>
                <DataTable.Header>
                    <DataTable.Title>Tågnummer</DataTable.Title>
                    <DataTable.Title>Ursprunglig tid</DataTable.Title>
                    <DataTable.Title>Ny avgång</DataTable.Title>
                </DataTable.Header>
                {list}
            </DataTable>
        </ScrollView>
    );
}
