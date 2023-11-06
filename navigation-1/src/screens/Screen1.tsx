import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { NaviParamList } from '../types/Navigation';
import { useNavigation } from '@react-navigation/native';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	button: {
		padding: 10,
		backgroundColor: 'black',
	},
	buttonLabel: {
		color: 'white',
	},
});

type NavigationProp = StackNavigationProp<NaviParamList, 'Screen1'>;

export default function Screen1() {
	const navigation = useNavigation<NavigationProp>();

	return (
		<View style={styles.container}>
			<TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Screen2')}>
				<Text style={styles.buttonLabel}>Screen-2로 이동</Text>
			</TouchableOpacity>
		</View>
	);
}
