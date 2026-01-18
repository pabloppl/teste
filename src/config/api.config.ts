const API_BASE_URL =
  import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

export const API_ENDPOINTS = {
  products: `${API_BASE_URL}/products`,
  productById: (id: string) => `${API_BASE_URL}/products/${id}`,
  featuredProducts: `${API_BASE_URL}/products?featured=true`,
  categories: `${API_BASE_URL}/categories`,
  categoryById: (id: string) => `${API_BASE_URL}/categories/${id}`,
  testimonials: `${API_BASE_URL}/testimonials`,
  featuredTestimonials: `${API_BASE_URL}/testimonials?featured=true`,
} as const;
