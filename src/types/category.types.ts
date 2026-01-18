export interface Category {
  _id: string;
  name: string;
  slug: string;
  description: string;
  image: {
    url: string;
    alt: string;
  };
  productCount: number;
  order: number;
  createdAt: string;
  updatedAt: string;
}
