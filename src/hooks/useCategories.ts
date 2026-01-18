import { useState, useEffect } from 'react';
import { Category } from '@types';
import { categoriesData } from '@data';

export function useCategories() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        setLoading(true);
        await new Promise(resolve => setTimeout(resolve, 200));

        // Sort by order field
        const sorted = [...categoriesData].sort((a, b) => a.order - b.order);
        setCategories(sorted as Category[]);
      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  return { categories, loading, error };
}
