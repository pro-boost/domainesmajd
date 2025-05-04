import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

interface ContactFormProps {
  onSubmitSuccess?: () => void;
}

const ContactForm: React.FC<ContactFormProps> = ({ onSubmitSuccess }) => {
  const { t } = useTranslation();
  const [formState, setFormState] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    interest: 'wholesale',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState<null | 'success' | 'error'>(null);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setFormStatus('success');
      
      // Reset form after successful submission
      setFormState({
        name: '',
        company: '',
        email: '',
        phone: '',
        interest: 'wholesale',
        message: ''
      });
      
      // Close modal after successful submission
      if (onSubmitSuccess) {
        setTimeout(onSubmitSuccess, 2000);
      }
    }, 1500);
  };
  
  return (
    <div>
      {formStatus === 'success' ? (
        <motion.div 
          className="bg-avocado-100 dark:bg-avocado-900/30 text-avocado-800 dark:text-avocado-300 p-4 rounded-lg text-center mb-4"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <p className="font-medium">{t('contact.form.success')}</p>
        </motion.div>
      ) : formStatus === 'error' ? (
        <div className="bg-terracotta-100 dark:bg-terracotta-900/30 text-terracotta-800 dark:text-terracotta-300 p-4 rounded-lg text-center mb-4">
          <p className="font-medium">{t('contact.form.error')}</p>
        </div>
      ) : null}
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-charcoal-700 dark:text-cream-200 mb-1">
              {t('contact.form.name')} *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formState.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-cream-300 dark:border-charcoal-700 rounded-lg focus:ring-2 focus:ring-avocado-500 dark:focus:ring-avocado-600 focus:border-transparent bg-white dark:bg-charcoal-800 text-charcoal-800 dark:text-cream-100"
            />
          </div>
          
          <div>
            <label htmlFor="company" className="block text-sm font-medium text-charcoal-700 dark:text-cream-200 mb-1">
              {t('contact.form.company')} *
            </label>
            <input
              type="text"
              id="company"
              name="company"
              value={formState.company}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-cream-300 dark:border-charcoal-700 rounded-lg focus:ring-2 focus:ring-avocado-500 dark:focus:ring-avocado-600 focus:border-transparent bg-white dark:bg-charcoal-800 text-charcoal-800 dark:text-cream-100"
            />
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-charcoal-700 dark:text-cream-200 mb-1">
              {t('contact.form.email')} *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formState.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-cream-300 dark:border-charcoal-700 rounded-lg focus:ring-2 focus:ring-avocado-500 dark:focus:ring-avocado-600 focus:border-transparent bg-white dark:bg-charcoal-800 text-charcoal-800 dark:text-cream-100"
            />
          </div>
          
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-charcoal-700 dark:text-cream-200 mb-1">
              {t('contact.form.phone')}
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formState.phone}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-cream-300 dark:border-charcoal-700 rounded-lg focus:ring-2 focus:ring-avocado-500 dark:focus:ring-avocado-600 focus:border-transparent bg-white dark:bg-charcoal-800 text-charcoal-800 dark:text-cream-100"
            />
          </div>
        </div>
        
        <div>
          <label htmlFor="interest" className="block text-sm font-medium text-charcoal-700 dark:text-cream-200 mb-1">
            {t('contact.form.interest')} *
          </label>
          <select
            id="interest"
            name="interest"
            value={formState.interest}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-cream-300 dark:border-charcoal-700 rounded-lg focus:ring-2 focus:ring-avocado-500 dark:focus:ring-avocado-600 focus:border-transparent bg-white dark:bg-charcoal-800 text-charcoal-800 dark:text-cream-100"
          >
            <option value="wholesale">{t('contact.form.wholesale')}</option>
            <option value="distribution">{t('contact.form.distribution')}</option>
            <option value="partnership">{t('contact.form.partnership')}</option>
            <option value="other">{t('contact.form.other')}</option>
          </select>
        </div>
        
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-charcoal-700 dark:text-cream-200 mb-1">
            {t('contact.form.message')} *
          </label>
          <textarea
            id="message"
            name="message"
            value={formState.message}
            onChange={handleChange}
            required
            rows={4}
            className="w-full px-4 py-2 border border-cream-300 dark:border-charcoal-700 rounded-lg focus:ring-2 focus:ring-avocado-500 dark:focus:ring-avocado-600 focus:border-transparent bg-white dark:bg-charcoal-800 text-charcoal-800 dark:text-cream-100"
          />
        </div>
        
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full btn btn-primary disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <span className="inline-flex items-center">
              <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Processing...
            </span>
          ) : (
            t('contact.form.submit')
          )}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;