import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, Leaf, ShieldCheck, ChevronLeft, ChevronRight } from 'lucide-react';

const HomePage: React.FC = () => {
  const { t } = useTranslation();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const heroImages = [
    "https://images.unsplash.com/photo-1583029901628-8039767c7ad0?w=1600&auto=format&fit=crop&q=60",
    "https://www.uniqpacking.ma/storage/posts/2Ztw7-1725884747.webp",
    "https://media.istockphoto.com/id/1359819435/photo/halves-of-fresh-avocado-on-a-cutting-board.jpg?s=612x612&w=0&k=20&c=1q6XCEdUL3lHq4B5Mur9dLSZy5Q_zmFWZs96pDioNqU="
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + heroImages.length) % heroImages.length);
  };
  
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center">
        {/* Background Images */}
        <div className="absolute inset-0 z-0 bg-black">
          <AnimatePresence initial={false}>
            <motion.div
              key={currentImageIndex}
              className="absolute inset-0 bg-cover bg-center"
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 0.7, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 1 }}
              style={{ 
                backgroundImage: `url('${heroImages[currentImageIndex]}')`
              }}
            />
          </AnimatePresence>

          {/* Slider Controls */}
          <div className="absolute inset-x-0 bottom-8 flex justify-center gap-2 z-20">
            {heroImages.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentImageIndex 
                    ? 'bg-white w-8' 
                    : 'bg-white/50 hover:bg-white/75'
                }`}
                onClick={() => setCurrentImageIndex(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={prevImage}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/20 text-white hover:bg-black/40 transition-colors z-20"
            aria-label="Previous slide"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/20 text-white hover:bg-black/40 transition-colors z-20"
            aria-label="Next slide"
          >
            <ChevronRight size={24} />
          </button>
        </div>
        
        {/* Content */}
        <div className="container-custom relative z-10 text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              {t('hero.title')}
            </h1>
            <p className="text-xl md:text-2xl font-light mb-8">
              {t('hero.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => window.openContactModal()} 
                className="btn bg-avocado-600 hover:bg-avocado-700 text-white"
              >
                {t('cta.quote')}
              </button>
              <a 
                href="#about" 
                className="btn bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white"
              >
                {t('navigation.about')}
              </a>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* About Section */}
      <section id="about" className="py-20 bg-cream-50 dark:bg-charcoal-900">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="heading-2 mb-4">{t('about.title')}</h2>
            <p className="text-lg text-charcoal-600 dark:text-cream-300">
              {t('about.intro')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Quality */}
            <motion.div 
              className="card p-6"
              whileHover={{ y: -5 }}
            >
              <Award size={40} className="text-avocado-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-charcoal-800 dark:text-cream-50">
                {t('about.values.quality')}
              </h3>
              <p className="text-charcoal-600 dark:text-cream-300">
                Our avocados are carefully harvested at peak ripeness and undergo rigorous quality control before export.
              </p>
            </motion.div>
            
            {/* Sustainability */}
            <motion.div 
              className="card p-6"
              whileHover={{ y: -5 }}
            >
              <Leaf size={40} className="text-avocado-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-charcoal-800 dark:text-cream-50">
                {t('about.values.sustainability')}
              </h3>
              <p className="text-charcoal-600 dark:text-cream-300">
                We employ sustainable farming methods that conserve water, protect soil health, and support biodiversity.
              </p>
            </motion.div>
            
            {/* Certifications */}
            <motion.div 
              className="card p-6"
              whileHover={{ y: -5 }}
            >
              <ShieldCheck size={40} className="text-avocado-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-charcoal-800 dark:text-cream-50">
                {t('products.specifications.certifications')}
              </h3>
              <p className="text-charcoal-600 dark:text-cream-300">
                Our products meet international standards with certifications including Organic, GlobalG.A.P, and BRC Food Safety.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Product Showcase */}
      <section className="py-20 bg-white dark:bg-charcoal-950 relative overflow-hidden">
        {/* Decorative Pattern Background */}
        <div className="absolute inset-0 bg-zellige-pattern opacity-5"></div>
        
        <div className="container-custom relative">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="heading-2 mb-4">{t('products.title')}</h2>
            <p className="text-lg text-charcoal-600 dark:text-cream-300">
              {t('products.intro')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Hass Avocado */}
            <motion.div 
              className="card overflow-hidden"
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="h-56 overflow-hidden">
                <img 
                  src="https://media.istockphoto.com/id/521202112/photo/avocado-hass-variety-on-the-tree.jpg?s=612x612&w=0&k=20&c=nhzsHljC0lZgWc2fhKDX0Z1wABBLlNDQL-X_zRE-_9E=" 
                  alt="Hass Avocado" 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-charcoal-800 dark:text-cream-50">
                  {t('products.varieties.hass.name')}
                </h3>
                <p className="text-charcoal-600 dark:text-cream-300 mb-4">
                  {t('products.varieties.hass.description')}
                </p>
                <div className="space-y-1 mb-4">
                  <p className="text-sm text-charcoal-700 dark:text-cream-200">
                    {t('products.varieties.hass.season')}
                  </p>
                  <p className="text-sm text-charcoal-700 dark:text-cream-200">
                    {t('products.varieties.hass.sizes')}
                  </p>
                </div>
                <button
                  onClick={() => window.openContactModal()}
                  className="text-avocado-600 dark:text-avocado-400 hover:text-avocado-700 dark:hover:text-avocado-300 font-medium"
                >
                  {t('cta.quote')} →
                </button>
              </div>
            </motion.div>
            
            {/* Fuerte Avocado */}
            <motion.div 
              className="card overflow-hidden"
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="h-56 overflow-hidden">
                <img 
                  src="https://cjgardeningcenter.com/cdn/shop/products/FuerteAvocado.jpg?v=1600931314" 
                  alt="Fuerte Avocado" 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-charcoal-800 dark:text-cream-50">
                  {t('products.varieties.fuerte.name')}
                </h3>
                <p className="text-charcoal-600 dark:text-cream-300 mb-4">
                  {t('products.varieties.fuerte.description')}
                </p>
                <div className="space-y-1 mb-4">
                  <p className="text-sm text-charcoal-700 dark:text-cream-200">
                    {t('products.varieties.fuerte.season')}
                  </p>
                  <p className="text-sm text-charcoal-700 dark:text-cream-200">
                    {t('products.varieties.fuerte.sizes')}
                  </p>
                </div>
                <button
                  onClick={() => window.openContactModal()}
                  className="text-avocado-600 dark:text-avocado-400 hover:text-avocado-700 dark:hover:text-avocado-300 font-medium"
                >
                  {t('cta.quote')} →
                </button>
              </div>
            </motion.div>
            
            {/* Bacon Avocado */}
            <motion.div 
              className="card overflow-hidden"
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="h-56 overflow-hidden">
                <img 
                  src="https://cdn11.bigcommerce.com/s-f6cx4kq/products/589/images/3815/Bacon_Avocado_tree_tyler_farms_seeds__76388.1663447839.490.588.JPG?c=2" 
                  alt="Bacon Avocado" 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-charcoal-800 dark:text-cream-50">
                  {t('products.varieties.bacon.name')}
                </h3>
                <p className="text-charcoal-600 dark:text-cream-300 mb-4">
                  {t('products.varieties.bacon.description')}
                </p>
                <div className="space-y-1 mb-4">
                  <p className="text-sm text-charcoal-700 dark:text-cream-200">
                    {t('products.varieties.bacon.season')}
                  </p>
                  <p className="text-sm text-charcoal-700 dark:text-cream-200">
                    {t('products.varieties.bacon.sizes')}
                  </p>
                </div>
                <button
                  onClick={() => window.openContactModal()}
                  className="text-avocado-600 dark:text-avocado-400 hover:text-avocado-700 dark:hover:text-avocado-300 font-medium"
                >
                  {t('cta.quote')} →
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Sustainability Highlights */}
      <section className="py-20 bg-avocado-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-charcoal-800 text-4xl font-bold mb-4">{t('sustainability.title')}</h2>
            <p className="text-lg text-charcoal-600">
              {t('sustainability.intro')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/2827374/pexels-photo-2827374.jpeg?auto=compress&cs=tinysrgb&w=1600" 
                alt="Sustainable Farming" 
                className="rounded-lg shadow-lg w-full h-full object-cover"
              />
            </div>
            
            <div className="space-y-8">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="text-xl font-semibold mb-2 text-charcoal-800">
                  {t('sustainability.waterManagement.title')}
                </h3>
                <p className="text-charcoal-600">
                  {t('sustainability.waterManagement.content')}
                </p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h3 className="text-xl font-semibold mb-2 text-charcoal-800">
                  {t('sustainability.soilHealth.title')}
                </h3>
                <p className="text-charcoal-600">
                  {t('sustainability.soilHealth.content')}
                </p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <h3 className="text-xl font-semibold mb-2 text-charcoal-800">
                  {t('sustainability.biodiversity.title')}
                </h3>
                <p className="text-charcoal-600">
                  {t('sustainability.biodiversity.content')}
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-terracotta-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {t('cta.ready')}
          </h2>
          <p className="text-lg max-w-2xl mx-auto mb-8">
            {t('cta.join')}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button 
              onClick={() => window.openContactModal()} 
              className="btn bg-white text-terracotta-600 hover:bg-cream-100"
            >
              {t('cta.quote')}
            </button>
            <a 
              href="https://wa.me/212522123456" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn bg-terracotta-700 hover:bg-terracotta-800 text-white"
            >
              {t('cta.chat')}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;