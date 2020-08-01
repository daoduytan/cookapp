import React from 'react';

import { ApolloProvider } from '@apollo/react-hooks';

import { useFonts } from '@use-expo/font';
import { AppLoading } from 'expo';
import {
  Quicksand_400Regular,
  Quicksand_600SemiBold,
} from '@expo-google-fonts/quicksand';

import client from './api/client';
import Routers from './routers';

export default function App() {
  let [fontsLoaded] = useFonts({
    Quicksand_400Regular,
    Quicksand_600SemiBold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <ApolloProvider client={client}>
      <Routers />
    </ApolloProvider>
  );
}
