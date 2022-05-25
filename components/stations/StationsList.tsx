import React, { useState, useEffect } from 'react';
import styles from "../../styles/Base.js";
import { SafeAreaView, Text, View, FlatList, TextInput, ScrollView } from 'react-native';
import Moment from 'moment';
import stationModel from '../../models/stations';
import delayModel from '../../models/delays';


export default function SearchStations({ navigation, delays, setDelays }) {

    const [search, setSearch] = useState('');
    const [filteredDelays, setFilteredDelays] = useState([]);
    const [stations, setStations] = useState([]);

    const getFilteredDelays = async () => {
        setFilteredDelays(await delayModel.getDelays());
    };

    useEffect(() => {
        getFilteredDelays();
    }, []);

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


    const searchFilterFunction = (text) => {
        if (text) {
            const newData = delays.filter(
                function (item) {
                    const itemData = item.AdvertisedTrainIdent
                        ? item.AdvertisedTrainIdent
                        : '';
                    const textData = text;
                    return itemData.indexOf(textData) > -1;
                });
            setFilteredDelays(newData);
            setSearch(text);
        } else {
            setFilteredDelays(delays);
            setSearch(text);
        }
    };

    const ItemView = ({ item }) => {
        return (
            <ScrollView>
                <Text
                    style={styles.itemStyle}
                    onPress={() => {
                        let len = Object.keys(item).length
                        if (len < 7) {
                            alert("Station saknas för tillfället");
                        } else {
                            navigation.navigate('Information om försening', {
                                stations: stations,
                                delay: item
                            });
                        };
                    }}>
                    <View>
                        <Text style={[styles.bigger, styles.left]}>Tågnummer: {item.AdvertisedTrainIdent}</Text>
                        <Text style={[styles.bold, styles.left]}>Ursprunglig avgång: {Moment(item.AdvertisedTimeAtLocation).format('HH:mm')}</Text>
                    </View>
                </Text>
            </ScrollView>
        );
    };

    const ItemSeparatorView = () => {
        return (
            <View
                style={{
                    height: 0.5,
                    width: '100%',
                    backgroundColor: '#C8C8C8',
                }}
            />
        );
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.base}>
                <TextInput
                    style={styles.textInputStyle}
                    onChangeText={(text) => searchFilterFunction(text)}
                    value={search}
                    underlineColorAndroid="transparent"
                    placeholder="Sök tågnummer"
                />
                <Text style={[styles.bold, styles.header2]}>Tåg efter relevans</Text>
                <FlatList
                    data={filteredDelays}
                    keyExtractor={(item, index) => index.toString()}
                    ItemSeparatorComponent={ItemSeparatorView}
                    renderItem={ItemView}
                />
            </View>
        </SafeAreaView>
    );
};
