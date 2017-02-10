
export interface Author {
  id?: number;
  name?: string;
  image?: string;
  books?: Book[];
}

export interface Book {
  id?: number;
  title?: string;
  image?: string;
  authorId?: number;
  description?: string;
  author?: Author;
}
