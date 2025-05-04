import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Globe, ChevronDown } from 'lucide-react';

interface LanguageSwitcherProps {
  isMobile?: boolean;
}

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ isMobile = false }) => {
  const { i18n, t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const languages = [
    { code: 'en', name: t('languages.english') },
    { code: 'fr', name: t('languages.french') },
    { code: 'es', name: t('languages.spanish') }
  ];

  const changeLanguage = async (lng: string) => {
    await i18n.changeLanguage(lng);
    setIsOpen(false);
  };

  const currentLanguage = languages.find(lang => lang.code === i18n.language) || languages[0];

  if (isMobile) {
    return (
      <div className="space-y-2">
        <p className="text-charcoal-800 dark:text-cream-50 font-medium">
          {t('languages.select')}
        </p>
        <div className="grid grid-cols-3 gap-2">
          {languages.map((language) => (
            <button
              key={language.code}
              onClick={() => changeLanguage(language.code)}
              className={`py-2 px-4 rounded-md text-sm transition-colors ${
                i18n.language === language.code
                  ? 'bg-avocado-600 text-white'
                  : 'bg-cream-100 text-charcoal-700 hover:bg-cream-200 dark:bg-charcoal-800 dark:text-cream-100 dark:hover:bg-charcoal-700'
              }`}
            >
              {language.name}
            </button>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 p-2 rounded-md hover:bg-cream-100 dark:hover:bg-charcoal-800"
        aria-expanded={isOpen}
        aria-haspopup="true"
        aria-label={t('languages.toggle')}
      >
        <Globe size={20} className="text-charcoal-700 dark:text-cream-100" />
        <span className="text-charcoal-700 dark:text-cream-100">
          {currentLanguage.code.toUpperCase()}
        </span>
        <ChevronDown 
          size={16} 
          className={`text-charcoal-700 dark:text-cream-100 transition-transform duration-200 ${
            isOpen ? 'transform rotate-180' : ''
          }`}
        />
      </button>

      {isOpen && (
        <div 
          className="absolute right-0 mt-2 w-40 bg-white dark:bg-charcoal-800 rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-20"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="language-menu"
        >
          {languages.map((language) => (
            <button
              key={language.code}
              onClick={() => changeLanguage(language.code)}
              className="w-full text-left px-4 py-2 text-sm text-charcoal-700 dark:text-cream-100 hover:bg-cream-100 dark:hover:bg-charcoal-700"
              role="menuitem"
            >
              {language.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;