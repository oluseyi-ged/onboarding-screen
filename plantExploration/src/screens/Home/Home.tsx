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
      favourite: false,
    },
    {
      id: 1,
      name: 'Plant 2',
      favourite: true,
      img: images.plant2,
    },
    {
      id: 2,
      name: 'Plant 3',
      favourite: true,
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
    {
      id: 5,
      name: 'Plant 6',
      favourite: true,
      img: images.plant6,
    },
    {
      id: 6,
      name: 'Plant 7',
      img: images.plant7,
    },
  ]);

  const [friendList, setFriendList] = React.useState([
    {
      id: 0,
      img: images.profile1,
    },
    {
      id: 1,
      img: images.profile2,
    },
    {
      id: 2,
      img: images.profile3,
    },
    {
      id: 3,
      img: images.profile4,
    },
    {
      id: 4,
      img: images.profile5,
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
        <View
          style={{
            position: 'absolute',
            bottom: '17%',
            right: 0,
            backgroundColor: COLORS.primary,
            paddingHorizontal: SIZES.base,
            borderTopLeftRadius: 10,
            borderBottomLeftRadius: 10,
          }}>
          <Text style={{color: COLORS.white, ...FONTS.body4}}>{item.name}</Text>
        </View>

        <View
          style={{
            position: 'absolute',
            top: '15%',
            left: 7,
          }}>
          <Image
            source={item.favourite ? icons.heartRed : icons.heartGreenOutline}
            resizeMode="contain"
            style={{width: 20, height: 20}}
          />
        </View>
      </View>
    );
  }

  function renderFriendsComponent() {
    if (friendList.length == 0) {
      return <View></View>;
    } else if (friendList.length <= 3) {
      return friendList.map((item, index) => (
        <View key={item.id} style={index == 0 ? {} : {marginLeft: -20}}>
          <Image
            source={item.img}
            resizeMode="cover"
            style={{
              width: 50,
              height: 50,
              borderRadius: 25,
              borderWidth: 3,
              borderColor: COLORS.primary,
            }}
          />
        </View>
      ));
    } else {
      return (
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          {friendList.map((item, index) => {
            if (index <= 2) {
              return (
                <View key={item.id} style={index == 0 ? {} : {marginLeft: -20}}>
                  <Image
                    source={item.img}
                    resizeMode="cover"
                    style={{
                      width: 50,
                      height: 50,
                      borderRadius: 25,
                      borderWidth: 3,
                      borderColor: COLORS.primary,
                    }}
                  />
                </View>
              );
            }
          })}

          <Text
            style={{marginLeft: 5, color: COLORS.secondary, ...FONTS.body3}}>
            +{friendList.length - 3} More
          </Text>
        </View>
      );
    }
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
      <View style={{height: '50%', backgroundColor: COLORS.lightgray}}>
        <View
          style={{
            flex: 1,
            borderBottomLeftRadius: 50,
            borderBottomRightRadius: 50,
            backgroundColor: COLORS.white,
          }}>
          <View
            style={{marginTop: SIZES.font, marginHorizontal: SIZES.padding}}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <Text style={{color: COLORS.secondary, ...FONTS.h2}}>
                Today's Share
              </Text>
              <TouchableOpacity onPress={console.log('see all on press')}>
                <Text style={{color: COLORS.secondary, ...FONTS.body3}}>
                  See All
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              height: '80%',
              marginTop: SIZES.body,
              marginHorizontal: SIZES.font,
            }}>
            <View style={{flex: 1}}>
              <View
                style={{flex: 1}}
                // onPress={console.log('pressed')}
              >
                <Image
                  source={images.plant5}
                  resizeMode="cover"
                  style={{
                    width: '100%',
                    height: '100%',
                    borderRadius: 20,
                  }}
                />
              </View>

              <View
                style={{flex: 1, marginTop: SIZES.font}}
                // onPress={console.log('pressed')}
              >
                <Image
                  source={images.plant6}
                  resizeMode="cover"
                  style={{
                    width: '100%',
                    height: '100%',
                    borderRadius: 20,
                  }}
                />
              </View>
            </View>

            <View style={{flex: 1.3}}>
              <View
                style={{flex: 1, marginHorizontal: SIZES.font}}
                // onPress={console.log('pressed')}
              >
                <Image
                  source={images.plant7}
                  resizeMode="cover"
                  style={{
                    width: '100%',
                    height: '100%',
                    borderRadius: 20,
                  }}
                />
              </View>
            </View>
          </View>
        </View>
      </View>

      {/* added friend */}
      <View style={{height: '20%', backgroundColor: COLORS.lightgray}}>
        <View
          style={{
            flex: 1,
            backgroundColor: COLORS.lightgray,
          }}>
          <View
            style={{marginTop: SIZES.radius, marginHorizontal: SIZES.padding}}>
            <Text style={{color: COLORS.secondary, ...FONTS.h2}}>
              Added Friends
            </Text>
            <Text style={{color: COLORS.secondary, ...FONTS.body3}}>
              {friendList.length} Total
            </Text>

            <View style={{flexDirection: 'row', height: '60%'}}>
              {/* Friends */}
              <View
                style={{
                  flex: 1.3,
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                {renderFriendsComponent()}
              </View>

              {/* Add friend */}
              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'flex-end',
                }}>
                <Text>Add New</Text>
                <TouchableOpacity
                  style={{
                    marginLeft: SIZES.base,
                    width: 40,
                    height: 40,
                    borderRadius: 10,
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: COLORS.gray,
                  }}
                  onPress={() => {
                    console.log('add friend press');
                  }}>
                  <Image
                    source={icons.plus}
                    resizeMode="contain"
                    style={{
                      width: 20,
                      height: 20,
                    }}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
