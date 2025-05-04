import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const AboutPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center bg-avocado-700 text-white">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ 
            backgroundImage: "url('https://images.pexels.com/photos/2827374/pexels-photo-2827374.jpeg?auto=compress&cs=tinysrgb&w=1600')" 
          }}
        />
        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              {t('about.title')}
            </h1>
            <p className="text-xl font-light">
              {t('about.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white dark:bg-charcoal-900">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="heading-2 mb-6">{t('about.title')}</h2>
              <p className="text-lg text-charcoal-600 dark:text-cream-300 mb-6">
                {t('about.intro')}
              </p>
              <p className="text-charcoal-600 dark:text-cream-300">
                {t('about.description')}
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <img 
                src="https://theproducenews.com/sites/default/files/2022-06/DelReyPackingMechanical_24_0.jpg" 
                alt="AvoCasa Orchards" 
                className="rounded-lg shadow-lg w-full h-80 object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-16 bg-cream-50 dark:bg-charcoal-950">
        <div className="container-custom">
          <h2 className="heading-2 text-center mb-12">{t('about.history.title')}</h2>
          
          <div className="max-w-4xl mx-auto">
            {/* Timeline */}
            <div className="relative border-l-4 border-avocado-500 dark:border-avocado-700 ml-6 pl-12 pb-8">
              {/* 2010 */}
              <motion.div 
                className="mb-12 relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="absolute -left-16 bg-avocado-500 dark:bg-avocado-700 text-white text-center rounded-full w-10 h-10 flex items-center justify-center">
                  <span className="font-bold">1</span>
                </div>
                <h3 className="text-xl font-semibold text-charcoal-800 dark:text-cream-50 mb-2">2010: {t('about.history.foundation')}</h3>
                <p className="text-charcoal-600 dark:text-cream-300">
                  {t('about.history.foundationText')}
                </p>
              </motion.div>
              
              {/* 2015 */}
              <motion.div 
                className="mb-12 relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="absolute -left-16 bg-avocado-500 dark:bg-avocado-700 text-white text-center rounded-full w-10 h-10 flex items-center justify-center">
                  <span className="font-bold">2</span>
                </div>
                <h3 className="text-xl font-semibold text-charcoal-800 dark:text-cream-50 mb-2">2015: {t('about.history.exports')}</h3>
                <p className="text-charcoal-600 dark:text-cream-300">
                  {t('about.history.exportsText')}
                </p>
              </motion.div>
              
              {/* 2018 */}
              <motion.div 
                className="mb-12 relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <div className="absolute -left-16 bg-avocado-500 dark:bg-avocado-700 text-white text-center rounded-full w-10 h-10 flex items-center justify-center">
                  <span className="font-bold">3</span>
                </div>
                <h3 className="text-xl font-semibold text-charcoal-800 dark:text-cream-50 mb-2">2018: {t('about.history.certification')}</h3>
                <p className="text-charcoal-600 dark:text-cream-300">
                  {t('about.history.certificationText')}
                </p>
              </motion.div>
              
              {/* 2022 */}
              <motion.div 
                className="relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <div className="absolute -left-16 bg-avocado-500 dark:bg-avocado-700 text-white text-center rounded-full w-10 h-10 flex items-center justify-center">
                  <span className="font-bold">4</span>
                </div>
                <h3 className="text-xl font-semibold text-charcoal-800 dark:text-cream-50 mb-2">2022: {t('about.history.innovation')}</h3>
                <p className="text-charcoal-600 dark:text-cream-300">
                  {t('about.history.innovationText')}
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-16 bg-white dark:bg-charcoal-900">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* Mission */}
            <div>
              <h2 className="heading-3 mb-6">{t('about.mission.title')}</h2>
              <p className="text-charcoal-600 dark:text-cream-300 mb-6">
                {t('about.mission.content')}
              </p>
              <div className="relative mt-8 h-60 overflow-hidden rounded-lg">
                <img 
                  src="https://sunforestnz.com/cdn/shop/files/H-100C_Avocado02.jpg?v=1706822874&width=416" 
                  alt="Avocado Farm" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            {/* Values */}
            <div>
              <h2 className="heading-3 mb-6">{t('about.values.title')}</h2>
              <ul className="space-y-6">
                <motion.li 
                  className="flex gap-4"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="w-12 h-12 bg-avocado-100 dark:bg-avocado-900/50 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-avocado-700 dark:text-avocado-400 font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-charcoal-800 dark:text-cream-50 mb-1">
                      {t('about.values.quality')}
                    </h3>
                    <p className="text-charcoal-600 dark:text-cream-300">
                      {t('about.values.qualityText')}
                    </p>
                  </div>
                </motion.li>
                
                <motion.li 
                  className="flex gap-4"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <div className="w-12 h-12 bg-avocado-100 dark:bg-avocado-900/50 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-avocado-700 dark:text-avocado-400 font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-charcoal-800 dark:text-cream-50 mb-1">
                      {t('about.values.sustainability')}
                    </h3>
                    <p className="text-charcoal-600 dark:text-cream-300">
                      {t('about.values.sustainabilityText')}
                    </p>
                  </div>
                </motion.li>
                
                <motion.li 
                  className="flex gap-4"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <div className="w-12 h-12 bg-avocado-100 dark:bg-avocado-900/50 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-avocado-700 dark:text-avocado-400 font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-charcoal-800 dark:text-cream-50 mb-1">
                      {t('about.values.integrity')}
                    </h3>
                    <p className="text-charcoal-600 dark:text-cream-300">
                      {t('about.values.integrityText')}
                    </p>
                  </div>
                </motion.li>
                
                <motion.li 
                  className="flex gap-4"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <div className="w-12 h-12 bg-avocado-100 dark:bg-avocado-900/50 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-avocado-700 dark:text-avocado-400 font-bold">4</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-charcoal-800 dark:text-cream-50 mb-1">
                      {t('about.values.community')}
                    </h3>
                    <p className="text-charcoal-600 dark:text-cream-300">
                      {t('about.values.communityText')}
                    </p>
                  </div>
                </motion.li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-cream-50 dark:bg-charcoal-950">
        <div className="container-custom text-center">
          <h2 className="heading-2 mb-4">{t('about.team.title')}</h2>
          <p className="text-lg text-charcoal-600 dark:text-cream-300 max-w-3xl mx-auto mb-12">
            {t('about.team.description')}
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Hassan Alaoui */}
            <motion.div 
              className="card overflow-hidden"
              whileHover={{ y: -5 }}
            >
              <div className="h-64 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1742119803195-aaf41d6b2e61?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                  alt="Hassan Alaoui" 
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-charcoal-800 dark:text-cream-50">Hassan Alaoui</h3>
                <p className="text-avocado-600 dark:text-avocado-400 mb-3">{t('about.team.ceo')}</p>
                <p className="text-charcoal-600 dark:text-cream-300">
                  {t('about.team.ceoDescription')}
                </p>
              </div>
            </motion.div>
            
            {/* Laila Benali */}
            <motion.div 
              className="card overflow-hidden"
              whileHover={{ y: -5 }}
            >
              <div className="h-64 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1607945432204-89d3cd66bac6?q=80&w=2053&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                  alt="Laila Benali" 
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-charcoal-800 dark:text-cream-50">Laila Benali</h3>
                <p className="text-avocado-600 dark:text-avocado-400 mb-3">{t('about.team.operations')}</p>
                <p className="text-charcoal-600 dark:text-cream-300">
                  {t('about.team.operationsDescription')}
                </p>
              </div>
            </motion.div>
            
            {/* Omar Tazi */}
            <motion.div 
              className="card overflow-hidden"
              whileHover={{ y: -5 }}
            >
              <div className="h-64 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1703059680709-d9554370fff9?q=80&w=2064&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                  alt="Omar Tazi" 
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-charcoal-800 dark:text-cream-50">Omar Tazi</h3>
                <p className="text-avocado-600 dark:text-avocado-400 mb-3">{t('about.team.agricultural')}</p>
                <p className="text-charcoal-600 dark:text-cream-300">
                  {t('about.team.agriculturalDescription')}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-avocado-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {t('about.cta.title')}
          </h2>
          <p className="text-lg max-w-2xl mx-auto mb-8">
            {t('about.cta.description')}
          </p>
          <button 
            onClick={() => window.openContactModal()} 
            className="btn bg-white text-avocado-700 hover:bg-cream-100"
          >
            {t('cta.quote')}
          </button>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;