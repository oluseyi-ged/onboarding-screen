import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {icons, images, COLORS, SIZES, FONTS} from '../../constants';

const RequirementsBar = ({icon, barPercentage}) => {
  return (
    <View style={{height: 60, alignItems: 'center'}}>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 10,
          width: 50,
          height: 50,
          borderWidth: 1,
          borderColor: COLORS.gray,
        }}>
        <Image
          source={icon}
          resizeMode="cover"
          style={{
            tintColor: COLORS.secondary,
            width: 30,
            height: 30,
          }}
        />
      </View>

      {/* Bar */}
      <View
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '100%',
          height: 3,
          marginTop: SIZES.base,
          backgroundColor: COLORS.gray,
        }}></View>

      <View
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: barPercentage,
          height: 3,
          marginTop: SIZES.base,
          backgroundColor: COLORS.primary,
        }}></View>
    </View>
  );
};

const RequirementDetail = ({icon, label, detail}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
      }}>
      <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
        <Image
          source={icon}
          resizeMode="cover"
          style={{
            tintColor: COLORS.secondary,
            width: 30,
            height: 30,
          }}
        />
        <Text
          style={{
            marginLeft: SIZES.base,
            color: COLORS.secondary,
            ...FONTS.h2,
          }}>
          {label}
        </Text>
      </View>
      <View style={{flex: 1, alignItems: 'flex-end'}}>
        <Text style={{marginLeft: SIZES.base, color: COLORS.gray, ...FONTS.h2}}>
          {detail}
        </Text>
      </View>
    </View>
  );
};

const plantDetails = ({navigation}) => {
  //Render

  function renderHeader() {
    return (
      <View
        style={{
          position: 'absolute',
          top: 10,
          left: SIZES.padding,
          right: SIZES.padding,
        }}>
        <View style={{flexDirection: 'row'}}>
          <View style={{flex: 1}}>
            <TouchableOpacity
              style={{
                width: 40,
                height: 40,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 20,
                backgroundColor: 'rgba(255,255,255,0.5)',
              }}
              onPress={() => {
                navigation.navigate('Home');
              }}>
              <Image
                source={icons.back}
                resizeMode="contain"
                style={{
                  width: 20,
                  height: 20,
                }}
              />
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={{
              flex: 1,
              alignItems: 'flex-end',
              justifyContent: 'center',
            }}
            onPress={() => {
              console.log('Focus on pressed');
            }}>
            <Image
              source={icons.focus}
              resizeMode="contain"
              style={{
                width: 25,
                height: 25,
              }}
            />
          </TouchableOpacity>
        </View>

        <View style={{flexDirection: 'row', marginTop: '10%'}}>
          <View style={{flex: 1}}>
            <Text style={{color: COLORS.white, ...FONTS.largeTitle}}>
              Glory Mantas
            </Text>
          </View>
          <View style={{flex: 1}}></View>
        </View>
      </View>
    );
  }

  function renderRequirementsBar() {
    return (
      <View
        style={{
          flexDirection: 'row',
          marginTop: SIZES.padding,
          paddingHorizontal: SIZES.padding,
          justifyContent: 'space-between',
        }}>
        <RequirementsBar icon={icons.sun} barPercentage="80%" />
        <RequirementsBar icon={icons.drop} barPercentage="50%" />
        <RequirementsBar icon={icons.temperature} barPercentage="90%" />
        <RequirementsBar icon={icons.garden} barPercentage="20%" />
        <RequirementsBar icon={icons.seed} barPercentage="60%" />
      </View>
    );
  }

  function renderRequirements() {
    return (
      <View
        style={{
          flex: 2.5,
          marginTop: SIZES.padding,
          paddingHorizontal: SIZES.padding,
          justifyContent: 'space-around',
        }}>
        <RequirementDetail icon={icons.sun} label="Sunlight" detail="15°C" />
        <RequirementDetail
          icon={icons.drop}
          label="Water"
          detail="250ML Daily"
        />
        <RequirementDetail
          icon={icons.temperature}
          label="Room Temp"
          detail="25°C"
        />
        <RequirementDetail icon={icons.garden} label="Soil" detail="3 Kg" />
        <RequirementDetail
          icon={icons.seed}
          label="Fertilizer"
          detail="150 Kg"
        />
      </View>
    );
  }

  function renderFooter() {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          paddingVertical: SIZES.padding,
        }}>
        <TouchableOpacity
          style={{
            flex: 1,
            // width: '50%',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            borderTopRightRadius: 30,
            borderBottomRightRadius: 30,
            backgroundColor: COLORS.primary,
            paddingHorizontal: SIZES.padding,
          }}
          onPress={() => {
            console.log('take action');
          }}>
          <Text style={{color: COLORS.white, ...FONTS.h2}}>Take Action</Text>
          <Image
            source={icons.chevron}
            resizeMode="contain"
            style={{
              marginLeft: SIZES.padding,
              width: 20,
              height: 20,
            }}
          />
        </TouchableOpacity>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            paddingHorizontal: SIZES.padding,
          }}>
          <Text
            style={{
              flex: 1,
              color: COLORS.secondary,
              ...FONTS.h3,
            }}>
            Almost 2 weeks of growing time
          </Text>
          <Image
            source={icons.downArrow}
            resizeMode="contain"
            style={{
              tintColor: COLORS.secondary,
              marginLeft: SIZES.base,
              width: 20,
              height: 20,
            }}
          />
        </View>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {/* Banner Photo */}
      <View style={{height: '35%'}}>
        <Image
          source={images.bannerBg}
          resizeMode="cover"
          style={{
            width: '100%',
            height: '100%',
          }}
        />
      </View>

      {/* Requirements */}
      <View
        style={{
          flex: 1,
          marginTop: -40,
          backgroundColor: COLORS.lightgray,
          borderTopLeftRadius: 40,
          borderTopRightRadius: 40,
          paddingVertical: SIZES.padding,
        }}>
        <Text
          style={{
            paddingHorizontal: SIZES.padding,
            color: COLORS.secondary,
            ...FONTS.h1,
          }}>
          Requirements
        </Text>
        {renderRequirementsBar()}

        {renderRequirements()}

        {renderFooter()}
      </View>

      {renderHeader()}
    </View>
  );
};

export default plantDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
