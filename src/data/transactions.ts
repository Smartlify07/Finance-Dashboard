import { Transaction } from '../types/types';

export const transactions: Transaction[] = [
  {
    user: {
      userName: 'JaneDoe',
      profileImage: 'https://randomuser.me/api/portraits/women/10.jpg',
    },
    beneficiary: {
      beneficiaryName: 'John Smith',
      beneficiaryProfileImage: 'https://randomuser.me/api/portraits/men/10.jpg',
    },
    transactionDetails: {
      transactionAmount: 25075,
      transactionTime: new Date('2024-10-20T09:30:00'),
      transactionType: 'debit',
    },
    currentUserIsBeneficiary: false,
  },
  {
    user: {
      userName: 'JaneDoe',
      profileImage: 'https://randomuser.me/api/portraits/women/10.jpg',
    },
    beneficiary: {
      beneficiaryName: 'Alice Johnson',
      beneficiaryProfileImage:
        'https://randomuser.me/api/portraits/women/11.jpg',
    },
    transactionDetails: {
      transactionAmount: 18000,
      transactionTime: new Date('2024-10-21T13:45:00'),
      transactionType: 'credit',
    },
    currentUserIsBeneficiary: false,
  },
  {
    user: {
      userName: 'JaneDoe',
      profileImage: 'https://randomuser.me/api/portraits/women/10.jpg',
    },
    beneficiary: {
      beneficiaryName: 'Mark Twain',
      beneficiaryProfileImage: 'https://randomuser.me/api/portraits/men/12.jpg',
    },
    transactionDetails: {
      transactionAmount: 30000,
      transactionTime: new Date('2024-10-22T10:15:00'),
      transactionType: 'debit',
    },
    currentUserIsBeneficiary: false,
  },
  {
    user: {
      userName: 'JaneDoe',
      profileImage: 'https://randomuser.me/api/portraits/women/10.jpg',
    },
    beneficiary: {
      beneficiaryName: 'George Brown',
      beneficiaryProfileImage: 'https://randomuser.me/api/portraits/men/13.jpg',
    },
    transactionDetails: {
      transactionAmount: 12075,
      transactionTime: new Date('2024-10-23T15:30:00'),
      transactionType: 'credit',
    },
    currentUserIsBeneficiary: false,
  },
  {
    user: {
      userName: 'JaneDoe',
      profileImage: 'https://randomuser.me/api/portraits/women/10.jpg',
    },
    beneficiary: {
      beneficiaryName: 'Lucy Green',
      beneficiaryProfileImage:
        'https://randomuser.me/api/portraits/women/14.jpg',
    },
    transactionDetails: {
      transactionAmount: 950,
      transactionTime: new Date('2024-10-24T11:45:00'),
      transactionType: 'debit',
    },
    currentUserIsBeneficiary: false,
  },
];
