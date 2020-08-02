import { useMutation } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import React, { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';

import { ListFood } from '../../components';
import { SIZES } from '../../constant';

const NEW_DISH_QUERY = gql`
  mutation getDishs($page: Float!) {
    getDishs(page: $page) {
      dishs {
        id
        recipeImage
        title
      }
      page
      pages
    }
  }
`;

const NewFoods = () => {
  const [page, setPage] = useState(1);
  const [dishs, setDishs] = useState([]);
  const [getDishs, { loading }] = useMutation(NEW_DISH_QUERY);

  const loadMore = () => {
    getDishs({
      variables: { page },
    }).then(({ data }: { data: any }): void => {
      setDishs([...dishs, ...data.getDishs.dishs]);
      setPage(page + 1);
    });
  };

  useEffect(() => {
    getDishs({
      variables: { page },
    }).then(({ data }: { data: any }): void => {
      setDishs(data.getDishs.dishs);
    });
  }, []);

  return (
    <ListFood page={page} loading={loading} dishs={dishs} loadMore={loadMore} />
  );
};

const styles = StyleSheet.create({
  wrap: {
    padding: 5,
    flexGrow: 1,
  },
  card: {
    width: (SIZES.WIDTH_SCREEN - 10) / 2,
    padding: 10,
  },
  button: {
    padding: 15,
  },
});

export default NewFoods;
