import { useState, useEffect } from 'react';
import { Text, StyleSheet, View, ScrollView, Dimensions } from 'react-native';
import styles from "../../styles/Base.js";
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import Moment from 'moment';

import getCoordinates from "../../models/nominatim";


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
    let est = Moment(delay.EstimatedTimeAtLocation).format('YYYY-MM-DD HH:mm')
    let adv = Moment(delay.AdvertisedTimeAtLocation).format('YYYY-MM-DD HH:mm')
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
        <ScrollView>
            <View style={styles.base}>
                <Text style={[styles.left, styles.info]}>Tåg från: {station.AdvertisedLocationName}</Text>
                <Text style={styles.left}><Text style={styles.bold}>Mot: </Text>{toStation.AdvertisedLocationName}</Text>
                <Text style={styles.left}><Text style={styles.bold}>Tågnummer: </Text>{delay.AdvertisedTrainIdent}</Text>
                <Text style={styles.left}><Text style={styles.bold}>Ursprunglig avgång: </Text><Text style={styles.red}>{adv}</Text></Text>
                <Text style={styles.left}><Text style={styles.bold}>Ny förväntad avgång: </Text><Text style={styles.green}>{est}</Text></Text>
            </View>
            <MapView style={styles2.map}
                initialRegion={{
                    latitude: lat - 0.0022,
                    longitude: long,
                    latitudeDelta: 0.0075,
                    longitudeDelta: 0.0075,
                }}>
                {marker}
                {locationMarker}
            </MapView>
        </ScrollView>
    );
}

const styles2 = StyleSheet.create({
    map: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
});