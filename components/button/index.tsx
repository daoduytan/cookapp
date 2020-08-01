import React, { FC } from 'react';
import { Button } from 'react-native';

const ButtonCus: FC<any> = ({ style, ...props }) => {
  return (
    <Button
      {...props}
      style={[style, { fontFamily: 'Quicksand_600SemiBold' }]}
    />
  );
};

export default ButtonCus;
