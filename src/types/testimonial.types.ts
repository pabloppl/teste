export interface Testimonial {
  _id: string;
  customerName: string;
  customerLocation?: string;
  customerAvatar?: string;
  rating: number; // 1-5
  comment: string;
  productId?: string;
  isVerifiedPurchase: boolean;
  featured: boolean;
  createdAt: string;
  updatedAt: string;
}
