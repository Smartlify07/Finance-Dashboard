import PremiumBannerCard from '../premium-banner-card';
import CashflowAnalytics from './cashflow-analytics';
import ExpenseCategory from './expense-category';
import IncomeAnalysis from './income-analysis';
import Savings from './savings';
import TransactionsSummary from './transactions-summary';

const OverviewMain = () => {
  return (
    <>
      <section className="flex flex-col  w-full  md:grid  justify-items-stretch  lg:grid-cols-12  xxl:grid-cols-11 gap-[2.4rem] xl:gap-[2rem] ">
        <TransactionsSummary />
        <div className="flex flex-col lg:col-span-8 xl:col-span-8 xxl:col-span-8 gap-[2.4rem]">
          <div className=" gap-[2rem] lg:h-[32rem] flex flex-col md:flex-row lg:flex-row items-stretch">
            <IncomeAnalysis />
            <Savings />
          </div>
          <div className="col-span-8  flex  flex-col md:flex-row lg:items-start items-start gap-[2rem] border-black">
            <ExpenseCategory />
            <div className="flex flex-col gap-[2rem]  lg:flex-col lg:gap-[1.4rem] w-full  lg:col-span-5  xl:gap-[2rem] xl:flex-row">
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
