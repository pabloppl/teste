export interface Product {
  _id: string;
  name: string;
  slug: string;
  description: string;
  shortDescription: string;
  price: number; // Em centavos (ex: 2499 = R$24,99)
  compareAtPrice?: number; // Preço original para promoções
  category: string;
  categoryId: string;
  images: {
    url: string;
    alt: string;
    isPrimary: boolean;
  }[];
  stock: number;
  sku: string;
  tags: string[]; // ["bestseller", "new", "sale"]
  rating: {
    average: number; // 0-5
    count: number;
  };
  featured: boolean;
  createdAt: string;
  updatedAt: string;
}
