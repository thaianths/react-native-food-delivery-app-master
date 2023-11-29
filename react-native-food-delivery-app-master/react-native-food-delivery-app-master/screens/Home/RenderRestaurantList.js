/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {FlatList, View, Image, TouchableOpacity, Text} from 'react-native';
import {COLORS, FONTS, icons, SIZES} from '../../constants';

export const RenderRestaurantList = ({
  restaurants,
  getCategoryNameById,
  navigation,
  currentLocation,
}) => {
  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        style={{
          marginBottom: SIZES.padding * 2,
        }}
        onPress={() =>
          navigation.navigate('Restaurant', {
            item,
            currentLocation,
          })
        }>
        <View style={{marginBottom: SIZES.padding}}>
          <Image
            source={item.photo}
            resizeMode="cover"
            style={{
              width: '100%',
              height: 200,
              borderRadius: SIZES.radius,
            }}
          />
          <View
            style={{
              position: 'absolute',
              bottom: 0,
              height: 50,
              width: SIZES.width * 0.3,
              backgroundColor: COLORS.white,
              borderTopRightRadius: SIZES.radius,
              borderBottomLeftRadius: SIZES.radius,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text
              style={{
                ...FONTS.h4,
              }}>
              {item.duration}
            </Text>
          </View>
        </View>

        <Text
          style={{
            ...FONTS.body2,
            marginBottom: SIZES.padding,
          }}>
          {item.name}
        </Text>

        <View style={{flexDirection: 'row'}}>
          {/* star rating */}
          <Image
            source={icons.star}
            style={{
              height: 20,
              width: 20,
              tintColor: COLORS.primary,
              marginRight: 10,
            }}
          />
          {/* rating score */}
          <Text
            style={{
              ...FONTS.body3,
            }}>
            {item.rating}
          </Text>
          {/* category name */}
          <View
            style={{
              flexDirection: 'row',
              marginLeft: 10,
            }}>
            {item.categories.map(categoryId => (
              <View
                style={{
                  flexDirection: 'row',
                }}
                key={categoryId}>
                <Text
                  style={{
                    ...FONTS.body3,
                  }}>
                  {getCategoryNameById(categoryId)}
                </Text>
                <Text
                  style={{
                    ...FONTS.h3,
                    color: COLORS.darkGray,
                    marginBottom: 5,
                  }}>
                  {' '}
                  .{' '}
                </Text>
              </View>
            ))}
          </View>
          {/* Price section */}
          {[1, 2, 3].map(priceRating => (
            <Text
              key={priceRating}
              style={{
                ...FONTS.body3,
                color:
                  priceRating <= item.priceRating
                    ? COLORS.black
                    : COLORS.darkGray,
              }}>
              $
            </Text>
          ))}
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <FlatList
      data={restaurants}
      keyExtractor={item => `${item.id}`}
      renderItem={renderItem}
      contentContainerStyle={{
        paddingHorizontal: SIZES.padding * 2,
        paddingBottom: 30,
      }}
    />
  );
};
