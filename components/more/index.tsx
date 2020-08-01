import React, { FC } from 'react';
import { Entypo } from '@expo/vector-icons';
import { View, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SIZES } from '../../constant';

interface Props {
  onPress: () => void;
}

const More: FC<Props> = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.wrap}>
        <Entypo name="chevron-small-right" size={20} color="black" />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  wrap: {
    backgroundColor: '#eee',
    paddingHorizontal: 3,
    borderRadius: SIZES.BORDER_RADIUS,
  },
});

export default More;
