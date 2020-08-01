import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import Category from './category';

import { categoriesList } from './data';

function Categories() {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingHorizontal: 10 }}
    >
      {categoriesList.map((category) => (
        <Category key={category.id} category={category} />
      ))}
    </ScrollView>
  );
}

export default Categories;
