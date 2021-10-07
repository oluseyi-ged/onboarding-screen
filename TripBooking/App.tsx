import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';

// /screens

import {Onboarding, DestinationDetail, Home} from './src/screens';
import {COLORS, SIZES, icons} from './src/constants';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    border: 'transparent',
  },
};

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator initialRouteName={'Onboarding'}>
        {/* Screens */}
        <Stack.Screen
          name="Onboarding"
          component={Onboarding}
          options={{
            title: null,
            headerShown: true,
            backgroundColor: COLORS.white,
            headerLeft: null,
            headerRight: () => {
              return (
                <TouchableOpacity
                  style={{
                    marginRight: SIZES.padding,
                  }}
                  onPress={() => console.log('pressed')}>
                  <Image
                    source={icons.barMenu}
                    resizeMode="contain"
                    style={{width: 25, height: 25}}
                  />
                </TouchableOpacity>
              );
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
