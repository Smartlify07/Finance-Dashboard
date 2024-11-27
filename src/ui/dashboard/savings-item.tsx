import CategoryIcon from '../category-icon';
import Card from '../card';
import { Savings } from '../../types/types';
import ProgressBar from '../progress-bar';

interface SavingsItemProps extends Savings {
  backgroundColor: string;
  textColor: string;
}

const SavingsItem = ({
  category,
  title,
  targetAmount,
  totalAmountSaved,
  backgroundColor,
  textColor,
}: SavingsItemProps) => {
  const percentageSaved = Math.floor((totalAmountSaved / targetAmount) * 100);
  return (
    <div className="flex flex-col gap-[1.5rem]">
      <div className="flex items-start w-full justify-between">
        <div className="flex items-center gap-[1rem]">
          <div
            style={{ backgroundColor: backgroundColor, color: textColor }}
            className={`rounded-[0.5rem] w-[4rem]  flex items-center justify-center h-[4rem]  bg-opacity-30`}
          >
            <CategoryIcon category={category} size={20} />
          </div>
          <div className="flex flex-col">
            <Card.Title
              title={title}
              className="text-black-text leading-tight tracking-tight text-[1.8rem] font-normal"
            />
            <Card.Text
              className="text-gray-50 font-semibold text-[1.1rem]"
              text={`Target: ${targetAmount.toLocaleString()}`}
            />
          </div>
        </div>

        <Card.Text
          className="text-black-text  font-manrope font-normal text-[1.8rem]"
          text={`$${totalAmountSaved.toLocaleString()}`}
        />
      </div>

      <ProgressBar
        progressStyle={{
          padding: '9px 4px 9px 10px',
          borderRadius: '10px',
          color: 'white',
        }}
        progressBackgroundColor={textColor}
        progressBarWidth={percentageSaved}
        progressNumber={percentageSaved}
      />
    </div>
  );
};

export default SavingsItem;
