import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    ScrollView,
    NativeModules,
    TouchableHighlight,
} from 'react-native';
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});

class AmazingMessageExtension extends Component {
    constructor() {
        super();
        this.state = {message: "foobar"};
    }

    render() {
        console.log("FOO BAR BAZ");
        return (
            <ScrollView style={styles.container}>
            <Text style={styles.welcome}>
            Welcome to React Native!
            </Text>
            <TouchableHighlight onPress={() => this.setState({message: "hi ty"})}>
            <Text>
            {this.state.message}
            </Text>
            </TouchableHighlight>
            <Text style={styles.instructions}>
            To get started, edit index.ios.js
            </Text>
            <Text style={styles.instructions} onPress={() => NativeModules.DevMenu.reload()}>
            Press Me to Reload!
            </Text>
            </ScrollView>
        );
    }
}
AppRegistry.registerComponent('AmazingMessageExtension', () => AmazingMessageExtension);
