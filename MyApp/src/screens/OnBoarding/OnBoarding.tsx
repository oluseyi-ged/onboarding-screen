import {COLORS} from 'constants/themes';
import React from 'react';
import {StyleSheet, Text, View, SafeAreaView} from 'react-native';

const OnBoarding = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text>OnBoarding Screen</Text>
      </View>
    </SafeAreaView>
  );
};

export default OnBoarding;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.white,
  },
});
