export interface Transaction {
  user?: User;
  id?: string | number;
  beneficiary: {
    beneficiaryName: string;
    beneficiaryProfileImage?: string;
  };
  transactionDetails: {
    transactionAmount: number;
    transactionTime: Date;
    transactionType: 'debit' | 'credit';
  };
  currentUserIsBeneficiary?: boolean;
}

export interface User {
  userName: string;
  profileImage: string;
}

export interface Account {
  limitedBalance?: number;
  accountBalance?: number;
  accountNumber?: number;
  user?: User;
}

export interface Category {
  category:
    | 'Emergency Fund'
    | 'Retirement'
    | 'Home Purchase or Renovation'
    | 'Education'
    | 'Vacation/Travel'
    | 'Vehicle'
    | 'Wedding'
    | 'Childcare & Family Expenses'
    | 'Medical Expenses'
    | 'Debt Repayment'
    | 'Pet Fund'
    | 'Investment Fund'
    | 'Home Maintenance'
    | 'Gift Fund'
    | 'Big Purchase'
    | 'Tech & Gadgets'
    | 'Fun Fund'
    | 'Self-Improvement'
    | 'Business/Startup'
    | 'Charity & Giving';
}

export interface Savings {
  id: number | string;
  title: string;
  totalAmountSaved: number;
  targetAmount: number;
  category: Category['category'];
}

export interface ExpenseCategory {
  income: number;
  outcome: number;
  freeBudget: number;
}

export interface CurrencyConverterResponse {
  data: {
    [currencyName: string]: { code: string; value: number };
  };
}
