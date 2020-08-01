import React, { FC } from 'react';
import { View, StyleSheet } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

import { Text } from '../../components';

const CardCategory: FC<any> = ({ category }) => {
  return (
    <View style={styles.wrap}>
      <View style={styles.title}>
        <Text type="bold">{category.title}</Text>
      </View>

      <FlatList
        data={category.cates}
        renderItem={({ item }: any) => (
          <View style={styles.title}>
            <Text>{item}</Text>
          </View>
        )}
        keyExtractor={(item: string) => item}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  wrap: {
    borderBottomColor: '#eee',
    borderBottomWidth: 1,
  },
  title: {
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
});

export default CardCategory;
