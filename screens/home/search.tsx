import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

import { Text } from '../../components';
import { SIZES } from '../../constant';

const Search = () => {
  const navigation = useNavigation();
  const gotoSearch = () => navigation.navigate('SearchScreen');

  return (
    <TouchableOpacity onPress={gotoSearch}>
      <View style={styles.wrap}>
        <View style={styles.icon}>
          <AntDesign name="search1" size={20} color="#333" />
        </View>
        <View>
          <Text type="bold">Tìm kiếm</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const HEIGHT = 35;

const styles = StyleSheet.create({
  wrap: {
    backgroundColor: '#eee',
    width: SIZES.WIDTH_SCREEN - 30,
    height: HEIGHT,
    borderRadius: 5,
    flexDirection: 'row',
    display: 'flex',
    alignItems: 'center',
  },
  icon: {
    marginLeft: 10,
    marginRight: 15,
  },
});

export default Search;
