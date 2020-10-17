import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationRoute, RootStackParamList } from './src/types';
import HomeScreen from './src/screens/home/home.screen';
import { BlogProvider } from './src/providers/blog-post.provider';
import ShowScreen from './src/screens/show/show.screen';

const Stack = createStackNavigator<RootStackParamList>();

const App: React.FC = () => {
  return (
    <BlogProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName={NavigationRoute.HOME} screenOptions={{ title: 'Blogs' }}>
          <Stack.Screen name={NavigationRoute.HOME} component={HomeScreen} />
          <Stack.Screen name={NavigationRoute.SHOW} component={ShowScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </BlogProvider>
  );
};

export default App;
