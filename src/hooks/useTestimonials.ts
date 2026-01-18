import { useState, useEffect } from 'react';
import { Testimonial } from '@types';
import { testimonialsData } from '@data';

export function useTestimonials(featured: boolean = false) {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        setLoading(true);
        await new Promise(resolve => setTimeout(resolve, 250));

        // Filter for featured testimonials if requested
        const filtered = featured
          ? testimonialsData.filter(t => t.featured)
          : testimonialsData;

        // Sort by date (most recent first)
        const sorted = [...filtered].sort(
          (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );

        setTestimonials(sorted as Testimonial[]);
      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    };

    fetchTestimonials();
  }, [featured]);

  return { testimonials, loading, error };
}
