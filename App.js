import React from 'react';
import firebase from 'firebase';
import { StyleSheet, View } from 'react-native';
import { Header } from './src/components/common';
import LoginForm from './src/components/Auth/LoginForm';
import AlbumList from './src/components/Album/AlbumList';

export default class App extends React.Component {
    componentDidMount() {
        // initialize firebase
        firebase.initializeApp({
            apiKey: "AIzaSyDrZ4xYseIhxdgAjA4topcGOFhAif4FhCU",
            authDomain: "vue-authentication-67776.firebaseapp.com",
            databaseURL: "https://vue-authentication-67776.firebaseio.com",
            projectId: "vue-authentication-67776",
            storageBucket: "vue-authentication-67776.appspot.com",
            messagingSenderId: "301659999369"
        })
    }

    render() {
        return (
            <View style={styles.container}>
                <Header headerText={'Albums'}/>
                <LoginForm />
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
