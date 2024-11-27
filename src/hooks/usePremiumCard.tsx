import { useContext } from 'react';
import { PremiumCardContext } from '../context/PremiumCardContext';

export const usePremiumCard = () => {
  const context = useContext(PremiumCardContext);
  if (!context) {
    throw new Error(
      "You cannot use the premium card hook outside of it's provider"
    );
  }
  return context;
};
