import Card from '../card';
import CurrencyConverter from './currency-converter';

const CashflowAnalytics = () => {
  return (
    <Card
      className={`bg-white transition-all w-full
      } flex flex-col px-[1rem] gap-[1.4rem]`}
    >
      <Card.Title
        title="Cashflow Analytic"
        className="text-[2rem] font-normal tracking-tight text-black-text whitespace-nowrap"
      />
      <CurrencyConverter />
    </Card>
  );
};

export default CashflowAnalytics;
