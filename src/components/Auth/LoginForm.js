import React, { Component } from 'react';
import {StyleSheet, Text} from 'react-native';
import firebase from 'firebase';
import {Button, Card, CardSection, Input, Spinner} from '../common'

class LoginForm extends Component {
    state = {
        email: 'dennis@gmail.com',
        password: '123456',
        error: '',
        loading: false
    };

    onButtonPress = () => {
        const { email, password } = this.state;

        // reset the error message
        this.setState({
            error: '',
            loading: true
        });

        /*
        * try to log in the user using email and password
        * if it fails, create an account with the provided email and password
        * if an account is failed to be created, throw an error
        * */
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(this.onLoginSuccess)
            .catch(() => {
                firebase.auth().createUserWithEmailAndPassword(email, password)
                    .then(this.onLoginSuccess)
                    .catch(this.onLoginFail)
            });
    };

    onLoginSuccess = () => {
        this.setState({
            email: '',
            password: '',
            loading: false,
            error: ''
        })
    };

    onLoginFail = () => {
        this.setState({
            error: 'Authentication fail',
            loading: false
        });
    };

    renderButton = () => {
        // return a spinner if the user is being authenticated
        if (this.state.loading) {
            return <Spinner size='small'></Spinner>
        }

        return (
            <Button onPress={this.onButtonPress}>
                Log in
            </Button>
        )
    };

    render() {
        return (
            <Card>
                <CardSection>
                    <Input
                        label='Email'
                        placeholder='user@email.com'
                        value={this.state.email}
                        onChangeText={email => this.setState({ email })}/>
                </CardSection>

                <CardSection>
                    <Input
                        label='Password'
                        placeholder='password'
                        secureTextEntry={true}
                        value={this.state.password}
                        onChangeText={password => this.setState({ password })}/>
                </CardSection>

                <Text style={styles.errorTextStyle}>{this.state.error}</Text>

                <CardSection>
                    {this.renderButton()}
                </CardSection>
            </Card>
        );
    }
}

const styles = StyleSheet.create({
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }
});

export default LoginForm;