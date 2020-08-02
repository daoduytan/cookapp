import React, { useEffect } from 'react';
import { Text, ActivityIndicator } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useRoute, useNavigation } from '@react-navigation/native';
import { gql } from 'apollo-boost';
import { useMutation } from '@apollo/react-hooks';
import { ListFood } from '../../components';

const SEARCH_DISHS_WITH_CATE = gql`
  mutation searchDishsWithCate($cate: String!) {
    searchDishsWithCate(cate: $cate) {
      dishs {
        title
        id
        recipeImage
      }
      page
      pages
      total
    }
  }
`;

function CategorieChild() {
  const navigation = useNavigation();
  const route = useRoute<any>();
  const [searchDishsWithCate, { data, loading }] = useMutation(
    SEARCH_DISHS_WITH_CATE
  );

  navigation.setOptions({ title: route.params.title });

  const loadMore = () => {};

  useEffect(() => {
    if (route.params.title) {
      searchDishsWithCate({
        variables: { cate: route.params.cate },
      });
    }
  }, []);

  const dishs = data ? data.searchDishsWithCate.dishs : [];

  return <ListFood dishs={dishs} loading={loading} loadMore={loadMore} />;
}

export default CategorieChild;
