import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Animated,
  Image,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

//Constants
import {images, theme} from '../../constants';
const {OnBoarding1, OnBoarding2, OnBoarding3} = images;

//Theme
const {COLORS, FONTS, SIZES} = theme;

//Dummy text
const onBoardings = [
  {
    title: 'Want to Japa?',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    img: OnBoarding1,
  },
  {
    title: 'Plan an escape',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    img: OnBoarding2,
  },
  {
    title: 'Destination CANADA!!!',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    img: OnBoarding3,
  },
];

const OnBoarding = () => {
  const [completed, setCompleted] = React.useState(false);
  const scrollX = new Animated.Value(0);

  React.useEffect(() => {
    //to check if user has finished scrolling
    scrollX.addListener(({value}) => {
      if (Math.floor(value / SIZES.width) === onBoardings.length - 1) {
        setCompleted(true);
      }
    });

    return () => scrollX.removeListener();
  }, []);

  //Render
  function renderContent() {
    return (
      <Animated.ScrollView
        horizontal
        pagingEnabled
        scrollEnabled
        decelerationRate={0}
        scrollEventThrottle={16}
        snapToAlignment="center"
        showsHorizontalScrollIndicator={false}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: scrollX}}}],
          {
            useNativeDriver: false,
          },
        )}>
        {onBoardings.map((item, index) => (
          <View key={index} style={{width: SIZES.width}}>
            {/* Image */}
            <View
              style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
              <Image
                source={item.img}
                resizeMode="cover"
                style={{width: '100%', height: '100%'}}
              />
            </View>
            {/* Text */}
            <View
              style={{
                position: 'absolute',
                bottom: '10%',
                left: 40,
                right: 40,
              }}>
              <Text
                style={{...FONTS.h1, color: COLORS.gray, textAlign: 'center'}}>
                {item.title}
              </Text>
              <Text
                style={{
                  ...FONTS.body3,
                  textAlign: 'center',
                  marginTop: SIZES.base,
                  color: COLORS.gray,
                }}>
                {item.description}
              </Text>
            </View>
            {/* Button */}
            <TouchableOpacity
              style={{
                // position: 'absolute',
                bottom: 10,
                // left: 100,
                width: 150,
                height: 60,
                // paddingLeft: 20,
                alignItems: 'center',
                justifyContent: 'center',
                // borderRadius: 30,
                borderTopRightRadius: 30,
                borderBottomRightRadius: 30,
                backgroundColor: COLORS.blue,
              }}
              onPress={() => console.log('Button Pressed')}>
              <Text style={{...FONTS.h1, color: COLORS.white}}>
                {completed ? 'Proceed' : 'Skip'}
              </Text>
            </TouchableOpacity>
          </View>
        ))}
      </Animated.ScrollView>
    );
  }

  function renderDots() {
    const dotPosition = Animated.divide(scrollX, SIZES.width);

    return (
      <View style={styles.dotContainer}>
        {onBoardings.map((item, index) => {
          const opacity = dotPosition.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [0.3, 1, 0.3],
            extrapolate: 'clamp',
          });

          const dotSize = dotPosition.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [SIZES.base, 17, SIZES.base],
            extrapolate: 'clamp',
          });

          return (
            <Animated.View
              key={`dot-${index}`}
              opacity={opacity}
              style={[
                styles.dot,
                {width: dotSize, height: dotSize},
              ]}></Animated.View>
          );
        })}
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View>{renderContent()}</View>
      <View style={styles.dotsRootContainer}>{renderDots()}</View>
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
  dotsRootContainer: {
    position: 'absolute',
    bottom: SIZES.height > 700 ? '25%' : '20%',
  },
  dotContainer: {
    flexDirection: 'row',
    height: SIZES.padding,
    alignItems: 'center',
    justifyContent: 'center',
  },

  dot: {
    borderRadius: SIZES.radius,
    backgroundColor: COLORS.blue,
    marginHorizontal: SIZES.radius / 2,
  },
});
