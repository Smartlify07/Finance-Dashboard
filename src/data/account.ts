import { Account } from '../types/types';
import ProfileImage from '../assets/images/profile.jpg';

export const account: Account = {
  limitedBalance: 300000,
  accountBalance: 4000000,
  accountNumber: 1234567890,
  user: {
    userName: 'John Doe',
    profileImage: ProfileImage,
  },
};
