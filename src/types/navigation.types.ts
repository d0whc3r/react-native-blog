import { FullBlogPost } from './blog.type';

export enum NavigationRoute {
  HOME = 'Home',
  SHOW = 'Show',
  CREATE = 'Create',
  EDIT = 'Edit'
}

export type RootStackParamList = {
  [NavigationRoute.HOME]: undefined;
  [NavigationRoute.SHOW]: { id: FullBlogPost['id'] };
  [NavigationRoute.CREATE]?: { createPost: () => void };
  [NavigationRoute.EDIT]: { id: FullBlogPost['id']; editPost?: () => void };
};
