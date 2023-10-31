import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Provider } from 'react-redux';

import AppNavigator from './src/navigation/AppNavigator';
import store from './src/store';
import commonStyles from './src/styles/commonStyles';

export default function App() {
  return (
    <Provider store={store}>
      <GestureHandlerRootView style={commonStyles.flex}>
        <NavigationContainer>
          <AppNavigator />
        </NavigationContainer>
      </GestureHandlerRootView>
    </Provider>
  );
}
