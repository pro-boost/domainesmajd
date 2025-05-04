import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { 
  Facebook, 
  Instagram, 
  Linkedin, 
  Twitter, 
  Mail, 
  Phone, 
  MapPin 
} from 'lucide-react';

const Footer: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <footer className="bg-charcoal-900 text-cream-100 pt-12 pb-6">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-avocado-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">D</span>
              </div>
              <span className="font-bold text-lg text-white">DomainesMajd</span>
            </div>
            <p className="text-cream-300 mb-4">
              {t('footer.description')}
            </p>
            <div className="flex gap-4">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-cream-400 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-cream-400 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-cream-400 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-cream-400 hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">{t('footer.links')}</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  to="/" 
                  className="text-cream-300 hover:text-white transition-colors"
                >
                  {t('navigation.home')}
                </Link>
              </li>
              <li>
                <Link 
                  to="/about" 
                  className="text-cream-300 hover:text-white transition-colors"
                >
                  {t('navigation.about')}
                </Link>
              </li>
              <li>
                <Link 
                  to="/products" 
                  className="text-cream-300 hover:text-white transition-colors"
                >
                  {t('navigation.products')}
                </Link>
              </li>
              <li>
                <Link 
                  to="/sustainability" 
                  className="text-cream-300 hover:text-white transition-colors"
                >
                  {t('navigation.sustainability')}
                </Link>
              </li>
              <li>
                <Link 
                  to="/contact" 
                  className="text-cream-300 hover:text-white transition-colors"
                >
                  {t('navigation.contact')}
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">{t('contact.title')}</h3>
            <ul className="space-y-3">
              <li className="flex gap-3">
                <MapPin size={20} className="text-avocado-400 flex-shrink-0" />
                <div>
                  <p className="text-cream-300">Mohammed V Office Center -Imm B Etage 6,</p>
                  <p className="text-cream-300">Angle Rue Ait Ba Amrane Et، Rue Mohamed V, Casablanca 20000</p>
                </div>
              </li>
              <li className="flex gap-3">
                <Phone size={20} className="text-avocado-400 flex-shrink-0" />
                <p className="text-cream-300">+212 661 725 581</p>
              </li>
              <li className="flex gap-3">
                <Mail size={20} className="text-avocado-400 flex-shrink-0" />
                <p className="text-cream-300">info@domainesmajd.com</p>
              </li>
            </ul>
          </div>
          
          {/* Certifications */}
          <div>
            <h3 className="text-white font-semibold mb-4">{t('footer.certifications')}</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/10 rounded-lg p-3 flex items-center justify-center">
                <span className="text-white text-sm font-medium">Organic</span>
              </div>
              <div className="bg-white/10 rounded-lg p-3 flex items-center justify-center">
                <span className="text-white text-sm font-medium">GlobalG.A.P.</span>
              </div>
              <div className="bg-white/10 rounded-lg p-3 flex items-center justify-center">
                <span className="text-white text-sm font-medium">BRC Food</span>
              </div>
              <div className="bg-white/10 rounded-lg p-3 flex items-center justify-center">
                <span className="text-white text-sm font-medium">ISO 22000</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="mt-12 pt-6 border-t border-charcoal-700 text-center text-cream-400">
          <p>{t('footer.copyright')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;