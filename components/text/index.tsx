import React, { FC, ReactNode, memo } from 'react';
import { Text } from 'react-native';
import { FONTS } from '../../constant';

interface Props {
  children: ReactNode;
  type?: 'bold' | 'reglar';
  size?: 'reglar' | 'small' | 'large';
  style?: any;
}

const TextCus: FC<Props> = ({
  children,
  type = 'reglar',
  size = 'reglar',
  style,
}) => {
  const fontFamily = (): string => {
    switch (type) {
      case 'bold':
        return 'Quicksand_600SemiBold';
      default:
        return 'Quicksand_400Regular';
    }
  };

  const fontSize = (): number => {
    switch (size) {
      case 'small':
        return 12;
      default:
        return FONTS.FONT_SIZE_REGULAR;
    }
  };

  return (
    <Text
      style={{
        lineHeight: 20,
        fontSize: fontSize(),
        fontFamily: fontFamily(),
        ...style,
      }}
    >
      {children}
    </Text>
  );
};

export default memo(TextCus);
