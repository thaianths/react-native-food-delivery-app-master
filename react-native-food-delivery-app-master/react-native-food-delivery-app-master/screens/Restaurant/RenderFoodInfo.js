/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Image, TouchableOpacity, Text, Animated} from 'react-native';
import {COLORS, FONTS, icons, SIZES} from '../../constants';

export const RenderFoodInfo = ({
  restaurant,
  handleScroll,
  handleOrderQuantity,
  handleDisplayOrderQuantity,
}) => {
  return (
    <Animated.ScrollView
      horizontal
      pagingEnabled
      scrollEventThrottle={16}
      snapToAlignment="center"
      showsHorizontalScrollIndicator={false}
      onScroll={handleScroll}>
      {restaurant?.menu.map((item, idx) => (
        <View key={`menu-${idx}`} style={{alignItems: 'center'}}>
          <View
            style={{
              height: SIZES.height * 0.35,
            }}>
            {/* Food image */}
            <View
              style={{
                width: SIZES.width,
                marginTop: SIZES.padding,
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Image
                source={item.photo}
                resizeMode="cover"
                style={{
                  width: SIZES.width,
                  height: '100%',
                }}
              />
            </View>

            {/* Quantity section */}
            <View
              style={{
                position: 'absolute',
                bottom: -20,
                width: SIZES.width,
                height: 40,
                justifyContent: 'center',
                flexDirection: 'row',
              }}>
              <TouchableOpacity
                style={{
                  width: 50,
                  backgroundColor: COLORS.white,
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderTopLeftRadius: 25,
                  borderBottomLeftRadius: 25,
                }}
                onPress={() =>
                  handleOrderQuantity('-', item.menuId, item.price)
                }>
                <Text style={{...FONTS.body1}}> - </Text>
              </TouchableOpacity>

              <View
                style={{
                  width: 50,
                  backgroundColor: COLORS.white,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text style={{...FONTS.h3}}>
                  {handleDisplayOrderQuantity(item.menuId)}
                </Text>
              </View>

              <TouchableOpacity
                style={{
                  width: 50,
                  backgroundColor: COLORS.white,
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderTopRightRadius: 25,
                  borderBottomRightRadius: 25,
                }}
                onPress={() =>
                  handleOrderQuantity('+', item.menuId, item.price)
                }>
                <Text style={{...FONTS.body2, marginBottom: 3}}> + </Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Name and description */}
          <View
            style={{
              width: SIZES.width,
              alignItems: 'center',
              marginTop: 15,
              paddingHorizontal: SIZES.padding * 2,
            }}>
            <Text
              style={{
                marginVertical: 10,
                textAlign: 'center',
                ...FONTS.h2,
              }}>
              {item.name} - ${item.price.toFixed(2)}
            </Text>
            <Text
              style={{
                ...FONTS.body3,
                textAlign: 'center',
              }}>
              {item.description}
            </Text>
          </View>

          {/* Calories */}
          <View
            style={{
              flexDirection: 'row',
              marginTop: 10,
            }}>
            <Image
              source={icons.fire}
              style={{width: 20, height: 20, marginRight: 10}}
            />
            <Text
              style={{
                ...FONTS.body3,
                color: COLORS.darkGray,
                fontWeight: '600',
              }}>
              {item.calories.toFixed(2)} cal
            </Text>
          </View>
        </View>
      ))}
    </Animated.ScrollView>
  );
};
