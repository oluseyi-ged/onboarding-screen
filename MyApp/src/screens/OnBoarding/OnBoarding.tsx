import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Animated,
  Image,
} from 'react-native';

//Constants
import {images, theme} from '../../constants';
const {OnBoarding1, OnBoarding2, OnBoarding3} = images;

//Theme
const {COLORS, FONTS, SIZES} = theme;

//Dummy text
const onBoardings = [
  {
    title: 'Want to Japa?',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam ratione animi reprehenderit veritatis quaerat',
    img: OnBoarding1,
  },
  {
    title: 'Why not plan an escape',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam ratione animi reprehenderit veritatis quaerat',
    img: OnBoarding2,
  },
  {
    title: 'Destination CANADA!!!',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam ratione animi reprehenderit veritatis quaerat',
    img: OnBoarding3,
  },
];

const OnBoarding = () => {
  //Render
  function renderContent() {
    return (
      <Animated.ScrollView>
        {onBoardings.map((item, index) => (
          <View key={index}>
            {/* Image */}
            <View>
              <Image
                source={item.img}
                resizeMode="cover"
                style={{width: 100, height: 100}}
              />
            </View>
          </View>
        ))}
      </Animated.ScrollView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>{renderContent()}</SafeAreaView>
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
