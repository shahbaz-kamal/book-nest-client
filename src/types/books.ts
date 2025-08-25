export interface Book {
  _id: string;
  title: string;
  author: string;
  genre: string;
  isbn: number | string;
  description: string;
  price: number;
  coverPage: string;
  showInHeroSection: boolean;
  copies: number;
  available: boolean;
}

export interface InitialState {
  value: number;
  heroData: Book[];
  allBookData: Book[];
}
