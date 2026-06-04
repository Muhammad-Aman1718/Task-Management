import React from 'react';
import onBoarding from '../../screens/onBoarding/onBoarding';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const StackNavigation = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{ headerShown: false }}
        name="onBoarding"
        component={onBoarding}
      />
    </Stack.Navigator>
  );
};

export default StackNavigation;
