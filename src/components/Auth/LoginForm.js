import React, { Component } from 'react';
import { TextInput, StyleSheet } from 'react-native';
import { Button, Card, CardSection } from '../common'

class LoginForm extends Component {
    state = {
        text: ''
    };

    render() {
        return (
            <Card>
                <CardSection>
                    <TextInput
                        onChangeText={text => this.setState({ text })}
                        value={this.state.text} />
                </CardSection>

                <CardSection>

                </CardSection>

                <CardSection>
                    <Button>
                        Log in
                    </Button>
                </CardSection>
            </Card>
        );
    }
}

const styles = StyleSheet.create({
    textInputStyle: {
        height: 20,
        width: 100
    }
});

export default LoginForm;