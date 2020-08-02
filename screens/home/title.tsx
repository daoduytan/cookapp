import React, { memo, ReactNode, FC } from 'react';
import { Text } from '../../components';
import { COLORS } from '../../constant';

const Title: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <Text
      type="bold"
      style={{
        fontSize: 17,
        color: COLORS.blue,
      }}
    >
      {children}
    </Text>
  );
};

export default memo(Title);
