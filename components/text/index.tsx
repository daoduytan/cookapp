import React, { FC, ReactNode, memo } from 'react';
import { Text } from 'react-native';

interface Props {
  children: ReactNode;
  type?: 'bold' | 'reglar';
  style?: any;
}

const TextCus: FC<Props> = ({ children, type = 'reglar', style }) => {
  const fontFamily = () => {
    switch (type) {
      case 'bold':
        return 'Quicksand_600SemiBold';
      default:
        return 'Quicksand_400Regular';
    }
  };

  return (
    <Text style={{ lineHeight: 20, fontFamily: fontFamily(), ...style }}>
      {children}
    </Text>
  );
};

export default memo(TextCus);
