export interface BlogPost {
  id?: string;
  title: string;
  content: string;
}

export interface BlogPostContext {
  data: BlogPost[];
  addBlogPost: (post: BlogPost) => void;
}
