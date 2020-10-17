import { FullBlogPost } from './blog.type';

export enum NavigationRoute {
  HOME = 'Home',
  SHOW = 'Show'
}

export type RootStackParamList = {
  [NavigationRoute.HOME]: undefined;
  [NavigationRoute.SHOW]: { id: FullBlogPost['id'] };
};
