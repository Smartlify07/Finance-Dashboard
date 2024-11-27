import PremiumBannerCard from '../premium-banner-card';
import CashflowAnalytics from './cashflow-analytics';
import ExpenseCategory from './expense-category';
import IncomeAnalysis from './income-analysis';
import Savings from './savings';
import TransactionsSummary from './transactions-summary';

const OverviewMain = () => {
  return (
    <>
      <section className="grid grid-cols-12 xxl:grid-cols-11 gap-[2.4rem] xl:gap-[2rem] ">
        <TransactionsSummary />
        <div className="flex flex-col lg:col-span-8 xl:col-span-8 xxl:col-span-8 gap-[2.4rem]">
          <div className=" gap-[1rem] h-[32rem] flex items-stretch">
            <IncomeAnalysis />
            <Savings />
          </div>
          <div className="col-span-8  flex lg:items-start items-start gap-[2rem] border-black">
            <ExpenseCategory />
            <div className="flex lg:flex-col lg:gap-[1.4rem] w-full  col-span-5 border border-black xl:gap-[2rem] xl:flex-row">
              <CashflowAnalytics />
              <PremiumBannerCard />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OverviewMain;
