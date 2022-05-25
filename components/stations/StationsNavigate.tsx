import { createNativeStackNavigator } from '@react-navigation/native-stack';
import StationsList from "./StationsList";
import Stations from "./Stations";


const Stack = createNativeStackNavigator();

export default function StationsNavigate(props) {
    return (
        <Stack.Navigator initialRouteName="Översikt stationer" screenOptions={{
            headerShown: false
          }}>
            <Stack.Screen name="Översikt stationer">
                {(screenProps) => <StationsList {...screenProps} delays={props.delays} setDelays={props.setDelays} />}
            </Stack.Screen>
            <Stack.Screen name="Information om försening">
                {(screenProps) => <Stations {...screenProps} setDelays={props.setDelays} />}
            </Stack.Screen>
        </Stack.Navigator>
    );
};