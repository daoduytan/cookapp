import React, { memo, ReactNode, FC } from 'react';
import { Text } from '../../components';

const Title: FC<{ children: ReactNode }> = ({ children }) => {
  return <Text type="bold">{children}</Text>;
};

export default memo(Title);
