import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';
import ContactForm from '../components/contact/ContactForm';

const ContactPage: React.FC = () => {
  const { t } = useTranslation();
  const companyAddress = "Mohammed V Office Center -Imm B Etage 6, Angle Rue Ait Ba Amrane Et، Rue Mohamed V, Casablanca 20000";

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center bg-charcoal-900 text-white">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1596524430615-b46475ddff6e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" 
          }}
        />
        <div className="container-custom relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            {t('contact.title')}
          </h1>
          <p className="text-xl font-light max-w-2xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-16 bg-white dark:bg-charcoal-900">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Information */}
            <div className="lg:col-span-1">
              <h2 className="heading-3 mb-6">{t('contact.title')}</h2>
              
              <div className="space-y-8 mb-8">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-avocado-100 dark:bg-avocado-900/50 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin size={20} className="text-avocado-700 dark:text-avocado-400" />
                  </div>
                  <div>
                    <h3 className="font-medium text-charcoal-800 dark:text-cream-50 mb-1">
                      {t('contact.info.address')}
                    </h3>
                    <p className="text-charcoal-600 dark:text-cream-300">
                      {companyAddress}
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-avocado-100 dark:bg-avocado-900/50 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone size={20} className="text-avocado-700 dark:text-avocado-400" />
                  </div>
                  <div>
                    <h3 className="font-medium text-charcoal-800 dark:text-cream-50 mb-1">
                      {t('contact.info.phone')}
                    </h3>
                    <p className="text-charcoal-600 dark:text-cream-300">
                      +212 661 725 581
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-avocado-100 dark:bg-avocado-900/50 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail size={20} className="text-avocado-700 dark:text-avocado-400" />
                  </div>
                  <div>
                    <h3 className="font-medium text-charcoal-800 dark:text-cream-50 mb-1">
                      {t('contact.info.email')}
                    </h3>
                    <p className="text-charcoal-600 dark:text-cream-300">
                      info@domainesmajd.com
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Chat Options */}
              <div className="bg-cream-50 dark:bg-charcoal-800 p-6 rounded-lg">
                <div className="flex items-center gap-3 mb-4">
                  <MessageCircle size={24} className="text-avocado-600 dark:text-avocado-400" />
                  <h3 className="font-semibold text-charcoal-800 dark:text-cream-50">
                    {t('cta.chat')}
                  </h3>
                </div>
                <p className="text-charcoal-600 dark:text-cream-300 mb-4">
                  {t('contact.chat.description')}
                </p>
                <a 
                  href="https://wa.me/212661725581" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn btn-outline w-full"
                >
                  WhatsApp Chat
                </a>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <motion.div 
                className="bg-white dark:bg-charcoal-800 rounded-lg shadow-lg p-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="heading-3 mb-6">{t('contact.form.submit')}</h2>
                <ContactForm />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-cream-50 dark:bg-charcoal-950">
        <div className="container-custom">
          <h2 className="heading-2 text-center mb-12">{t('contact.map.title')}</h2>
          
          <div className="bg-white dark:bg-charcoal-800 rounded-lg shadow-lg overflow-hidden h-96">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3323.438789594995!2d-7.60261102450399!3d33.59391777333308!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7cd65a3c170c9%3A0xda2aa53cae99dc39!2sprime%20zone%20systemes!5e0!3m2!1sen!2sma!4v1746333624129!5m2!1sen!2sma"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="DomainesMajd Location"
              className="w-full h-full"
            />
          </div>
        </div>
      </section>

      {/* Business Hours */}
      <section className="py-16 bg-white dark:bg-charcoal-900">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-2 text-center mb-8">{t('contact.hours.title')}</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-cream-50 dark:bg-charcoal-800 rounded-lg p-6">
                <h3 className="font-semibold text-xl text-charcoal-800 dark:text-cream-50 mb-4">
                  {t('contact.hours.office.title')}
                </h3>
                <ul className="space-y-3">
                  <li className="flex justify-between border-b border-cream-200 dark:border-charcoal-700 pb-2">
                    <span className="text-charcoal-700 dark:text-cream-200">{t('contact.hours.weekdays')}</span>
                    <span className="text-charcoal-800 dark:text-cream-50 font-medium">{t('contact.hours.office.weekdays')}</span>
                  </li>
                  <li className="flex justify-between border-b border-cream-200 dark:border-charcoal-700 pb-2">
                    <span className="text-charcoal-700 dark:text-cream-200">{t('contact.hours.saturday')}</span>
                    <span className="text-charcoal-800 dark:text-cream-50 font-medium">{t('contact.hours.office.saturday')}</span>
                  </li>
                  <li className="flex justify-between pb-2">
                    <span className="text-charcoal-700 dark:text-cream-200">{t('contact.hours.sunday')}</span>
                    <span className="text-charcoal-800 dark:text-cream-50 font-medium">{t('contact.hours.closed')}</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-cream-50 dark:bg-charcoal-800 rounded-lg p-6">
                <h3 className="font-semibold text-xl text-charcoal-800 dark:text-cream-50 mb-4">
                  {t('contact.hours.farm.title')}
                </h3>
                <ul className="space-y-3">
                  <li className="flex justify-between border-b border-cream-200 dark:border-charcoal-700 pb-2">
                    <span className="text-charcoal-700 dark:text-cream-200">{t('contact.hours.weekdays')}</span>
                    <span className="text-charcoal-800 dark:text-cream-50 font-medium">{t('contact.hours.farm.weekdays')}</span>
                  </li>
                  <li className="flex justify-between border-b border-cream-200 dark:border-charcoal-700 pb-2">
                    <span className="text-charcoal-700 dark:text-cream-200">{t('contact.hours.saturday')}</span>
                    <span className="text-charcoal-800 dark:text-cream-50 font-medium">{t('contact.hours.farm.saturday')}</span>
                  </li>
                  <li className="flex justify-between pb-2">
                    <span className="text-charcoal-700 dark:text-cream-200">{t('contact.hours.note')}</span>
                    <span className="text-charcoal-800 dark:text-cream-50 font-medium">{t('contact.hours.appointment')}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-avocado-600 text-white">
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
              className="btn bg-white text-avocado-700 hover:bg-cream-100"
            >
              {t('cta.quote')}
            </button>
            <a 
              href="https://wa.me/212661725581" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn bg-avocado-700 hover:bg-avocado-800 text-white"
            >
              {t('cta.chat')}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;