import { useState, useEffect } from 'react';
import { Product } from '@types';
import { productsData } from '@data';

export function useProducts(featured: boolean = false) {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    // Simulate API call delay for realistic behavior
    const fetchProducts = async () => {
      try {
        setLoading(true);
        await new Promise(resolve => setTimeout(resolve, 300));

        // Filter for featured products if requested
        const filtered = featured
          ? productsData.filter(p => p.featured)
          : productsData;

        setProducts(filtered as Product[]);
      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [featured]);

  return { products, loading, error };
}

// Future MongoDB integration:
// Simply replace the mock data import with an API call:
// const response = await fetch(API_ENDPOINTS.products);
// const data = await response.json();
// setProducts(data);
