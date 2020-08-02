import { useMutation } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import { ListFood } from '../../components';
import SearchBox from './search-box';

const SEARCH_DISHS = gql`
  mutation searchDishs($text: String!) {
    searchDishs(text: $text) {
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

function SearchScreen() {
  const [page, setPage] = useState(1);
  const [searchDishs, { data, loading }] = useMutation(SEARCH_DISHS);
  const [text, setText] = useState<string>('');

  const searchFood = (string: string) => {
    setText(string);
    searchDishs({
      variables: {
        text: string,
      },
    }).then(() => {
      setPage(1);
    });
  };

  const loadMore = () => {
    searchDishs({
      variables: { text },
    }).then((): void => {
      setPage(page + 1);
    });
  };

  const dishs = data ? data.searchDishs.dishs : [];
  const total = data ? data.searchDishs.total : undefined;

  return (
    <View style={styles.wrap}>
      <SearchBox onSearch={searchFood} />
      <View style={{ flex: 1 }}>
        <ListFood
          dishs={dishs}
          page={page}
          loadMore={loadMore}
          loading={loading}
          total={total}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default SearchScreen;
