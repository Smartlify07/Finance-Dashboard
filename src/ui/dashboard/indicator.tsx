import clsx from 'clsx';
import { BsArrowDown, BsArrowUp } from 'react-icons/bs';

interface IndicatorProps {
  type: 'increment' | 'decrement';
  value: number;
}
const Indicator = ({ type, value }: IndicatorProps) => {
  return (
    <span
      className={clsx(
        'flex items-center rounded-[2rem] text-[1.2rem] py-[0.3rem] px-[0.6rem] font-manrope font-semibold justify-center gap-[0.2rem]',
        {
          'bg-green bg-opacity-30 text-green': type === 'increment',
          'bg-red-500 bg-opacity-40 text-red-500': type === 'decrement',
        }
      )}
    >
      {type === 'increment' ? (
        <BsArrowUp className="text-green" />
      ) : (
        <BsArrowDown />
      )}{' '}
      {type === 'increment' ? '+' : '-'}
      {value}%
    </span>
  );
};

export default Indicator;
