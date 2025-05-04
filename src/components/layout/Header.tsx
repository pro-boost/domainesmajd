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
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
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
          className="md:hidden fixed top-5 right-4 z-[100] p-2 bg-white dark:bg-charcoal-900 rounded-lg shadow-lg"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        >
          <div className="relative w-6 h-6">
            <span className={`absolute left-0 block w-full h-0.5 bg-current transform transition-all duration-300 ease-in-out ${
              isMenuOpen ? 'rotate-45 top-3' : 'top-1'
            }`} />
            <span className={`absolute left-0 block w-full h-0.5 bg-current transform transition-all duration-300 ease-in-out ${
              isMenuOpen ? 'opacity-0' : 'top-3'
            }`} />
            <span className={`absolute left-0 block w-full h-0.5 bg-current transform transition-all duration-300 ease-in-out ${
              isMenuOpen ? '-rotate-45 top-3' : 'top-5'
            }`} />
          </div>
        </button>
      </div>

      {/* Mobile Navigation */}
      <div 
        className={`fixed top-0 left-0 w-screen h-screen bg-white dark:bg-charcoal-900 z-[90] transition-transform duration-500 ease-in-out ${
          isMenuOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="w-full h-full flex flex-col justify-center items-center p-4">
          <nav className="flex flex-col items-center space-y-8">
            {[
              { to: '/', label: 'navigation.home' },
              { to: '/about', label: 'navigation.about' },
              { to: '/products', label: 'navigation.products' },
              { to: '/sustainability', label: 'navigation.sustainability' },
              { to: '/contact', label: 'navigation.contact' }
            ].map((item, index) => (
              <Link 
                key={item.to}
                to={item.to}
                onClick={() => setIsMenuOpen(false)}
                className={`text-2xl font-medium text-charcoal-800 dark:text-cream-50 hover:text-avocado-600 dark:hover:text-avocado-400 transition-all duration-300 transform ${
                  isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {t(item.label)}
              </Link>
            ))}
          </nav>

          <div className="mt-12 flex flex-col items-center space-y-8">
            <div className={`transform transition-all duration-300 ${
              isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
            }`} style={{ transitionDelay: '500ms' }}>
              <LanguageSwitcher isMobile />
            </div>
            
            <div className={`transform transition-all duration-300 ${
              isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
            }`} style={{ transitionDelay: '600ms' }}>
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
              className={`btn btn-primary w-64 transform transition-all duration-300 ${
                isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
              }`}
              style={{ transitionDelay: '700ms' }}
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