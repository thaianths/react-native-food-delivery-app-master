import React from 'react';
import {StyleSheet, SafeAreaView, Animated} from 'react-native';

import {COLORS} from '../../constants';
import {RenderFoodInfo} from './RenderFoodInfo';
import {RenderHeader} from './RenderHeader';
import {RenderOrderInfo} from './RenderOrderInfo';

const Restaurant = ({route, navigation}) => {
  const [restaurant, setRestaurant] = React.useState(null);
  const [location, setLocation] = React.useState(null);
  const [orderItem, setOrderItem] = React.useState([]);

  const scrollX = new Animated.Value(0);

  const handleOrderQuantity = (action, menuId, price) => {
    let orderList = orderItem.slice();
    let item = orderList.filter(a => a.menuId === menuId);
    if (action === '+') {
      if (item.length > 0) {
        let newQuantity = item[0].qty + 1;
        item[0].qty = newQuantity;
        item[0].total = item[0].qty * price;
      } else {
        const newItem = {
          menuId: menuId,
          qty: 1,
          price: price,
          total: price,
        };
        orderList.push(newItem);
      }
      setOrderItem(orderList);
    } else {
      if (item.length > 0) {
        if (item[0]?.qty > 0) {
          let newQty = item[0].qty - 1;
          item[0].qty = newQty;
          item[0].total = newQty * price;
        }
      }

      setOrderItem(orderList);
    }
  };

  const handleDisplayOrderQuantity = menuId => {
    let newOrderItem = orderItem.filter(a => a.menuId === menuId);
    if (newOrderItem.length > 0) {
      return newOrderItem[0].qty;
    } else {
      return 0;
    }
  };

  const handleBasketItemCount = () => {
    let itemCount = orderItem.reduce((a, b) => a + (b.qty || 0), 0);

    return itemCount;
  };

  const handleBasketItemPrice = () => {
    let totalPrice = orderItem.reduce((a, b) => a + (b.total || 0), 0);

    return totalPrice.toFixed(2);
  };

  React.useEffect(() => {
    let {item, currentLocation} = route.params;
    setRestaurant(item);
    setLocation(currentLocation);
  }, [route.params]);

  const handleScroll = Animated.event(
    [{nativeEvent: {contentOffset: {x: scrollX}}}],
    {useNativeDriver: false},
  );

  return (
    <SafeAreaView style={styles.container}>
      <RenderHeader navigation={navigation} restaurant={restaurant} />
      <RenderFoodInfo
        restaurant={restaurant}
        handleScroll={handleScroll}
        handleOrderQuantity={handleOrderQuantity}
        handleDisplayOrderQuantity={handleDisplayOrderQuantity}
      />
      <RenderOrderInfo
        restaurant={restaurant}
        scrollX={scrollX}
        handleBasketItemCount={handleBasketItemCount}
        handleBasketItemPrice={handleBasketItemPrice}
        navigation={navigation}
        currentLocation={location}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.lightGray2,
  },
});

export default Restaurant;
