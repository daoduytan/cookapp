import React, { FC } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

import { Text } from '../../components';
import { useNavigation } from '@react-navigation/native';

const CardCategory: FC<any> = ({ category }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.wrap}>
      <View style={styles.title}>
        <Text type="bold">{category.title}</Text>
      </View>

      <FlatList
        data={category.cates}
        renderItem={({ item }: any) => (
          <TouchableOpacity
            style={styles.title}
            onPress={() => {
              navigation.navigate('CategorieChild', {
                title: item,
                cate: item,
              });
            }}
          >
            <Text>{item}</Text>
          </TouchableOpacity>
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
