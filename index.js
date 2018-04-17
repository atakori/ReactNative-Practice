//Import a library to help create a componenet
import React from 'react';
import { Text, AppRegistry} from 'react-native';
import Header from './src/components/header';

//create component
const App = () => {
	return (
		<Header/>
	)
}

//render component to the device
AppRegistry.registerComponent('practiceAlbums', () => App);