import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../screens/HomeScreen';
import { PokemonScreen } from '../screens/PokemonScreen';

const Stack = createStackNavigator();

export const Navigator = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
                cardStyle: {
                    backgroundColor: '#fff',
                },
            }}
        >
            <Stack.Screen name="Home" component={ HomeScreen } />
            <Stack.Screen name="Notifications" component={ PokemonScreen } />
        </Stack.Navigator>
    );
};
