import { BiX } from 'react-icons/bi';
import Card from './card';
import { FaArrowRightLong } from 'react-icons/fa6';
import { LuKeyRound } from 'react-icons/lu';
import { usePremiumCard } from '../hooks/usePremiumCard';

const PremiumBannerCard = () => {
  const { handleHidePremiumCard, isPremiumCardVisible } = usePremiumCard();
  return isPremiumCardVisible ? (
    <Card className="bg-black premium-card-background  font-manrope justify-between  flex flex-col">
      <div className="flex flex-col gap-[1rem]">
        <div className="flex items-center w-full justify-between">
          <div className="rounded-[2rem] flex items-center justify-center w-[4rem] h-[4rem] bg-white">
            <LuKeyRound className="text-black" size={24} />
          </div>

          <Card.Button
            onClick={handleHidePremiumCard}
            className="flex items-center justify-center text-white bg-black-100 w-[3rem] h-[3rem] rounded-[0.6rem]"
          >
            <BiX size={24} />
          </Card.Button>
        </div>
        <div className="flex flex-col gap-[0.8rem]">
          <Card.Title
            className="text-[2.8rem]   font-manrope leading-[2.8rem] font-light text-white capitalize"
            title="Unlocking a World of Exclusive benefits"
          />
          <Card.Title
            className="text-[2rem] font-light leading-[2.3rem] text-white text-opacity-70 captialize"
            title="Discount for new members"
          />
        </div>
      </div>
      <Card.Button
        className="bg-white flex items-center font-light  text-[1.6rem] py-[1.2rem] px-[1rem] text-black-100 rounded-[2.4rem] gap-[1.6rem] self-start "
        value="Upgrade Now"
      >
        <FaArrowRightLong className="text-black " size={20} />
      </Card.Button>
    </Card>
  ) : null;
};

export default PremiumBannerCard;
