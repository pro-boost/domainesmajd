import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import WhatsAppButton from '../ui/WhatsAppButton';
import ContactModal from '../contact/ContactModal';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const openContactModal = () => {
    setIsContactModalOpen(true);
  };

  const closeContactModal = () => {
    setIsContactModalOpen(false);
  };

  // Make this function available globally for other components to use
  React.useEffect(() => {
    window.openContactModal = openContactModal;
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header openContactModal={openContactModal} />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
      <WhatsAppButton />
      <ContactModal isOpen={isContactModalOpen} onClose={closeContactModal} />
    </div>
  );
};

// Add this to the global Window interface
declare global {
  interface Window {
    openContactModal: () => void;
  }
}

export default Layout;