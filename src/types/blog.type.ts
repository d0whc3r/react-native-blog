export interface BlogPost {
  title: string;
  content: string;
}

export interface FullBlogPost extends BlogPost {
  id: string;
}

export const ADD_BLOGPOST = 'blog/ADD_BLOGPOST';
export const DELETE_BLOGPOST = 'blog/DELETE_BLOGPOST';
export const EDIT_BLOGPOST = 'blog/EDIT_BLOGPOST';
export const GET_BLOGPOST = 'blog/GET_BLOGPOST';

export interface BlogState {
  blogPosts: FullBlogPost[];
}

export interface AddBlogPostAction {
  type: typeof ADD_BLOGPOST;
  payload: FullBlogPost;
}

export interface DeleteBlogPostAction {
  type: typeof DELETE_BLOGPOST;
  payload: FullBlogPost['id'];
}

export interface EditBlogPostPayload {
  id: FullBlogPost['id'];
  post: BlogPost;
}

export interface EditBlogPostAction {
  type: typeof EDIT_BLOGPOST;
  payload: EditBlogPostPayload;
}

export interface GetBlogPostAction {
  type: typeof GET_BLOGPOST;
  payload: FullBlogPost[];
}

export type BlogActionTypes = AddBlogPostAction | DeleteBlogPostAction | EditBlogPostAction | GetBlogPostAction;
