import React from 'react';
import { motion } from 'framer-motion';

const categories = [
  {
    id: 'citrus',
    title: 'Citrus',
    image: 'https://images.unsplash.com/photo-1547781405-9d5f67810fbb?auto=format&fit=crop&w=1200&q=70'
  },
  {
    id: 'floral',
    title: 'Floral',
    image: 'https://images.unsplash.com/photo-1503217035885-5c5b2c4fb3f3?auto=format&fit=crop&w=1200&q=70'
  },
  {
    id: 'woody',
    title: 'Woody',
    image: 'https://images.unsplash.com/photo-1615485290305-9f51d11dff52?auto=format&fit=crop&w=1200&q=70'
  },
  {
    id: 'oriental',
    title: 'Oriental',
    image: 'https://images.unsplash.com/photo-1519682337058-a94d519337bc?auto=format&fit=crop&w=1200&q=70'
  }
];

const CategoryTiles = ({ onNavigate }) => {
  const handleClick = (id) => {
    if (typeof onNavigate === 'function') {
      onNavigate('shop', { category: id });
    }
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Shop by Scent Family</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, index) => (
            <motion.button
              key={cat.id}
              onClick={() => handleClick(cat.id)}
              className="relative rounded-2xl overflow-hidden group shadow-sm hover:shadow-xl transition-all"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <div className="aspect-[4/5] w-full">
                <img src={cat.image} alt={cat.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                  <span className="text-white text-xl font-semibold drop-shadow">{cat.title}</span>
                  <span className="text-white/90 text-sm bg-white/20 px-3 py-1 rounded-full backdrop-blur-sm">Shop</span>
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryTiles;


