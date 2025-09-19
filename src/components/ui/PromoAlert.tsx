import React from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

interface PromoAlertProps {
  message: string;
  onClose: () => void;
}

const PromoAlert: React.FC<PromoAlertProps> = ({ message, onClose }) => {
  const navigate = useNavigate();

  const handlePromoClick = () => {
    navigate('/lia');
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -100, opacity: 0 }}
        className="fixed top-20 left-0 right-0 z-40 flex justify-center"
      >
        <div className="bg-gradient-to-r from-primary-600 to-primary-700 text-white py-3 px-6 rounded-lg shadow-md flex items-center justify-between w-full max-w-md mx-4 cursor-pointer hover:shadow-lg transition-shadow">
          <p 
            className="flex-1 text-center hover:text-gray-100 transition-colors" 
            onClick={handlePromoClick}
          >
            {message}
          </p>
          <button
            onClick={(e) => {
              e.stopPropagation(); // Prevent triggering the promo click
              onClose();
            }}
            className="ml-4 text-white hover:text-gray-200 transition-colors"
            aria-label="Close promotion alert"
          >
            <X size={18} />
          </button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default PromoAlert;