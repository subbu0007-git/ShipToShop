import React, { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Platform, View } from 'react-native';
import { fonts } from './Globalstyles/Theme';
import "expo-dev-client";
import Bottomtabnavigator from './Navigations/Bottomtabnavigator';

const App = () => {
  if (!fonts()) {
    return null; // Don't render anything until fonts are loaded
  }

  return (
    <>
        <View style={{ flex: 1, backgroundColor: "white" }}>
          <StatusBar style={Platform.OS === "ios" ? "light" : "dark"} backgroundColor="white" />
          <Bottomtabnavigator />
        </View>
    </>
  );
};

export default App;