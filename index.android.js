/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
'use strict';

var React = require('react');
var ReactNative = require('react-native');

var {
    AppRegistry,
    BackAndroid,
    Navigator,
    StyleSheet,
    ToolbarAndroid,
    View,
} = ReactNative;

var DatesScreen = require('./DatesScreen');
var EntryScreen = require('./EntryScreen');

var _navigator;
BackAndroid.addEventListener('hardwareBackPress', () => {
    if (_navigator && _navigator.getCurrentRoutes().length() > 1) {
        _navigator.pop();
        return true;
    }
    return false;
});

var RouteMapper = function(route, navigationOperations, onComponentRef) {
    _navigator = navigationOperations;
    if (route.name === 'dates') {
        return (
            <View style = {styles.container}>
                <ToolbarAndroid
                    actions = {[]}
                    onIconClicked = {navigationOperations.pop}
                    style = {styles.toolbar}
                    titleColor = "white"
                    title = "Toolbar"
                />
                <DatesScreen 
                    navigator = {navigationOperations}
                />
            </View>
        );
    }  else if (route.name === 'entry') {
        return (
            <View style = {styles.container}>
                <ToolbarAndroid
                    actions = {[]}
                    onIconClicked = {navigationOperations.pop}
                    style = {styles.toolbar}
                    titleColor = "white"
                    title = "Toolbar"
                />
                <EntryScreen 
                    navigator = {navigationOperations}
                />
            </View>
        );
    } 

};

class ad21 extends React.Component {
    render() {
        var initialRoute = {
            name: 'dates'
        };
        return (
            <Navigator
                styles = {styles.container}
                initialRoute = {initialRoute}
                configureScene = {() => Navigator.SceneConfigs.FadeAndroid} 
                renderScene = {RouteMapper} 
            />
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    toolbar: {
        backgroundColor: '#a9a9a9',
        height: 56,
    },
});

AppRegistry.registerComponent('ad21', () => ad21);

module.exports = ad21;
