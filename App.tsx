import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationRoute, RootStackParamList } from './src/types';
import HomeScreen from './src/screens/home/home.screen';

const Stack = createStackNavigator<RootStackParamList>();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={NavigationRoute.HOME} screenOptions={{ title: 'Sample App' }}>
        <Stack.Screen name={NavigationRoute.HOME} component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
