import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

import {COLORS} from '../../constants';
import {RenderHeader} from './RenderHeader';
import {RenderMainCategories} from './RenderMainCategories';
import {
  initialCurrentLocation,
  restaurantData,
  categoryData,
} from '../../dummyData/dummyData';
import {RenderRestaurantList} from './RenderRestaurantList';

const Home = ({navigation}) => {
  const [currentLocation, setCurrentLocation] = React.useState(
    initialCurrentLocation,
  );
  const [categories, setCategories] = React.useState(categoryData);
  const [selectedCategory, setSelectedCategory] = React.useState(null);
  const [restaurants, setRestaurants] = React.useState(restaurantData);

  const onSelectCategory = category => {
    // filter restaurant list
    let restaurantList = restaurantData.filter(a =>
      a.categories.includes(category.id),
    );

    setRestaurants(restaurantList);

    setSelectedCategory(category);
  };

  const getCategoryNameById = categoryId => {
    let category = categories.filter(a => a.id === categoryId);
    if (category.length > 0) {
      return category[0].name;
    }
    return '';
  };

  return (
    <SafeAreaView style={styles.container}>
      <RenderHeader
        currentLocation={currentLocation}
        setCurrentLocation={setCurrentLocation}
      />
      <RenderMainCategories
        categories={categories}
        selectedCategory={selectedCategory}
        onSelectCategory={onSelectCategory}
      />
      <RenderRestaurantList
        currentLocation={currentLocation}
        restaurants={restaurants}
        getCategoryNameById={getCategoryNameById}
        navigation={navigation}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.lightGray4,
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 1,
  },
});

export default Home;
