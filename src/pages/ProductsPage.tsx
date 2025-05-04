import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Check, PackageCheck, Award, Truck, Calendar } from 'lucide-react';

const ProductsPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-charcoal-900 text-white">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ 
            backgroundImage: "url('https://images.pexels.com/photos/3687927/pexels-photo-3687927.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')" 
          }}
        />
        <div className="container-custom relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            {t('products.title')}
          </h1>
          <p className="text-xl font-light max-w-2xl mx-auto">
            {t('products.intro')}
          </p>
        </div>
      </section>

      {/* Product Varieties */}
      <section className="py-16 bg-white dark:bg-charcoal-900">
        <div className="container-custom">
          <h2 className="heading-2 text-center mb-14">{t('products.varieties.title')}</h2>
          
          <div className="space-y-24">
            {/* Hass Avocado */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="order-2 lg:order-1"
              >
                <div className="inline-flex items-center gap-2 bg-avocado-100 dark:bg-avocado-900/50 text-avocado-700 dark:text-avocado-400 px-3 py-1 rounded-full text-sm font-medium mb-4">
                  <span>Premium</span>
                </div>
                <h3 className="text-2xl font-bold text-charcoal-800 dark:text-cream-50 mb-4">
                  {t('products.varieties.hass.name')}
                </h3>
                <p className="text-charcoal-600 dark:text-cream-300 mb-6">
                  {t('products.varieties.hass.description')}
                </p>
                
                <div className="space-y-4 mb-6">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-avocado-100 dark:bg-avocado-900/50 flex items-center justify-center flex-shrink-0 mt-1">
                      <Calendar size={16} className="text-avocado-700 dark:text-avocado-400" />
                    </div>
                    <div>
                      <p className="text-charcoal-700 dark:text-cream-200">
                        {t('products.varieties.hass.season')}
                      </p>
                      <p className="text-charcoal-600 dark:text-cream-300">
                        {t('products.varieties.hass.sizes')}
                      </p>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => window.openContactModal()}
                  className="btn btn-primary"
                >
                  {t('cta.quote')}
                </button>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="order-1 lg:order-2"
              >
                <img 
                  src="https://media.istockphoto.com/id/521202112/photo/avocado-hass-variety-on-the-tree.jpg?s=612x612&w=0&k=20&c=nhzsHljC0lZgWc2fhKDX0Z1wABBLlNDQL-X_zRE-_9E=" 
                  alt="Hass Avocado" 
                  className="rounded-lg shadow-lg w-full h-[400px] object-cover"
                />
              </motion.div>
            </div>
            
            {/* Fuerte Avocado */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <img 
                  src="https://cjgardeningcenter.com/cdn/shop/products/FuerteAvocado.jpg?v=1600931314" 
                  alt="Fuerte Avocado" 
                  className="rounded-lg shadow-lg w-full h-[400px] object-cover"
                />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="inline-flex items-center gap-2 bg-avocado-100 dark:bg-avocado-900/50 text-avocado-700 dark:text-avocado-400 px-3 py-1 rounded-full text-sm font-medium mb-4">
                  <span>Classic</span>
                </div>
                <h3 className="text-2xl font-bold text-charcoal-800 dark:text-cream-50 mb-4">
                  {t('products.varieties.fuerte.name')}
                </h3>
                <p className="text-charcoal-600 dark:text-cream-300 mb-6">
                  {t('products.varieties.fuerte.description')}
                </p>
                
                <div className="space-y-4 mb-6">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-avocado-100 dark:bg-avocado-900/50 flex items-center justify-center flex-shrink-0 mt-1">
                      <Calendar size={16} className="text-avocado-700 dark:text-avocado-400" />
                    </div>
                    <div>
                      <p className="text-charcoal-700 dark:text-cream-200">
                        {t('products.varieties.fuerte.season')}
                      </p>
                      <p className="text-charcoal-600 dark:text-cream-300">
                        {t('products.varieties.fuerte.sizes')}
                      </p>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => window.openContactModal()}
                  className="btn btn-primary"
                >
                  {t('cta.quote')}
                </button>
              </motion.div>
            </div>
            
            {/* Bacon Avocado */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="order-2 lg:order-1"
              >
                <div className="inline-flex items-center gap-2 bg-avocado-100 dark:bg-avocado-900/50 text-avocado-700 dark:text-avocado-400 px-3 py-1 rounded-full text-sm font-medium mb-4">
                  <span>Specialty</span>
                </div>
                <h3 className="text-2xl font-bold text-charcoal-800 dark:text-cream-50 mb-4">
                  {t('products.varieties.bacon.name')}
                </h3>
                <p className="text-charcoal-600 dark:text-cream-300 mb-6">
                  {t('products.varieties.bacon.description')}
                </p>
                
                <div className="space-y-4 mb-6">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-avocado-100 dark:bg-avocado-900/50 flex items-center justify-center flex-shrink-0 mt-1">
                      <Calendar size={16} className="text-avocado-700 dark:text-avocado-400" />
                    </div>
                    <div>
                      <p className="text-charcoal-700 dark:text-cream-200">
                        {t('products.varieties.bacon.season')}
                      </p>
                      <p className="text-charcoal-600 dark:text-cream-300">
                        {t('products.varieties.bacon.sizes')}
                      </p>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => window.openContactModal()}
                  className="btn btn-primary"
                >
                  {t('cta.quote')}
                </button>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="order-1 lg:order-2"
              >
                <img 
                  src="https://cdn11.bigcommerce.com/s-f6cx4kq/products/589/images/3815/Bacon_Avocado_tree_tyler_farms_seeds__76388.1663447839.490.588.JPG?c=2" 
                  alt="Bacon Avocado" 
                  className="rounded-lg shadow-lg w-full h-[400px] object-cover"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Export Specifications */}
      <section className="py-16 bg-cream-50 dark:bg-charcoal-950">
        <div className="container-custom">
          <h2 className="heading-2 text-center mb-12">{t('products.export.title')}</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* Packaging Options */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="card p-8"
            >
              <h3 className="text-xl font-bold text-charcoal-800 dark:text-cream-50 mb-6 flex items-center gap-3">
                <PackageCheck size={24} className="text-avocado-600 dark:text-avocado-400" />
                {t('products.export.packaging.title')}
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-avocado-100 dark:bg-avocado-900/50 flex items-center justify-center flex-shrink-0">
                    <Check size={16} className="text-avocado-700 dark:text-avocado-400" />
                  </div>
                  <div>
                    <h4 className="font-medium text-charcoal-800 dark:text-cream-50 mb-1">
                      {t('products.export.packaging.standard.title')}
                    </h4>
                    <p className="text-charcoal-600 dark:text-cream-300">
                      {t('products.export.packaging.standard.description')}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-avocado-100 dark:bg-avocado-900/50 flex items-center justify-center flex-shrink-0">
                    <Check size={16} className="text-avocado-700 dark:text-avocado-400" />
                  </div>
                  <div>
                    <h4 className="font-medium text-charcoal-800 dark:text-cream-50 mb-1">
                      {t('products.export.packaging.bulk.title')}
                    </h4>
                    <p className="text-charcoal-600 dark:text-cream-300">
                      {t('products.export.packaging.bulk.description')}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-avocado-100 dark:bg-avocado-900/50 flex items-center justify-center flex-shrink-0">
                    <Check size={16} className="text-avocado-700 dark:text-avocado-400" />
                  </div>
                  <div>
                    <h4 className="font-medium text-charcoal-800 dark:text-cream-50 mb-1">
                      {t('products.export.packaging.retail.title')}
                    </h4>
                    <p className="text-charcoal-600 dark:text-cream-300">
                      {t('products.export.packaging.retail.description')}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-avocado-100 dark:bg-avocado-900/50 flex items-center justify-center flex-shrink-0">
                    <Check size={16} className="text-avocado-700 dark:text-avocado-400" />
                  </div>
                  <div>
                    <h4 className="font-medium text-charcoal-800 dark:text-cream-50 mb-1">
                      {t('products.export.packaging.custom.title')}
                    </h4>
                    <p className="text-charcoal-600 dark:text-cream-300">
                      {t('products.export.packaging.custom.description')}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* Certifications */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="card p-8"
            >
              <h3 className="text-xl font-bold text-charcoal-800 dark:text-cream-50 mb-6 flex items-center gap-3">
                <Award size={24} className="text-avocado-600 dark:text-avocado-400" />
                {t('products.export.certifications.title')}
              </h3>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="p-4 border border-cream-200 dark:border-charcoal-700 rounded-lg text-center hover:border-avocado-400 dark:hover:border-avocado-600 transition-colors">
                  <h4 className="font-medium text-charcoal-800 dark:text-cream-50">
                    {t('products.export.certifications.organic.title')}
                  </h4>
                  <p className="text-sm text-charcoal-600 dark:text-cream-300">
                    {t('products.export.certifications.organic.description')}
                  </p>
                </div>
                
                <div className="p-4 border border-cream-200 dark:border-charcoal-700 rounded-lg text-center hover:border-avocado-400 dark:hover:border-avocado-600 transition-colors">
                  <h4 className="font-medium text-charcoal-800 dark:text-cream-50">
                    {t('products.export.certifications.globalGap.title')}
                  </h4>
                  <p className="text-sm text-charcoal-600 dark:text-cream-300">
                    {t('products.export.certifications.globalGap.description')}
                  </p>
                </div>
                
                <div className="p-4 border border-cream-200 dark:border-charcoal-700 rounded-lg text-center hover:border-avocado-400 dark:hover:border-avocado-600 transition-colors">
                  <h4 className="font-medium text-charcoal-800 dark:text-cream-50">
                    {t('products.export.certifications.brc.title')}
                  </h4>
                  <p className="text-sm text-charcoal-600 dark:text-cream-300">
                    {t('products.export.certifications.brc.description')}
                  </p>
                </div>
                
                <div className="p-4 border border-cream-200 dark:border-charcoal-700 rounded-lg text-center hover:border-avocado-400 dark:hover:border-avocado-600 transition-colors">
                  <h4 className="font-medium text-charcoal-800 dark:text-cream-50">
                    {t('products.export.certifications.iso.title')}
                  </h4>
                  <p className="text-sm text-charcoal-600 dark:text-cream-300">
                    {t('products.export.certifications.iso.description')}
                  </p>
                </div>
              </div>
              
              <div className="bg-avocado-50 dark:bg-avocado-900/20 p-4 rounded-lg">
                <p className="text-charcoal-700 dark:text-cream-200">
                  {t('products.export.certifications.note')}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Shipping & Logistics */}
      <section className="py-16 bg-white dark:bg-charcoal-900">
        <div className="container-custom">
          <h2 className="heading-2 text-center mb-4">{t('products.shipping.title')}</h2>
          <p className="text-lg text-charcoal-600 dark:text-cream-300 text-center max-w-3xl mx-auto mb-12">
            {t('products.shipping.intro')}
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <motion.div 
              className="card p-6 border-t-4 border-avocado-500"
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="font-semibold text-charcoal-800 dark:text-cream-50 mb-3">
                {t('products.shipping.coldChain.title')}
              </h3>
              <p className="text-charcoal-600 dark:text-cream-300">
                {t('products.shipping.coldChain.description')}
              </p>
            </motion.div>
            
            <motion.div 
              className="card p-6 border-t-4 border-avocado-500"
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h3 className="font-semibold text-charcoal-800 dark:text-cream-50 mb-3">
                {t('products.shipping.documentation.title')}
              </h3>
              <p className="text-charcoal-600 dark:text-cream-300">
                {t('products.shipping.documentation.description')}
              </p>
            </motion.div>
            
            <motion.div 
              className="card p-6 border-t-4 border-avocado-500"
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="font-semibold text-charcoal-800 dark:text-cream-50 mb-3">
                {t('products.shipping.quality.title')}
              </h3>
              <p className="text-charcoal-600 dark:text-cream-300">
                {t('products.shipping.quality.description')}
              </p>
            </motion.div>
            
            <motion.div 
              className="card p-6 border-t-4 border-avocado-500"
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h3 className="font-semibold text-charcoal-800 dark:text-cream-50 mb-3">
                {t('products.shipping.logistics.title')}
              </h3>
              <p className="text-charcoal-600 dark:text-cream-300">
                {t('products.shipping.logistics.description')}
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Seasonal Availability */}
      <section className="py-16 bg-cream-50 dark:bg-charcoal-950">
        <div className="container-custom">
          <h2 className="heading-2 text-center mb-12">{t('products.seasonal.title')}</h2>
          
          <div className="bg-white dark:bg-charcoal-800 rounded-xl shadow-lg overflow-hidden max-w-4xl mx-auto">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-avocado-600 text-white">
                    <th className="py-4 px-4 text-left">Variety</th>
                    <th className="py-4 px-4 text-center">Jan</th>
                    <th className="py-4 px-4 text-center">Feb</th>
                    <th className="py-4 px-4 text-center">Mar</th>
                    <th className="py-4 px-4 text-center">Apr</th>
                    <th className="py-4 px-4 text-center">May</th>
                    <th className="py-4 px-4 text-center">Jun</th>
                    <th className="py-4 px-4 text-center">Jul</th>
                    <th className="py-4 px-4 text-center">Aug</th>
                    <th className="py-4 px-4 text-center">Sep</th>
                    <th className="py-4 px-4 text-center">Oct</th>
                    <th className="py-4 px-4 text-center">Nov</th>
                    <th className="py-4 px-4 text-center">Dec</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-cream-200 dark:border-charcoal-700">
                    <td className="py-4 px-4 font-medium text-charcoal-800 dark:text-cream-50">Hass</td>
                    <td className="py-4 px-4 text-center bg-avocado-100/50 dark:bg-avocado-900/30 text-avocado-800 dark:text-avocado-400">●</td>
                    <td className="py-4 px-4 text-center bg-avocado-100/50 dark:bg-avocado-900/30 text-avocado-800 dark:text-avocado-400">●</td>
                    <td className="py-4 px-4 text-center bg-avocado-100/50 dark:bg-avocado-900/30 text-avocado-800 dark:text-avocado-400">●</td>
                    <td className="py-4 px-4 text-center bg-avocado-100/50 dark:bg-avocado-900/30 text-avocado-800 dark:text-avocado-400">●</td>
                    <td className="py-4 px-4 text-center bg-avocado-100/50 dark:bg-avocado-900/30 text-avocado-800 dark:text-avocado-400">●</td>
                    <td className="py-4 px-4 text-center">○</td>
                    <td className="py-4 px-4 text-center">○</td>
                    <td className="py-4 px-4 text-center">○</td>
                    <td className="py-4 px-4 text-center">○</td>
                    <td className="py-4 px-4 text-center bg-avocado-100/50 dark:bg-avocado-900/30 text-avocado-800 dark:text-avocado-400">●</td>
                    <td className="py-4 px-4 text-center bg-avocado-100/50 dark:bg-avocado-900/30 text-avocado-800 dark:text-avocado-400">●</td>
                    <td className="py-4 px-4 text-center bg-avocado-100/50 dark:bg-avocado-900/30 text-avocado-800 dark:text-avocado-400">●</td>
                  </tr>
                  <tr className="border-b border-cream-200 dark:border-charcoal-700">
                    <td className="py-4 px-4 font-medium text-charcoal-800 dark:text-cream-50">Fuerte</td>
                    <td className="py-4 px-4 text-center bg-avocado-100/50 dark:bg-avocado-900/30 text-avocado-800 dark:text-avocado-400">●</td>
                    <td className="py-4 px-4 text-center bg-avocado-100/50 dark:bg-avocado-900/30 text-avocado-800 dark:text-avocado-400">●</td>
                    <td className="py-4 px-4 text-center bg-avocado-100/50 dark:bg-avocado-900/30 text-avocado-800 dark:text-avocado-400">●</td>
                    <td className="py-4 px-4 text-center">○</td>
                    <td className="py-4 px-4 text-center">○</td>
                    <td className="py-4 px-4 text-center">○</td>
                    <td className="py-4 px-4 text-center">○</td>
                    <td className="py-4 px-4 text-center">○</td>
                    <td className="py-4 px-4 text-center">○</td>
                    <td className="py-4 px-4 text-center">○</td>
                    <td className="py-4 px-4 text-center bg-avocado-100/50 dark:bg-avocado-900/30 text-avocado-800 dark:text-avocado-400">●</td>
                    <td className="py-4 px-4 text-center bg-avocado-100/50 dark:bg-avocado-900/30 text-avocado-800 dark:text-avocado-400">●</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4 font-medium text-charcoal-800 dark:text-cream-50">Bacon</td>
                    <td className="py-4 px-4 text-center bg-avocado-100/50 dark:bg-avocado-900/30 text-avocado-800 dark:text-avocado-400">●</td>
                    <td className="py-4 px-4 text-center">○</td>
                    <td className="py-4 px-4 text-center">○</td>
                    <td className="py-4 px-4 text-center">○</td>
                    <td className="py-4 px-4 text-center">○</td>
                    <td className="py-4 px-4 text-center">○</td>
                    <td className="py-4 px-4 text-center">○</td>
                    <td className="py-4 px-4 text-center">○</td>
                    <td className="py-4 px-4 text-center">○</td>
                    <td className="py-4 px-4 text-center bg-avocado-100/50 dark:bg-avocado-900/30 text-avocado-800 dark:text-avocado-400">●</td>
                    <td className="py-4 px-4  text-center bg-avocado-100/50 dark:bg-avocado-900/30 text-avocado-800 dark:text-avocado-400">●</td>
                    <td className="py-4 px-4 text-center bg-avocado-100/50 dark:bg-avocado-900/30 text-avocado-800 dark:text-avocado-400">●</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="p-4 bg-cream-50 dark:bg-charcoal-900 text-sm text-charcoal-600 dark:text-cream-300 flex gap-6">
              <div className="flex items-center gap-2">
                <span className="text-avocado-800 dark:text-avocado-400">●</span>
                <span>{t('products.seasonal.peak')}</span>
              </div>
              <div className="flex items-center gap-2">
                <span>○</span>
                <span>{t('products.seasonal.limited')}</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-avocado-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {t('products.cta.title')}
          </h2>
          <p className="text-lg max-w-2xl mx-auto mb-8">
            {t('products.cta.description')}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button 
              onClick={() => window.openContactModal()} 
              className="btn bg-white text-avocado-700 hover:bg-cream-100"
            >
              {t('cta.quote')}
            </button>
            <a 
              href="#" 
              className="btn bg-avocado-700 hover:bg-avocado-800 text-white"
            >
              {t('cta.catalog')}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductsPage;