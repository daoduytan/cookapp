import React, { FC, memo } from 'react';
import { TextInput } from 'react-native';

const Input: FC<any> = ({ style, ...props }) => {
  return (
    <TextInput
      {...props}
      style={[style, { fontFamily: 'Quicksand_600SemiBold' }]}
    />
  );
};

export default memo(Input);
