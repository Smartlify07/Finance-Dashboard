import { TfiAngleDown } from 'react-icons/tfi';
import Card from '../card';
import ExpenseCategoryPie from './expense-category-pie';
import ExpenseCategoryIndicator from './expense-category-indicator';

const ExpenseCategory = () => {
  return (
    <Card className="bg-white col-span-5 w-full md:w-auto flex flex-col gap-[1.4rem]">
      <div className="flex items-center w-full justify-between">
        <Card.Title
          title="Expense Category"
          className="text-[2.4rem] font-normal tracking-tight text-black-text"
        />
        <Card.Button
          value="Monthly"
          className="text-[1.4rem] gap-[0.5rem] font-manrope flex items-center text-white bg-gray-50 py-[0.5rem] px-[1rem] rounded-[1.6rem] "
        >
          <TfiAngleDown className="self-end mt-[0.4rem]" size={15} />
        </Card.Button>
      </div>

      <Card.Body className=" flex flex-col gap-[1rem] justify-center">
        <ExpenseCategoryPie />

        <div className="flex justify-center  items-center gap-[1.2rem]">
          <ExpenseCategoryIndicator type="income" indicatorName="Income" />
          <ExpenseCategoryIndicator type="outcome" indicatorName="Outcome" />
          <ExpenseCategoryIndicator
            type="freeBudget"
            indicatorName="Free Budget"
          />
        </div>
      </Card.Body>
    </Card>
  );
};

export default ExpenseCategory;
