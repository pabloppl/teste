import { ThemeProvider, useTheme } from '@context';
import { useProducts, useCategories, useTestimonials } from '@hooks';
import { formatPrice } from '@utils/formatters';
import { motion } from 'framer-motion';
import { Sun, Moon, Star, ShoppingBag, Instagram, Facebook, Heart, Mail } from 'lucide-react';
import { useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

// Header Component
function Header() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header style={{
      position: 'sticky',
      top: 0,
      zIndex: 100,
      backgroundColor: 'var(--surface)',
      borderBottom: '1px solid var(--border-primary)',
      backdropFilter: 'blur(10px)',
    }}>
      <div className="container" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 'var(--space-4) var(--space-6)',
      }}>
        <motion.h1
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'var(--text-2xl)',
            background: 'linear-gradient(135deg, var(--primary-500) 0%, var(--accent-400) 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            margin: 0,
            cursor: 'pointer',
          }}
        >
          PamPam
        </motion.h1>

        <button
          onClick={toggleTheme}
          style={{
            padding: 'var(--space-2)',
            borderRadius: 'var(--radius-md)',
            backgroundColor: 'var(--surface-elevated)',
            border: '1px solid var(--border-primary)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
          }}
          aria-label="Alternar tema"
        >
          <motion.div
            initial={false}
            animate={{ rotate: theme === 'dark' ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
          </motion.div>
        </button>
      </div>
    </header>
  );
}

// Hero Section
function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      style={{
        minHeight: '90vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: 'var(--space-12) var(--space-4)',
        background: `linear-gradient(135deg, var(--primary-50) 0%, var(--accent-50) 100%)`,
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        <h1 style={{
          fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
          marginBottom: 'var(--space-6)',
          fontWeight: 700,
        }}>
          Eleve Seu Estilo com
          <br />
          <span style={{
            background: 'linear-gradient(135deg, var(--primary-500) 0%, var(--accent-400) 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}>
            Acessórios Premium
          </span>
        </h1>

        <p style={{
          fontSize: 'var(--text-xl)',
          color: 'var(--text-secondary)',
          maxWidth: '700px',
          margin: '0 auto var(--space-8)',
        }}>
          Descubra nossa coleção exclusiva de acessórios de cabelo que combinam elegância e qualidade excepcional
        </p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          style={{
            padding: 'var(--space-4) var(--space-8)',
            fontSize: 'var(--text-lg)',
            fontWeight: 600,
            backgroundColor: 'var(--primary-500)',
            color: 'white',
            border: 'none',
            borderRadius: 'var(--radius-full)',
            cursor: 'pointer',
            boxShadow: 'var(--shadow-lg)',
            display: 'inline-flex',
            alignItems: 'center',
            gap: 'var(--space-2)',
          }}
        >
          <ShoppingBag size={20} />
          Explorar Coleção
        </motion.button>
      </motion.div>
    </motion.section>
  );
}

// Product Card Component
function ProductCard({ product }: any) {
  const primaryImage = product.images.find((img: any) => img.isPrimary);
  const hasDiscount = product.compareAtPrice && product.compareAtPrice > product.price;

  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.2 }}
      style={{
        backgroundColor: 'var(--surface)',
        borderRadius: 'var(--radius-lg)',
        overflow: 'hidden',
        boxShadow: 'var(--shadow-md)',
        cursor: 'pointer',
        position: 'relative',
      }}
    >
      {hasDiscount && (
        <div style={{
          position: 'absolute',
          top: 'var(--space-3)',
          right: 'var(--space-3)',
          backgroundColor: 'var(--error)',
          color: 'white',
          padding: 'var(--space-1) var(--space-3)',
          borderRadius: 'var(--radius-full)',
          fontSize: 'var(--text-xs)',
          fontWeight: 600,
          zIndex: 10,
        }}>
          SALE
        </div>
      )}

      {product.tags.includes('new') && !hasDiscount && (
        <div style={{
          position: 'absolute',
          top: 'var(--space-3)',
          right: 'var(--space-3)',
          backgroundColor: 'var(--accent-500)',
          color: 'white',
          padding: 'var(--space-1) var(--space-3)',
          borderRadius: 'var(--radius-full)',
          fontSize: 'var(--text-xs)',
          fontWeight: 600,
          zIndex: 10,
        }}>
          NOVO
        </div>
      )}

      <div style={{
        width: '100%',
        paddingTop: '100%',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <img
          src={primaryImage?.url}
          alt={primaryImage?.alt}
          loading="lazy"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
      </div>

      <div style={{ padding: 'var(--space-4)' }}>
        <h3 style={{
          fontSize: 'var(--text-base)',
          marginBottom: 'var(--space-2)',
          color: 'var(--text-primary)',
        }}>
          {product.name}
        </h3>

        <p style={{
          fontSize: 'var(--text-sm)',
          color: 'var(--text-secondary)',
          marginBottom: 'var(--space-3)',
        }}>
          {product.shortDescription}
        </p>

        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
          <div>
            {hasDiscount && (
              <span style={{
                fontSize: 'var(--text-sm)',
                color: 'var(--text-tertiary)',
                textDecoration: 'line-through',
                marginRight: 'var(--space-2)',
              }}>
                {formatPrice(product.compareAtPrice)}
              </span>
            )}
            <span style={{
              fontSize: 'var(--text-lg)',
              fontWeight: 700,
              color: 'var(--primary-500)',
            }}>
              {formatPrice(product.price)}
            </span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-1)' }}>
            <Star size={16} fill="var(--accent-400)" color="var(--accent-400)" />
            <span style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)' }}>
              {product.rating.average}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// Product Carousel
function ProductCarousel() {
  const { products, loading } = useProducts(true);
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 4000 })]);

  if (loading) {
    return <div style={{ textAlign: 'center', padding: 'var(--space-12)' }}>Carregando produtos...</div>;
  }

  return (
    <section style={{ padding: 'var(--space-16) 0' }}>
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: 'var(--space-8)' }}
        >
          Produtos em Destaque
        </motion.h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: 'var(--space-6)',
        }}>
          {products.slice(0, 8).map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}

