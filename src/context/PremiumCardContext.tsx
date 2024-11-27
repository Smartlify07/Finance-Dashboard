import { createContext, ReactNode, useState } from 'react';

interface PremiumCardState {
  isPremiumCardVisible?: boolean;
  handleShowPremiumCard?: () => void;
  handleHidePremiumCard?: () => void;
}
export const PremiumCardContext = createContext<PremiumCardState>({});

const PremiumCardProvider = ({ children }: { children: ReactNode }) => {
  const [isPremiumCardVisible, setIsPremiumCardVisible] = useState(true);
  const handleHidePremiumCard = () => {
    setIsPremiumCardVisible(false);
  };
  const handleShowPremiumCard = () => {
    setIsPremiumCardVisible(false);
  };
  return (
    <PremiumCardContext.Provider
      value={{
        handleHidePremiumCard,
        isPremiumCardVisible,
        handleShowPremiumCard,
      }}
    >
      {children}
    </PremiumCardContext.Provider>
  );
};

export default PremiumCardProvider;
