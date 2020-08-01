import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { View, StyleSheet } from 'react-native';

import { CardFood } from '../../components';
import { SIZES } from '../../constant';

const Suggestions = () => {
  return (
    <ScrollView
      contentContainerStyle={styles.wrap}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      <View style={styles.card}>
        <CardFood />
      </View>
      <View style={styles.card}>
        <CardFood />
      </View>
      <View style={styles.card}>
        <CardFood />
      </View>
      <View style={styles.card}>
        <CardFood />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  wrap: {
    padding: 10,
  },
  card: {
    marginHorizontal: 5,
    width: SIZES.WIDTH_SCREEN / 1.6,
  },
});

export default Suggestions;
