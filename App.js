import React from 'react';
import firebase from 'firebase';
import { View, Text } from 'react-native';
import { Button, Card, CardSection, Header, Spinner } from './src/components/common';
import LoginForm from './src/components/Auth/LoginForm';
import AlbumList from './src/components/Album/AlbumList';

export default class App extends React.Component {
    state = {
        loggedIn: null,
        user: null
    };

    componentDidMount() {
        // initialize firebase
        firebase.initializeApp({
            // use the config file info in the Authentication tab of Firebase
        });

        // keep track of authentication state change
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                console.log('onAuthStateChanged true', user.email);
                this.setState({
                    loggedIn: true,
                    user: user.email
                });
            } else {
                this.setState({ loggedIn: false });
            }
        });
    }

    renderContent = () => {
        switch (this.state.loggedIn) {
            case true:
                return (
                    <Card>
                        <View style={{ alignItems: 'center', marginTop: 5, marginBottom: 5 }}>
                            <Text>Welcome back {this.state.user}</Text>
                        </View>
                        <CardSection>
                            <Button onPress={() => firebase.auth().signOut()}>
                                Log Out
                            </Button>
                        </CardSection>
                    </Card>
                );
            case false:
                return <LoginForm />;
            default:
                return (
                    <Card>
                        <CardSection>
                            <Spinner size='large' />
                        </CardSection>
                    </Card>
                )
        }
    };

    render() {
        return (
            <View>
                <Header headerText='Albums' />
                {this.renderContent()}
                <AlbumList />
            </View>
        );
    }
}
