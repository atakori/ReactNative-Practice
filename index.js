//Import a library to help create a componenet
import React from 'react';
import { Text, AppRegistry} from 'react-native';

//create component

const App = () => {
	return (
		<Text>Writing text to screen!</Text>
	)
}

//render component to the device
AppRegistry.registerComponent('practiceAlbums', () => App);