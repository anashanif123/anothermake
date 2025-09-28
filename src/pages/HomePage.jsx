import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRightIcon, TruckIcon, ShieldCheckIcon, HeartIcon } from '@heroicons/react/24/outline';
import ProductCard from '../components/Product/ProductCard';
import TestimonialsSection from '../components/Testimonials/TestimonialsSection';
import ImageCarousel from '../components/UI/ImageCarousel';
import SaleLoop from '../components/UI/SaleLoop';
import CategoryTiles from '../components/UI/CategoryTiles';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const HomePage = ({ onNavigate, onViewProduct, products }) => {
  useEffect(() => {
    // Only run GSAP animations if elements exist
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
      gsap.fromTo('.hero-title', 
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: 'power2.out' }
      );
    }

    const heroSubtitle = document.querySelector('.hero-subtitle');
    if (heroSubtitle) {
      gsap.fromTo('.hero-subtitle', 
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, delay: 0.2, ease: 'power2.out' }
      );
    }

    const heroButtons = document.querySelector('.hero-buttons');
    if (heroButtons) {
      gsap.fromTo('.hero-buttons', 
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 1, delay: 0.4, ease: 'power2.out' }
      );
    }

    const heroImage = document.querySelector('.hero-image');
    if (heroImage) {
      gsap.fromTo('.hero-image', 
        { opacity: 0, scale: 0.8, rotate: -10 },
        { opacity: 1, scale: 1, rotate: 0, duration: 1.2, delay: 0.3, ease: 'power2.out' }
      );
    }

    // Stats animation
    const statCards = document.querySelectorAll('.stat-card');
    if (statCards.length > 0) {
      gsap.fromTo('.stat-card',
        { opacity: 0, y: 30 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 0.8, 
          stagger: 0.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.stats-section',
            start: 'top 80%',
          }
        }
      );
    }

    // Featured products animation
    const featuredProducts = document.querySelectorAll('.featured-product');
    if (featuredProducts.length > 0) {
      gsap.fromTo('.featured-product',
        { opacity: 0, y: 40, scale: 0.9 },
        { 
          opacity: 1, 
          y: 0, 
          scale: 1, 
          duration: 0.8, 
          stagger: 0.15,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.featured-section',
            start: 'top 80%',
          }
        }
      );
    }
  }, []);

  const carouselImages = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=1400&q=80",
      title: "Exquisite Extraits",
      subtitle: "Intense, long-lasting luxury"
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=1400&q=80",
      title: "Citrus & Aquatics",
      subtitle: "Bright, clean, and refreshing"
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1505575972945-2804b5e8f16e?auto=format&fit=crop&w=1400&q=80",
      title: "Modern Classics",
      subtitle: "Iconic bottles, timeless appeal"
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Sale Loop */}
      <SaleLoop />
      
      {/* Hero Section */}
      <section className="relative pt-28 pb-16 flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#f8f6f2] via-[#f3efe9] to-[#ede7df]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_#ffffff80,_#00000000_60%)]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
            {/* Content */}
            <div className="hero-content space-y-8">
              <motion.h1 
                className="hero-title text-5xl lg:text-6xl font-extrabold text-white leading-tight"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                Craft Your
                <span className="bg-gradient-to-r from-amber-700 to-rose-500 bg-clip-text text-transparent"> Signature Scent</span>
              </motion.h1>
              
              <motion.p 
                className="hero-subtitle text-xl lg:text-2xl text-gray-700 leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                Discover curated niche and designer perfumes. From sunlit citrus to velvet oud,
                find the bottle that defines you.
              </motion.p>

              <motion.div 
                className="hero-buttons flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                <motion.button
                  onClick={() => onNavigate('shop')}
                  className="group relative px-8 py-4 bg-black text-white font-bold rounded-2xl overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Shop Fragrances
                    <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity" />
                </motion.button>

                <motion.button
                  onClick={() => onNavigate('shop', { category: 'featured' })}
                  className="px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-2xl backdrop-blur-sm hover:bg-white/10 transition-all"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Explore Notes
                </motion.button>

                {/* Trust Badges */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
                  <div className="flex items-center gap-3 text-gray-700">
                    <ShieldCheckIcon className="w-5 h-5" />
                    <span className="text-sm font-medium">100% Authentic</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-700">
                    <TruckIcon className="w-5 h-5" />
                    <span className="text-sm font-medium">Free Shipping $75+</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-700">
                    <HeartIcon className="w-5 h-5" />
                    <span className="text-sm font-medium">Curated by Experts</span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Hero Image */}
            <motion.div 
              className="hero-image relative lg:justify-self-end"
              initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1.2, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <div className="relative max-w-xl mx-auto aspect-[4/5] overflow-hidden rounded-3xl shadow-2xl max-h-[560px]">
                <img
                  src="https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=1400&q=80"
                  alt="Luxury Perfume Bottle"
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Automatic Carousel Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Discover Our Fragrances
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Explore eau de parfum, extrait, and colognes across every scent family
            </p>
          </motion.div>

          <motion.div 
            className="relative overflow-hidden rounded-3xl shadow-2xl h-96 md:h-[500px]"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <ImageCarousel 
              images={carouselImages}
              autoPlay={true}
              interval={5000}
              className="h-full"
            />
          </motion.div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="featured-section py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Featured Fragrances
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover our most loved and highly-rated scents
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, staggerChildren: 0.15 }}
          >
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                className="featured-product"
                initial={{ opacity: 0, y: 40, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.15 }}
              >
                <ProductCard
                  product={product}
                  onView={onViewProduct}
                />
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <motion.button
              onClick={() => onNavigate('shop')}
              className="px-8 py-4 bg-black text-white font-semibold rounded-2xl hover:bg-gray-800 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View All Fragrances
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <CategoryTiles onNavigate={onNavigate} />

      {/* Testimonials Section */}
      <TestimonialsSection />
    </div>
  );
};

export default HomePage;
