import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Header = (props) => {
    const { headerContainer, textStyle } = styles;

    return (
        <View style={headerContainer}>
            <Text style={textStyle}>{props.headerText}</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    headerContainer: {
        backgroundColor: '#f8f8f8',
        height: 80,
        paddingTop: 25,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2
    },
    textStyle: {
        fontSize: 20
    }
});

export { Header };
