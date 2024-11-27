import { TfiAngleDown } from 'react-icons/tfi';
import Card from '../card';
import CustomBarChart from '../charts';
import { incomeAnalysis } from '../../data/income-analysis';
import Indicator from './indicator';

const IncomeAnalysis = () => {
  const totalIncome = incomeAnalysis.reduce(
    (total, acc) => total + acc.value,
    0
  );
  console.log(totalIncome);
  return (
    <Card className="font-manrope basis-[50%] xl:basis-[60%] bg-white">
      <div className="flex items-center w-full justify-between">
        <Card.Title
          title="Income Analysis"
          className="text-[2.4rem] font-normal tracking-tight text-black-text"
        />{' '}
        <Card.Button
          value="Monthly"
          className="text-[1.4rem] gap-[0.5rem] font-manrope flex items-center text-white bg-gray-50 py-[0.5rem] px-[1rem] rounded-[1.6rem] "
        >
          <TfiAngleDown className="self-end mt-[0.4rem]" size={15} />
        </Card.Button>
      </div>
      <Card.Body className="flex flex-col gap-[1rem]">
        <div className="flex items-center gap-[1rem]">
          <Card.Title
            title={`$${totalIncome.toLocaleString()}`}
            className="text-black-text text-[3.2rem] font-manrope font-medium"
          />

          <Indicator type="increment" value={10} />
        </div>
        <CustomBarChart />
      </Card.Body>
    </Card>
  );
};

export default IncomeAnalysis;