// Category Grid
function CategoryGrid() {
  const { categories, loading } = useCategories();

  if (loading) {
    return <div style={{ textAlign: 'center', padding: 'var(--space-12)' }}>Carregando categorias...</div>;
  }

  return (
    <section style={{
      padding: 'var(--space-16) 0',
      backgroundColor: 'var(--surface)',
    }}>
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: 'var(--space-8)' }}
        >
          Compre por Categoria
        </motion.h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: 'var(--space-6)',
        }}>
          {categories.slice(0, 6).map((category, index) => (
            <motion.div
              key={category._id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.03 }}
              style={{
                position: 'relative',
                borderRadius: 'var(--radius-xl)',
                overflow: 'hidden',
                cursor: 'pointer',
                boxShadow: 'var(--shadow-lg)',
              }}
            >
              <div style={{ paddingTop: '130%', position: 'relative' }}>
                <img
                  src={category.image.url}
                  alt={category.image.alt}
                  loading="lazy"
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.4s',
                  }}
                />
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: 'linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.6))',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-end',
                  padding: 'var(--space-6)',
                }}>
                  <h3 style={{
                    color: 'white',
                    fontSize: 'var(--text-2xl)',
                    marginBottom: 'var(--space-2)',
                  }}>
                    {category.name}
                  </h3>
                  <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: 'var(--text-sm)' }}>
                    {category.productCount} produtos
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Testimonials
function Testimonials() {
  const { testimonials, loading } = useTestimonials(true);

  if (loading) {
    return <div style={{ textAlign: 'center', padding: 'var(--space-12)' }}>Carregando depoimentos...</div>;
  }

  return (
    <section style={{ padding: 'var(--space-16) 0' }}>
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: 'var(--space-8)' }}
        >
          O Que Nossas Clientes Dizem
        </motion.h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: 'var(--space-6)',
        }}>
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial._id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              style={{
                backgroundColor: 'var(--surface)',
                borderRadius: 'var(--radius-lg)',
                padding: 'var(--space-6)',
                boxShadow: 'var(--shadow-md)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: 'var(--space-4)' }}>
                <img
                  src={testimonial.customerAvatar}
                  alt={testimonial.customerName}
                  loading="lazy"
                  style={{
                    width: '50px',
                    height: '50px',
                    borderRadius: '50%',
                    marginRight: 'var(--space-3)',
                  }}
                />
                <div>
                  <h4 style={{ fontSize: 'var(--text-base)', marginBottom: 'var(--space-1)' }}>
                    {testimonial.customerName}
                  </h4>
                  <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)' }}>
                    {testimonial.customerLocation}
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: 'var(--space-1)', marginBottom: 'var(--space-3)' }}>
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} fill="var(--accent-400)" color="var(--accent-400)" />
                ))}
              </div>

              <p style={{
                fontSize: 'var(--text-base)',
                color: 'var(--text-secondary)',
                lineHeight: 1.6,
              }}>
                "{testimonial.comment}"
              </p>

              {testimonial.isVerifiedPurchase && (
                <div style={{
                  marginTop: 'var(--space-3)',
                  fontSize: 'var(--text-xs)',
                  color: 'var(--success)',
                  fontWeight: 600,
                }}>
                  ✓ Compra Verificada
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Footer
function Footer() {
  return (
    <footer style={{
      backgroundColor: 'var(--surface)',
      borderTop: '1px solid var(--border-primary)',
      padding: 'var(--space-12) 0 var(--space-6)',
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: 'var(--space-8)',
          marginBottom: 'var(--space-8)',
        }}>
          <div>
            <h3 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'var(--text-2xl)',
              background: 'linear-gradient(135deg, var(--primary-500) 0%, var(--accent-400) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              marginBottom: 'var(--space-3)',
            }}>
              PamPam
            </h3>
            <p style={{ color: 'var(--text-secondary)', marginBottom: 'var(--space-4)' }}>
              Acessórios de cabelo premium com design moderno e elegante
            </p>
            <div style={{ display: 'flex', gap: 'var(--space-3)' }}>
              <Instagram size={24} style={{ cursor: 'pointer' }} />
              <Facebook size={24} style={{ cursor: 'pointer' }} />
              <Heart size={24} style={{ cursor: 'pointer' }} />
              <Mail size={24} style={{ cursor: 'pointer' }} />
            </div>
          </div>

          <div>
            <h4 style={{ marginBottom: 'var(--space-3)' }}>Links Rápidos</h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
              <li><a href="#" style={{ color: 'var(--text-secondary)' }}>Sobre Nós</a></li>
              <li><a href="#" style={{ color: 'var(--text-secondary)' }}>Produtos</a></li>
              <li><a href="#" style={{ color: 'var(--text-secondary)' }}>Contato</a></li>
              <li><a href="#" style={{ color: 'var(--text-secondary)' }}>FAQ</a></li>
            </ul>
          </div>

          <div>
            <h4 style={{ marginBottom: 'var(--space-3)' }}>Newsletter</h4>
            <p style={{ color: 'var(--text-secondary)', marginBottom: 'var(--space-3)' }}>
              Receba ofertas exclusivas e novidades
            </p>
            <div style={{ display: 'flex', gap: 'var(--space-2)' }}>
              <input
                type="email"
                placeholder="Seu e-mail"
                style={{
                  flex: 1,
                  padding: 'var(--space-2) var(--space-3)',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--border-primary)',
                  backgroundColor: 'var(--background)',
                  color: 'var(--text-primary)',
                }}
              />
              <button style={{
                padding: 'var(--space-2) var(--space-4)',
                backgroundColor: 'var(--primary-500)',
                color: 'white',
                border: 'none',
                borderRadius: 'var(--radius-md)',
                cursor: 'pointer',
                fontWeight: 600,
              }}>
                Enviar
              </button>
            </div>
          </div>
        </div>

        <div style={{
          textAlign: 'center',
          paddingTop: 'var(--space-6)',
          borderTop: '1px solid var(--border-primary)',
          color: 'var(--text-secondary)',
          fontSize: 'var(--text-sm)',
        }}>
          <p>© 2026 PamPam. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}

// Main App Component
function AppContent() {
  return (
    <div style={{ minHeight: '100vh' }}>
      <Header />
      <main>
        <Hero />
        <ProductCarousel />
        <CategoryGrid />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
