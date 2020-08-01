import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';

import { CardFood, Button, Text } from '../../components';
import { SIZES } from '../../constant';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';

const NEW_DISH_QUERY = gql`
  query dishs {
    dishs {
      id
      recipeImage
      title
    }
  }
`;

const NewFoods = () => {
  const { data, loading } = useQuery(NEW_DISH_QUERY);
  if (loading)
    return (
      <View>
        <Text>Loading</Text>
      </View>
    );

  console.log('data', data);
  return (
    <>
      <FlatList
        contentContainerStyle={styles.wrap}
        data={data.dishs || []}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <CardFood food={item} style={{ flex: 1 }} />
          </View>
        )}
        keyExtractor={(item) => item.id}
        numColumns={2}
      />

      <View style={styles.button}>
        <Button title="Xem thêm" onPress={() => {}} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  wrap: {
    padding: 10,
    flexGrow: 1,
  },
  card: {
    width: (SIZES.WIDTH_SCREEN - 20) / 2,
    padding: 5,
  },
  button: {
    padding: 15,
  },
});

export default NewFoods;
