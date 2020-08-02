import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../screens/home';
import DetailScreen from '../screens/detail';
import Categories from '../screens/categories';
import CategorieChild from '../screens/categorie-child';
import SearchScreen from '../screens/search';

const Stack = createStackNavigator();

function Routers() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={() => ({
            header: () => null,
          })}
        />
        <Stack.Screen name="Detail" component={DetailScreen} />
        <Stack.Screen
          name="Categories"
          component={Categories}
          options={() => ({
            headerTitle: 'Danh mục',
          })}
        />
        <Stack.Screen name="CategorieChild" component={CategorieChild} />
        <Stack.Screen
          name="SearchScreen"
          component={SearchScreen}
          options={() => ({
            header: () => null,
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routers;
