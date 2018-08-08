import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Header } from './src/components/common';
import AlbumList from './src/components/AlbumList';

export default class App extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Header headerText={'Albums'}/>
                <AlbumList/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
});
