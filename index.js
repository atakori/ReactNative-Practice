//Import a library to help create a componenet
import React from 'react';
import { View, AppRegistry } from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';

//create component
const App = () => {
	return (
		<View>
			<Header headerText='Albums'/>
			<AlbumList />
		</View>
	)
}

//render component to the device
AppRegistry.registerComponent('practiceAlbums', () => App);