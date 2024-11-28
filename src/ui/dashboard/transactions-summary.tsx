import { account } from '../../data/account';
import BalanceViewCard from './balance-view-card';
import LimitedBalance from './limited-balance';
import RecentActivities from './recent-activities';

const TransactionsSummary = () => {
  const accountDetails = { ...account };
  return (
    <aside className="col-span-1 lg:col-span-4  xxl:col-span-3 lg:w-auto xl:w-auto  gap-[2rem] lg:gap-[1.4rem] flex flex-col">
      <BalanceViewCard />
      <RecentActivities />
      <LimitedBalance limitedBalance={accountDetails.limitedBalance} />
    </aside>
  );
};

export default TransactionsSummary;
