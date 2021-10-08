import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from 'react-native';
import {COLORS, images, SIZES, icons, FONTS} from '../constants';

const Home = () => {
  //render
  function renderHeader() {
    return (
      <View style={{paddingHorizontal: SIZES.padding, marginTop: SIZES.base}}>
        <View
          style={{
            flexDirection: 'row',
          }}>
          <TouchableOpacity style={{flex: 1}}>
            <Image
              source={icons.menu}
              resizeMode="contain"
              style={{width: 25, height: 25}}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{flex: 1, alignItems: 'flex-end'}}
            onPress={() => {
              console.log('cart clicked');
            }}>
            <Image
              source={icons.cart}
              resizeMode="contain"
              style={{width: 25, height: 25}}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  function renderTitle(title) {
    return (
      <View style={{marginTop: SIZES.padding, marginHorizontal: SIZES.padding}}>
        <Text style={{color: COLORS.black, ...FONTS.largeTitle}}>
          Collection of
        </Text>
        <Text>{title}</Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      {renderHeader()}

      {renderTitle('test title')}
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 9,
  },
});
