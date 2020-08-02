import { useNavigation } from '@react-navigation/native';
import React, { FC, memo } from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';

import { Text } from '..';

interface Props {
  food: any;
  style?: any;
}

const CardFood: FC<Props> = ({ food, style }) => {
  const navigation = useNavigation();

  const clickMe = () => {
    navigation.navigate('Detail', {
      title: food.title,
      id: food.id,
    });
  };

  return (
    <View style={[styles.card, style]}>
      <TouchableOpacity onPress={clickMe}>
        <Image
          style={styles.img}
          source={{
            uri: food.recipeImage,
          }}
        />
      </TouchableOpacity>

      <View style={styles.text_wrap}>
        <Text type="bold" style={styles.text}>
          {food.title}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    overflow: 'hidden',
  },
  img: {
    backgroundColor: '#eee',
    height: 170,
    borderRadius: 10,
  },
  text_wrap: {
    paddingVertical: 10,
  },
  text: {},
});

export default memo(CardFood);
