import { Category } from '../types/types';
import { IconType } from 'react-icons';
import {
  BiHome,
  BiDollarCircle,
  BiCar,
  BiBriefcase,
  BiHealth,
  BiHeart,
  BiGift,
  BiBulb,
  BiLeaf,
} from 'react-icons/bi';
import { BsWallet2 } from 'react-icons/bs';
import { FaPlane } from 'react-icons/fa';
import { PiBookOpenText } from 'react-icons/pi';

interface CategoryIconProps extends Category {
  size?: number;
}

const CategoryIcon = ({ size = 20, category }: CategoryIconProps) => {
  let Icon: IconType;

  switch (true) {
    // Home-related categories
    case category === 'Home Maintenance' ||
      category === 'Home Purchase or Renovation':
      Icon = BiHome;
      break;

    // Financial & Investment-related categories
    case category === 'Emergency Fund' ||
      category === 'Debt Repayment' ||
      category === 'Investment Fund':
      Icon = BiDollarCircle;
      break;

    // Vehicle-related category
    case category === 'Vehicle':
      Icon = BiCar;
      break;

    // Career & Business categories
    case category === 'Business/Startup' ||
      category === 'Self-Improvement' ||
      category === 'Retirement':
      Icon = BiBriefcase;
      break;

    // Health-related categories
    case category === 'Medical Expenses' || category === 'Pet Fund':
      Icon = BiHealth;
      break;

    // Travel-related category
    case category === 'Vacation/Travel':
      Icon = FaPlane;
      break;

    // Family & Personal Life categories
    case category === 'Wedding' || category === 'Childcare & Family Expenses':
      Icon = BiHeart;
      break;

    // Education-related category
    case category === 'Education':
      Icon = PiBookOpenText;
      break;

    // Gift & Celebration-related categories
    case category === 'Gift Fund' || category === 'Big Purchase':
      Icon = BiGift;
      break;

    // Hobbies, Fun, and Entertainment categories
    case category === 'Fun Fund' || category === 'Tech & Gadgets':
      Icon = BiBulb;
      break;

    // Charity-related category
    case category === 'Charity & Giving':
      Icon = BiLeaf;
      break;

    // Default piggy bank for general savings
    default:
      Icon = BsWallet2;
      break;
  }

  return <Icon size={size} />;
};

export default CategoryIcon;
