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

type NavigationProp = StackNavigationProp<NaviParamList, 'Screen2'>;

export default function Screen2() {
	const navigation = useNavigation<NavigationProp>();

	return (
		<View style={styles.container}>
			<TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Screen1')}>
				<Text style={styles.buttonLabel}>Screen-1로 이동</Text>
			</TouchableOpacity>
		</View>
	);
}
