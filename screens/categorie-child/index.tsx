import React, { useEffect, useState } from 'react';
import { Text, ActivityIndicator } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useRoute, useNavigation } from '@react-navigation/native';
import { gql } from 'apollo-boost';
import { useMutation } from '@apollo/react-hooks';
import { ListFood } from '../../components';

const SEARCH_DISHS_WITH_CATE = gql`
  mutation searchDishsWithCate($cate: String!, $page: Float!) {
    searchDishsWithCate(cate: $cate, page: $page) {
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
  const [pages, setPages] = useState(1);
  const [page, setPage] = useState<number>(1);
  const [dishs, setDishs] = useState([]);
  const navigation = useNavigation();
  const route = useRoute<any>();

  const [searchDishsWithCate, { loading }] = useMutation(
    SEARCH_DISHS_WITH_CATE
  );

  const string = (route.params.title as string).toLowerCase();

  const title = string.charAt(0).toUpperCase() + string.slice(1);

  navigation.setOptions({ title });

  const loadMore = () => {
    searchDishsWithCate({
      variables: { cate: route.params.cate, page: page + 1 },
    }).then(({ data }: { data: any }) => {
      setDishs(data.searchDishsWithCate.dishs);
      setPage(page + 1);
    });
  };

  useEffect(() => {
    if (route.params.title) {
      searchDishsWithCate({
        variables: { cate: route.params.cate, page },
      }).then(({ data }: { data: any }) => {
        setDishs(data.searchDishsWithCate.dishs);
      });
    }
  }, []);

  return (
    <ListFood
      dishs={dishs}
      loading={loading}
      loadMore={loadMore}
      pages={pages}
      page={page}
    />
  );
}

export default CategorieChild;
