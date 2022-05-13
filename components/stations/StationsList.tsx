import { useState, useEffect, Component } from 'react';
import { Text, StyleSheet, TouchableOpacity, ScrollView, Icon } from 'react-native';
import styles from "../../styles/Base.js";
import stationModel from '../../models/stations'
import delayModel from '../../models/delays'
import { DataTable } from 'react-native-paper';
import { Searchbar } from 'react-native-paper';
import * as React from 'react';

export default function StationsList({ navigation, delays, setDelays }) {
    const [stations, setStations] = useState([]);

    const getStations = async () => {
        setStations(await stationModel.getStations());
    };

    useEffect(() => {
        getStations();
    }, []);

    const getDelays = async () => {
        setDelays(await delayModel.getDelays());
    };

    useEffect(() => {
        getDelays();
    }, []);


    const delayRows = delays
        .filter(delay => Object.keys(delay).length > 6)
        .map((delay, index) => {
            const stationRows = stations
            .filter(station => station.LocationSignature === delay.FromLocation[0].LocationName)
            .map((station, index) => {
                return station
            });
            // console.log(stationRows[0].AdvertisedLocationName);
            return (<DataTable.Row key={index}>
                <DataTable.Cell>
                    <TouchableOpacity key={index} onPress={() => {
                        navigation.navigate('Tågdetaljer', {
                            stations: stations,
                            delay: delay
                        });
                    }} style={styles.appButtonContainer}>
                        <Text key={index} style={styles.appButtonText}>
                            {delay.AdvertisedTrainIdent} (
                                {delay.FromLocation[0].LocationName})
                            {/* {stationRows[0].AdvertisedLocationName}) */}
                        </Text>
                    </TouchableOpacity>
                </DataTable.Cell>
            </DataTable.Row>
            );
        });

    return (
        <ScrollView style={styles.base}>
            <Text style={styles.info}> Se förseningar/station</Text>
            <DataTable>
                <DataTable.Header>
                    <DataTable.Title>I NÄRHETEN</DataTable.Title>
                </DataTable.Header>
                <DataTable.Row>
                    <DataTable.Cell>VISA NÄRMASTE STATIONER</DataTable.Cell>
                </DataTable.Row>
            </DataTable>
            <DataTable>
                <DataTable.Header>
                    <DataTable.Title>ALLA</DataTable.Title>
                </DataTable.Header>
                {delayRows}
            </DataTable>
        </ScrollView>
    );
}
