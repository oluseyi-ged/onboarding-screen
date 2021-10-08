import {COLORS, images, SIZES, icons, FONTS} from '../constants';
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const OptionItem = ({icon, bgColor, label, onPress}) => {
  return (
    <TouchableOpacity
      style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}
      onPress={onPress}>
      <View style={[styles.shadow, {width: 60, height: 60}]}>
        <LinearGradient
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 15,
          }}
          colors={bgColor}
          start={{x: 0, y: 0}}
          end={{x: 0, y: 0}}>
          <Image
            source={icon}
            resizeMode="cover"
            style={{tintColor: COLORS.white, width: 30, height: 30}}
          />
        </LinearGradient>
      </View>
      <Text
        style={{
          marginTop: SIZES.base,
          color: COLORS.gray,
          ...FONTS.body3,
        }}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

const Home = ({navigation}) => {
  // Dummy data

  const [destinations, setDestinations] = React.useState([
    {
      id: 0,
      name: 'Ski Villa',
      img: images.skiVilla,
    },
    {
      id: 1,
      name: 'Climbing Hills',
      img: images.climbingHills,
    },
    {
      id: 2,
      name: 'Frozen Hills',
      img: images.frozenHills,
    },
    {
      id: 3,
      name: 'Beach',
      img: images.beach,
    },
  ]);

  // render

  function renderDestinations(item, index, destination) {
    var destinationStyle = {};

    if (index === 0) {
      destinationStyle = {marginLeft: SIZES.padding};
    }
    return (
      <TouchableOpacity
        style={{
          justifyContent: 'center',
          marginHorizontal: SIZES.base,
          ...destinationStyle,
        }}
        onPress={() => {
          navigation.navigate('DestinationDetail');
        }}>
        <Image
          source={item.img}
          resizeMode="cover"
          style={{width: SIZES.width * 0.28, height: '82%', borderRadius: 15}}
        />
        <Text style={{marginTop: SIZES.base / 2, ...FONTS.h4}}>
          {item.name}
        </Text>
      </TouchableOpacity>
    );
  }

  return (
    <View style={styles.container}>
      {/* Banners */}
      <View
        style={{
          flex: 1,
          marginTop: SIZES.base,
          paddingHorizontal: SIZES.padding,
        }}>
        <Image
          source={images.homeBanner}
          resizeMode="cover"
          style={{width: '100%', height: '100%', borderRadius: 15}}
        />
      </View>

      {/* Options */}
      <View style={{flex: 1}}>
        <View
          style={{
            flexDirection: 'row',
            marginTop: SIZES.padding,
            paddingHorizontal: SIZES.base,
          }}>
          <OptionItem
            icon={icons.airplane}
            bgColor={['rgba(70, 174, 255, 1)', 'rgba(88, 132, 255, 1)']}
            label="Flight"
            onPress={() => {
              console.log('flight');
            }}
          />
          <OptionItem
            icon={icons.train}
            bgColor={['rgba(253, 223, 144, 1)', 'rgba(252, 218, 19, 1)']}
            label="Train"
            onPress={() => {
              console.log('train');
            }}
          />
          <OptionItem
            icon={icons.bus}
            bgColor={['rgba(233, 115, 173, 1)', 'rgba(218, 93, 242, 1)']}
            label="Bus"
            onPress={() => {
              console.log('bus');
            }}
          />
          <OptionItem
            icon={icons.train}
            bgColor={['rgba(252, 171, 168, 1)', 'rgba(254, 107, 186, 1)']}
            label="Taxi"
            onPress={() => {
              console.log('bus');
            }}
          />
        </View>

        <View
          style={{
            flexDirection: 'row',
            marginTop: SIZES.radius,
            paddingHorizontal: SIZES.base,
          }}>
          <OptionItem
            icon={icons.bed}
            bgColor={['#ffc465', '#ff9c5f']}
            label="Hotel"
            onPress={() => {
              console.log('Hotel');
            }}
          />
          <OptionItem
            icon={icons.eat}
            bgColor={['#7cf1fb', '#4ebefd']}
            label="Eats"
            onPress={() => {
              console.log('eat');
            }}
          />
          <OptionItem
            icon={icons.compass}
            bgColor={['#7be993', '#46caaf']}
            label="Adventure"
            onPress={() => {
              console.log('adventure');
            }}
          />
          <OptionItem
            icon={icons.event}
            bgColor={['#fca397', '#fc7b6c']}
            label="Event"
            onPress={() => {
              console.log('event');
            }}
          />
        </View>
      </View>

      {/* Destinations */}
      <View style={{flex: 1}}>
        <Text
          style={{
            marginTop: SIZES.padding,
            marginHorizontal: SIZES.padding,
            ...FONTS.h2,
          }}>
          Destination
        </Text>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={destinations}
          keyExtractor={item => item.id.toString()}
          renderItem={({item, index}) => renderDestinations(item, index)}
        />
      </View>
    </View>
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
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});
