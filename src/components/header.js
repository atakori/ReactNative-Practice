import React from 'react';
import { Text, View, Platform } from 'react-native';

const Header = (props) => {
	const { textStyle, viewStyle } = styles;

	return (
			<View style={viewStyle}>
				<Text style={textStyle}>{props.headerText}</Text>
			</View>
		)
}

//create css-like styling rules
const styles = {
	viewStyle: {
		backgroundColor: '#F8F8F8',
		justifyContent: 'center',
		alignItems: 'center',
		height: 60,
		paddingTop: 15,
		shadowColor: 'black',
		shadowOffset: { width: 0, height: 2},
		position: 'relative',
		...Platform.select({
			ios:{
			shadowOpacity: 0.5
		},
		android: {
			elevation: 10
		},
		})
	},
	textStyle: {
		fontSize: 20
	}
}

//make components available to other parts of app
export default Header;