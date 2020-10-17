import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationRoute, RootStackParamList } from './src/types';
import HomeScreen from './src/screens/home/home.screen';
import { BlogProvider } from './src/providers/blog-post.provider';
import ShowScreen from './src/screens/show/show.screen';
import CreateScreen from './src/screens/create/create.screen';
import HomeRightHeader from './src/screens/home/home-right-header.component';
import CreateRightHeader from './src/screens/create/create-right-header.component';

const Stack = createStackNavigator<RootStackParamList>();

const App: React.FC = () => {
  return (
    <BlogProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName={NavigationRoute.HOME} screenOptions={{ title: 'Blog Posts' }}>
          <Stack.Screen name={NavigationRoute.HOME} component={HomeScreen} options={(props) => ({ headerRight: () => HomeRightHeader(props) })} />
          <Stack.Screen name={NavigationRoute.SHOW} component={ShowScreen} />
          <Stack.Screen
            name={NavigationRoute.CREATE}
            component={CreateScreen}
            options={(props) => ({ headerRight: () => CreateRightHeader(props) })}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </BlogProvider>
  );
};

export default App;
