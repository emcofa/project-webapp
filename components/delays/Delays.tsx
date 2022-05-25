import DelaysList from './DelaysList';
import Home from './Home';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function StationsNavigate(props) {
    return (
        <Stack.Navigator initialRouteName="Hem" screenOptions={{
            headerShown: false
          }}>
            <Stack.Screen name="Hem" component={Home}/>
            <Stack.Screen name="Översikt">
                {(screenProps) => <DelaysList {...screenProps} delays={props.delays} setDelays={props.setDelays} />}
            </Stack.Screen>
        </Stack.Navigator>
    );
};

