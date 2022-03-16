import { Ionicons } from '@expo/vector-icons';
import { BottomTabNavigationOptions, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ParamListBase, RouteProp } from '@react-navigation/native';
import { ComponentProps } from 'react';
import Color from '../../styles/color';
import Core from '../../styles/core';

import Document from '../Documents';
import Reader from '../Reader';
import Settings from '../Settings';

const Tab = createBottomTabNavigator();

const screenOptions = ({route}: {route: RouteProp<ParamListBase>}): BottomTabNavigationOptions => ({
    //TODO: geef elke tab screen een andere icon
    tabBarIcon: ({focused, color, size}: {focused: boolean, color: string, size: number}) => {
        console.log({ route })
        let icon: ComponentProps<typeof Ionicons>['name'] = 'help'
        if (route.name === 'Documents') return <Ionicons name="ios-folder" size={size} color={color}/>
        if (route.name === 'Reader Mode') return <Ionicons name="ios-bookmarks" size={size} color={color}/>
        if (route.name === 'Settings') return <Ionicons name="ios-settings" size={size} color={color}/>
        return <Ionicons color={color} size={size} name={icon}/>
    },

    //TODO: maak de tab dark tab
    tabBarActiveTintColor: Color.light,
    tabBarInactiveTintColor: Color.gray[500],

    tabBarStyle: {
        backgroundColor: Color.dark,
        borderTopWidth: 0.5,
        borderTopColor: Color.gray[900],
    },

    headerStyle: {
        backgroundColor: Color.dark,
    },

    headerTitleStyle: {
        color: Color.light,
    },


})

export default () => {
    return(
      <Tab.Navigator screenOptions={screenOptions}>
        <Tab.Screen name="Documents" component={Document}/>
        <Tab.Screen name="Reader Mode" component={Reader}/>
        <Tab.Screen name="Settings" component={Settings}/>
      </Tab.Navigator>
    )
}