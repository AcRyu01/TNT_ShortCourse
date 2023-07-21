export interface IBlog {
  id: number;
  title: string;
  author: string;
  date: string;
  content: string;
  tags: string[];
  views: number;
  likes: number;
}
