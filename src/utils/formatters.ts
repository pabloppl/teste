/**
 * Format price in cents to Brazilian Real currency
 * @param cents - Price in cents (e.g., 2499 = R$24,99)
 * @returns Formatted price string
 */
export function formatPrice(cents: number): string {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(cents / 100);
}

/**
 * Format date to relative time (e.g., "há 2 dias")
 * @param dateString - ISO date string
 * @returns Relative time string
 */
export function formatRelativeTime(dateString: string): string {
  const date = new Date(dateString);
  const now = new Date();
  const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);

  if (diffInSeconds < 60) return 'agora mesmo';
  if (diffInSeconds < 3600) {
    const minutes = Math.floor(diffInSeconds / 60);
    return `há ${minutes} ${minutes === 1 ? 'minuto' : 'minutos'}`;
  }
  if (diffInSeconds < 86400) {
    const hours = Math.floor(diffInSeconds / 3600);
    return `há ${hours} ${hours === 1 ? 'hora' : 'horas'}`;
  }
  if (diffInSeconds < 2592000) {
    const days = Math.floor(diffInSeconds / 86400);
    return `há ${days} ${days === 1 ? 'dia' : 'dias'}`;
  }
  if (diffInSeconds < 31536000) {
    const months = Math.floor(diffInSeconds / 2592000);
    return `há ${months} ${months === 1 ? 'mês' : 'meses'}`;
  }
  const years = Math.floor(diffInSeconds / 31536000);
  return `há ${years} ${years === 1 ? 'ano' : 'anos'}`;
}

/**
 * Truncate text to a maximum length
 * @param text - Text to truncate
 * @param maxLength - Maximum length
 * @returns Truncated text with ellipsis
 */
export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength).trim() + '...';
}
