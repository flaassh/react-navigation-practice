import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { NaviParamList } from '../types/Navigation';
import Screen1 from './Screen1';
import Screen2 from './Screen2';

const Stack = createStackNavigator<NaviParamList>();

export default function Navigator() {
	return (
		<Stack.Navigator>
			<Stack.Screen name="Screen1" component={Screen1} />
			<Stack.Screen name="Screen2" component={Screen2} />
		</Stack.Navigator>
	);
}
