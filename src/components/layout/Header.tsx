import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';
import LanguageSwitcher from '../ui/LanguageSwitcher';

interface HeaderProps {
  openContactModal: () => void;
}

const Header: React.FC<HeaderProps> = ({ openContactModal }) => {
  const { t } = useTranslation();
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Update scroll state on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  // Handle body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
      document.body.style.top = `-${window.scrollY}px`;
    } else {
      const scrollY = document.body.style.top;
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
      document.body.style.top = '';
      window.scrollTo(0, parseInt(scrollY || '0') * -1);
    }
    return () => {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
      document.body.style.top = '';
    };
  }, [isMenuOpen]);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (isMenuOpen && !target.closest('.mobile-menu') && !target.closest('.menu-button')) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMenuOpen]);

  return (
    <header 
      className={`sticky top-0 z-50 transition-all duration-300 ease-in-out ${
        isScrolled 
          ? 'bg-white/95 dark:bg-charcoal-950/95 backdrop-blur-sm shadow-md py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-avocado-600 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-xl">D</span>
          </div>
          <span className="font-bold text-xl text-avocado-700 dark:text-avocado-400">DomainesMajd</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link 
            to="/" 
            className={`text-charcoal-700 dark:text-cream-100 hover:text-avocado-600 dark:hover:text-avocado-400 transition-colors ${
              location.pathname === '/' ? 'font-semibold text-avocado-700 dark:text-avocado-500' : ''
            }`}
          >
            {t('navigation.home')}
          </Link>
          <Link 
            to="/about" 
            className={`text-charcoal-700 dark:text-cream-100 hover:text-avocado-600 dark:hover:text-avocado-400 transition-colors ${
              location.pathname === '/about' ? 'font-semibold text-avocado-700 dark:text-avocado-500' : ''
            }`}
          >
            {t('navigation.about')}
          </Link>
          <Link 
            to="/products" 
            className={`text-charcoal-700 dark:text-cream-100 hover:text-avocado-600 dark:hover:text-avocado-400 transition-colors ${
              location.pathname === '/products' ? 'font-semibold text-avocado-700 dark:text-avocado-500' : ''
            }`}
          >
            {t('navigation.products')}
          </Link>
          <Link 
            to="/sustainability" 
            className={`text-charcoal-700 dark:text-cream-100 hover:text-avocado-600 dark:hover:text-avocado-400 transition-colors ${
              location.pathname === '/sustainability' ? 'font-semibold text-avocado-700 dark:text-avocado-500' : ''
            }`}
          >
            {t('navigation.sustainability')}
          </Link>
          <Link 
            to="/contact" 
            className={`text-charcoal-700 dark:text-cream-100 hover:text-avocado-600 dark:hover:text-avocado-400 transition-colors ${
              location.pathname === '/contact' ? 'font-semibold text-avocado-700 dark:text-avocado-500' : ''
            }`}
          >
            {t('navigation.contact')}
          </Link>
        </nav>

        {/* Header Actions */}
        <div className="hidden md:flex items-center gap-4">
          <LanguageSwitcher />
          
          <button 
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-cream-100 dark:hover:bg-charcoal-800"
            aria-label={theme === 'light' ? t('theme.dark') : t('theme.light')}
          >
            {theme === 'light' ? (
              <Moon size={20} className="text-charcoal-700" />
            ) : (
              <Sun size={20} className="text-cream-100" />
            )}
          </button>
          
          <button 
            onClick={openContactModal}
            className="btn btn-primary"
          >
            {t('cta.quote')}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 text-charcoal-700 dark:text-cream-100 menu-button z-50"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div 
        className={`md:hidden fixed inset-0 bg-white/95 dark:bg-charcoal-900/95 backdrop-blur-sm z-40 transition-all duration-300 ease-in-out mobile-menu ${
          isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div className="container-custom h-full flex flex-col justify-center">
          <nav className="flex flex-col items-center space-y-8">
            <Link 
              to="/"
              onClick={() => setIsMenuOpen(false)}
              className="text-2xl font-medium text-charcoal-800 dark:text-cream-50 hover:text-avocado-600 dark:hover:text-avocado-400 transition-colors"
            >
              {t('navigation.home')}
            </Link>
            <Link 
              to="/about"
              onClick={() => setIsMenuOpen(false)}
              className="text-2xl font-medium text-charcoal-800 dark:text-cream-50 hover:text-avocado-600 dark:hover:text-avocado-400 transition-colors"
            >
              {t('navigation.about')}
            </Link>
            <Link 
              to="/products"
              onClick={() => setIsMenuOpen(false)}
              className="text-2xl font-medium text-charcoal-800 dark:text-cream-50 hover:text-avocado-600 dark:hover:text-avocado-400 transition-colors"
            >
              {t('navigation.products')}
            </Link>
            <Link 
              to="/sustainability"
              onClick={() => setIsMenuOpen(false)}
              className="text-2xl font-medium text-charcoal-800 dark:text-cream-50 hover:text-avocado-600 dark:hover:text-avocado-400 transition-colors"
            >
              {t('navigation.sustainability')}
            </Link>
            <Link 
              to="/contact"
              onClick={() => setIsMenuOpen(false)}
              className="text-2xl font-medium text-charcoal-800 dark:text-cream-50 hover:text-avocado-600 dark:hover:text-avocado-400 transition-colors"
            >
              {t('navigation.contact')}
            </Link>
          </nav>

          <div className="mt-12 flex flex-col items-center space-y-8">
            <LanguageSwitcher isMobile />
            
            <div className="flex items-center justify-center p-4">
              <button 
                onClick={toggleTheme}
                className="p-2 rounded-full hover:bg-cream-100 dark:hover:bg-charcoal-800 flex items-center gap-2"
              >
                {theme === 'light' ? (
                  <>
                    <Moon size={20} className="text-charcoal-700" />
                    <span className="text-charcoal-800 dark:text-cream-50">
                      {t('theme.dark')}
                    </span>
                  </>
                ) : (
                  <>
                    <Sun size={20} className="text-cream-100" />
                    <span className="text-charcoal-800 dark:text-cream-50">
                      {t('theme.light')}
                    </span>
                  </>
                )}
              </button>
            </div>
            
            <button 
              onClick={() => {
                setIsMenuOpen(false);
                openContactModal();
              }}
              className="btn btn-primary w-64"
            >
              {t('cta.quote')}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;