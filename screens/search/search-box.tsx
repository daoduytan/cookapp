import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { debounce } from 'lodash';
import React, { FC } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { Input } from '../../components';

interface Props {
  onSearch: (text: string) => void;
}

const SearchBox: FC<Props> = ({ onSearch }) => {
  const navigation = useNavigation();

  const onBack = () => {
    navigation.goBack();
  };

  const changeText = debounce((string: string) => {
    if (string.length > 0) {
      onSearch(string);
    }
  }, 300);

  return (
    <View style={styles.wrap}>
      <TouchableOpacity style={[styles.back]} onPress={onBack}>
        <AntDesign name="arrowleft" size={20} color="#333" />
      </TouchableOpacity>
      <View style={styles.search}>
        <Input
          placeholder="Search food..."
          style={styles.input}
          onChangeText={changeText}
        />
        <View style={styles.button}>
          <AntDesign name="search1" size={20} color="#333" />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrap: {
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  search: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#eee',
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 10,
    position: 'relative',
  },
  back: {
    height: 45,
    width: 30,
    justifyContent: 'center',
    borderRadius: 10,
  },
  input: {
    flex: 1,
    height: 45,
    paddingHorizontal: 15,
    borderColor: '#fff',
  },
  button: {
    position: 'absolute',
    right: 0,
    top: 0,
    height: 45,
    width: 45,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default SearchBox;
