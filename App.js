import React from 'react';
import firebase from 'firebase';
import { StyleSheet, View } from 'react-native';
import { Button, Header, Spinner } from './src/components/common';
import LoginForm from './src/components/Auth/LoginForm';
import AlbumList from './src/components/Album/AlbumList';

export default class App extends React.Component {
    state = {
        loggedIn: null
    };

    componentDidMount() {
        // initialize firebase
        firebase.initializeApp({
            apiKey: "AIzaSyDrZ4xYseIhxdgAjA4topcGOFhAif4FhCU",
            authDomain: "vue-authentication-67776.firebaseapp.com",
            databaseURL: "https://vue-authentication-67776.firebaseio.com",
            projectId: "vue-authentication-67776",
            storageBucket: "vue-authentication-67776.appspot.com",
            messagingSenderId: "301659999369"
        });

        // keep track of authentication state change
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                console.log('onAuthStateChanged true');
                this.setState({ loggedIn: true });
            } else {
                console.log('onAuthStateChanged false');
                this.setState({ loggedIn: false });
            }
        });
    }

    renderContent = () => {
        switch (this.state.loggedIn) {
            case true:
                return <Button>Log Out</Button>;
            case false:
                return <LoginForm />;
            default:
                return <Spinner size='large' />
        }
    };

    render() {
        return (
            <View style={styles.container}>
                <Header headerText='Albums' />
                {this.renderContent()}
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
