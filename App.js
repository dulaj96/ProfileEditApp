import { View, Text } from 'react-native';
import React from 'react';
import Router from './src/router/Router';
import Home from './src/screen/auth/Home';
import EditProfile from './src/screen/auth/EditProfile';

const App = () => {
  return (
    <Router />
  );
}

export default App;