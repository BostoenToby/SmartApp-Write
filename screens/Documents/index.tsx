import { Text } from "react-native";
import { createStackNavigator, StackNavigationOptions } from '@react-navigation/stack';
import Overview from './Overview';
import New from './New';
import Edit from './Edit'; 
import Color from "../../styles/color";

export default () => {
    const Stack = createStackNavigator();

    const screenOptions: StackNavigationOptions = {
        headerShown: false,
        cardStyle: {
            backgroundColor: Color.dark,
        },
        
    }

    return(
        <Stack.Navigator screenOptions={screenOptions}>
            <Stack.Screen name="Overview" component={Overview} />
            <Stack.Screen name="New" component={New} />
            <Stack.Screen name="Edit" component={Edit} />
        </Stack.Navigator>
    )
}