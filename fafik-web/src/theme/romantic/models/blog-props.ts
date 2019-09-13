export interface RomanticBlogPost {
  image: string;
  date: Date;
  header: string;
}

export interface RomanticBlogProps {
  header: string;
  subtitle: string;
  posts: RomanticBlogPost[];
  showMore: string;
}
