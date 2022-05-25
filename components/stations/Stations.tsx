import { useState, useEffect } from 'react';
import { Text, StyleSheet, SafeAreaView } from 'react-native';
import styles from "../../styles/Base.js";
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import Moment from 'moment';
import { DataTable } from 'react-native-paper';



export default function Stations({ route }) {
    const { stations, delay } = route.params;
    const [marker, setMarker] = useState(null);
    const [locationMarker, setLocationMarker] = useState(null);
    const [errorMessage, setErrorMessage] = useState(null);
    let locationName = delay.FromLocation[0].LocationName
    let toLocationName = delay.ToLocation[0].LocationName

    function timeDiff() {
        let msDiff = new Date(delay.EstimatedTimeAtLocation).getTime() - new Date(delay.AdvertisedTimeAtLocation).getTime();
        let days = Math.floor(msDiff / (1000));
        let minutes = days /= 60;
        return minutes;
    }

    const stationRows = stations
        .filter(station => station.LocationSignature === locationName)
        .map((station, index) => {
            return station
        });

    const toStationRows = stations
        .filter(station => station.LocationSignature === toLocationName)
        .map((station, index) => {
            return station
        });

    let station = stationRows[0];
    let toStation = toStationRows[0];

    const coord = station.Geometry.WGS84.slice(7, -1);
    let splitArray = coord.split(' ');
    let long = parseFloat(splitArray[0]);
    let lat = parseFloat(splitArray[1]);
    let date = Moment(delay.EstimatedTimeAtLocation).format('YYYY-MM-DD')
    let est = Moment(delay.EstimatedTimeAtLocation).format('HH:mm')
    let adv = Moment(delay.AdvertisedTimeAtLocation).format('HH:mm')
    Moment.locale('sv');

    let message = `${timeDiff()} minuter försenat`;

    useEffect(() => {
        (async () => {
            setMarker(<Marker
                coordinate={{ latitude: lat, longitude: long }}
                title={station.AdvertisedLocationName}
                description={message}
            />);
        })();
    }, []);

    useEffect(() => {
        (async () => {
            const { status } = await Location.requestForegroundPermissionsAsync();

            if (status !== 'granted') {
                setErrorMessage('Permission to access location was denied');
                return;
            }

            const currentLocation = await Location.getCurrentPositionAsync({});

            setLocationMarker(<Marker
                coordinate={{
                    latitude: currentLocation.coords.latitude,
                    longitude: currentLocation.coords.longitude
                }}
                title="Min plats"
                pinColor="blue"
            />);
        })();
    }, []);

    return (
        <SafeAreaView style={[styles.container, styles.base]}>
            <Text style={[styles.center, styles.bold]}> Tåg {delay.AdvertisedTrainIdent}</Text>
            <Text style={styles.right}>{date}</Text>
            <MapView style={styles2.map}
                initialRegion={{
                    latitude: lat - 0.0005,
                    longitude: long,
                    latitudeDelta: 0.0075,
                    longitudeDelta: 0.0075,
                }}>
                {marker}
                {locationMarker}
            </MapView>
            <DataTable>
                <DataTable.Header>
                    <DataTable.Title><Text style={styles.typoTableHeader}>Urspr. avg</Text></DataTable.Title>
                    <DataTable.Title><Text style={styles.typoTableHeader}>Förv. avg</Text></DataTable.Title>
                    <DataTable.Title><Text style={styles.typoTableHeader}>Station</Text></DataTable.Title>
                </DataTable.Header>
                <DataTable.Row>
                    <DataTable.Cell><Text style={[styles.bold, styles.typoTableBody]}>{adv}</Text></DataTable.Cell>
                    <DataTable.Cell><Text style={[styles.bold, styles.yellow, styles.typoTableBody]}>{est}</Text></DataTable.Cell>
                    <DataTable.Cell><Text style={[styles.bold, styles.typoTableBody]}>{station.AdvertisedLocationName}</Text></DataTable.Cell>
                </DataTable.Row>
                <Text style={[styles.bold, styles.center]}>Slutdestination: {toStation.AdvertisedLocationName}</Text>
            </DataTable>
        </SafeAreaView>
    );
}

const styles2 = StyleSheet.create({
    map: {
        width: "100%",
        height: 400,
    },
});