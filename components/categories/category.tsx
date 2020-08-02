import React, { memo, FC } from 'react';
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Text } from '..';
import { Category as CategoryType } from './type';
import { useNavigation } from '@react-navigation/native';

interface Props {
  category: CategoryType;
}

const Category: FC<Props> = ({ category }) => {
  const navigation = useNavigation();

  const handlePress = () => navigation.navigate('Categories');

  return (
    <TouchableOpacity onPress={handlePress}>
      <View style={styles.box}>
        <View>
          <Image style={styles.img} source={category.img} />
        </View>
        <View style={styles.wrap_text}>
          <Text style={{ fontSize: 16 }} type="bold">
            {category.title}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  box: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 5,
    backgroundColor: '#fff',
    margin: 5,
    overflow: 'hidden',
    borderColor: '#eee',
    borderWidth: 1,
  },

  wrap_text: {
    paddingHorizontal: 10,
  },

  text: {
    fontSize: 12,
  },

  img: {
    height: 60,
    width: 60,
    backgroundColor: '#eee',
  },
});

export default memo(Category);
