import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { PokemonFull } from '../interfaces/pokemonInterfaces';

interface Props {
    pokemon: PokemonFull
}

export const PokemonDetails = ( { pokemon }: Props ) => {
    console.log(pokemon.types)
    return (
        <ScrollView
            style={{
                ...StyleSheet.absoluteFillObject,
            }}
        >
            <View style={{
                ...styles.container,
            }}>
                <Text style={{ ...styles.title, }}>Type</Text>
                <View style={{ flexDirection: 'row' }}>
                {

                    pokemon.types.map( ({ type }) => {
                        console.log(type.name);
                        <Text key={type.name} >{type.name}</Text>
                        // <Text
                        //     style={{
                        //         ...styles.regularText,
                        //         marginRight:10,
                        //     }}
                        //     key={ type.name }
                        // >
                        //     { type.name }
                        // </Text>
                    })
                }
                </View>
            </View>
        </ScrollView>
    );

};

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 20,
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
    },
    regularText: {
        fontSize: 19,
        color: 'red',
    },
});
