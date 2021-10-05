import {SIZES, COLORS, icons, FONTS, images} from '../../constants';
import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {FlatList, TouchableOpacity} from 'react-native-gesture-handler';

const Home = () => {
  //Dummy Data
  const [newPlants, setNewPlants] = React.useState([
    {
      id: 0,
      name: 'Plant 1',
      img: images.plant1,
    },
    {
      id: 1,
      name: 'Plant 2',
      img: images.plant2,
    },
    {
      id: 2,
      name: 'Plant 3',
      img: images.plant3,
    },
    {
      id: 3,
      name: 'Plant 4',
      img: images.plant4,
    },
    {
      id: 4,
      name: 'Plant 5',
      img: images.plant5,
    },
  ]);

  //Render
  function renderNewPlants(item, index) {
    return (
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          marginHorizontal: SIZES.base,
        }}>
        <Image
          source={item.img}
          resizeMode="cover"
          style={{width: SIZES.width * 0.23, height: '82%', borderRadius: 15}}
        />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {/* New Plants */}
      <View style={{height: '30%', backgroundColor: COLORS.white}}>
        <View
          style={{
            flex: 1,
            borderBottomLeftRadius: 50,
            borderBottomRightRadius: 50,
            backgroundColor: COLORS.primary,
          }}>
          <View
            style={{
              marginHorizontal: SIZES.padding,
              marginTop: SIZES.padding,
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <Text style={{color: COLORS.white, ...FONTS.h2}}>New Plants</Text>
              <TouchableOpacity
                onPress={() => {
                  console.log('focus on password');
                }}>
                <Image
                  source={icons.focus}
                  resizeMode="contain"
                  style={{width: 20, height: 20}}
                />
              </TouchableOpacity>
            </View>
            <View style={{marginTop: SIZES.base}}>
              <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={newPlants}
                keyExtractor={item => item.id.toString()}
                renderItem={({item, index}) => renderNewPlants(item, index)}
              />
            </View>
          </View>
        </View>
      </View>

      {/* today's share */}
      <View style={{height: '30%', backgroundColor: COLORS.lightgray}}></View>

      {/* added friend */}
      <View style={{height: '20%', backgroundColor: COLORS.lightgray}}></View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
