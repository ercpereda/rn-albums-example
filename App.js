import React from 'react';
import { StyleSheet, View } from 'react-native';

import Header from './app/components/Header';
import AlbumList from './app/components/AlbumList';

const App = () => (
  <View>
    <Header text={'Albums'} />
    <AlbumList />
  </View>
);

export default App;
