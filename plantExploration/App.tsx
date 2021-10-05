import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {StyleSheet, Text, View} from 'react-native';
import {plantDetails} from 'screens';
import Tabs from 'components';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName={'Home'}>
        {/* Tabs */}
        <Stack.Screen name="Home" component={Tabs} />

        {/* Screens */}
        <Stack.Screen
          name="plantDetails"
          component={plantDetails}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default () => {
  return <App />;
};

const styles = StyleSheet.create({});
