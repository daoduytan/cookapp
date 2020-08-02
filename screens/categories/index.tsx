import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import React from 'react';
import { Text, ActivityIndicator } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

import Category from './category';

const CATEGORIES_QUERY = gql`
  query categories {
    categories {
      title
      cates
    }
  }
`;

function Categories() {
  const { data, loading } = useQuery(CATEGORIES_QUERY);

  if (loading) return <ActivityIndicator />;

  return (
    <FlatList
      contentContainerStyle={{ backgroundColor: '#fff' }}
      data={data.categories}
      renderItem={({ item }: any) => <Category category={item} />}
      keyExtractor={(category: any) => category.title}
    />
  );
}

export default Categories;
