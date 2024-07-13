import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {AboutScreen, HomeScreen, PlayerScreen} from '../screens';
import {RootRoutes, RootStackParamList} from './types';

const Stack = createNativeStackNavigator<RootStackParamList>();

const Routes: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={RootRoutes.HOME}
          component={HomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={RootRoutes.PLAYER}
          component={PlayerScreen}
          options={{title: ''}}
        />
        <Stack.Screen
          name={RootRoutes.ABOUT}
          component={AboutScreen}
          options={{title: 'Sobre'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
