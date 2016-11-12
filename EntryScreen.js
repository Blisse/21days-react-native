'use strict';

var React = require('react');
var ReactNative = require('react-native');

var {
    StyleSheet,
    Text,
    ToolbarAndroid,
    View,
} = ReactNative;

var EntryScreen = React.createClass({
    getInitialState: function() {
        return {
        };
    },

    render: function() {
        return (
            <View style = {{flex: 1}}>
                <Text>
                    Entry
                </Text>
            </View>
        );
    },
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  separator: {
    height: 1,
    backgroundColor: '#eeeeee',
  },
  rowSeparator: {
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    height: 1,
    marginLeft: 4,
  },
  toolbar: {
    backgroundColor: '#a9a9a9',
    height: 56,
  },
});

module.exports = EntryScreen;