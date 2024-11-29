import { useEffect, useState } from 'react';
import { LuArrowDownUp } from 'react-icons/lu';
import { TfiAngleDown } from 'react-icons/tfi';
import { usePremiumCard } from '../../hooks/usePremiumCard';
import { fetchExchangeRate } from '../../utils/fetchData';

const CurrencyConverter = () => {
  const [exchangeRate, setExchangeRate] = useState(0);
  const [currencies, setCurrencies] = useState({
    base: 'USD',
    target: 'NGN',
  });
  const handleSwitch = () => {
    setCurrencies((prevState) => ({
      ...prevState,
      target: currencies.base,
      base: currencies.target,
    }));
  };

  const [baseCurrencyInput, setBaseCurrencyInput] = useState(0);

  useEffect(() => {
    (async () => {
      const rate = await fetchExchangeRate(currencies.base, currencies.target);
      setExchangeRate(rate);
    })();
  }, [currencies.base, currencies.target]);

  return (
    <div className="flex flex-col gap-[2.5rem]">
      <div className="flex gap-[0.1rem]  flex-col">
        <div className="relative">
          <BaseCurrency
            baseCurrency={currencies.base}
            setCurrencyFromInput={setBaseCurrencyInput}
          />
          <SwitchButton handleSwitch={handleSwitch} />
        </div>
        <TargetCurrency
          baseCurrencyInput={baseCurrencyInput}
          targetCurrency={currencies.target}
          exchangeRate={exchangeRate}
        />
      </div>

      <div className="flex flex-col w-full  gap-[2rem]">
        <hr className="border border-[#ccc]" />

        <div className="flex flex-col gap-[0.24rem]">
          <div className="flex items-center self-center">
            <h2 className="text-black font-normal font-manrope text-[1.4rem] lg:text-[1.6rem] whitespace-nowrap">
              {baseCurrencyInput}
              {currencies.base} ={' '}
            </h2>
            <h2 className="text-blue-primary font-normal font-manrope text-[1.4rem] lg:text-[1.6rem] whitespace-nowrap">
              {(baseCurrencyInput * exchangeRate).toLocaleString(undefined, {
                maximumFractionDigits: 2,
                minimumFractionDigits: 0,
              })}{' '}
              <span className="text-black">{currencies.target}</span>
            </h2>
          </div>

          <p className="text-[1rem] text-gray-50 self-center text-center font-manrope font-normal">
            Central Market Exchange Rate at 13:30
          </p>
        </div>
      </div>
    </div>
  );
};

interface SwitchButtonProps {
  handleSwitch: () => void;
}
const SwitchButton = ({ handleSwitch }: SwitchButtonProps) => {
  const { isPremiumCardVisible } = usePremiumCard();
  return (
    <button
      onClick={handleSwitch}
      className={`bg-blue-primary absolute rounded-full w-[4.2rem] h-[4.2rem] z-[100] flex items-center justify-center  ${
        isPremiumCardVisible
          ? 'right-[45%] xl:right-[6.5rem] xxl:right-[45%]'
          : 'right-[45%]'
      } top-[6rem] gap-[0.1rem]`}
    >
      <LuArrowDownUp className="text-white" size={30} />
    </button>
  );
};

interface BaseCurrencyProps {
  setCurrencyFromInput: React.Dispatch<React.SetStateAction<number>>;
  baseCurrency: string;
}
const BaseCurrency = ({
  setCurrencyFromInput,
  baseCurrency,
}: BaseCurrencyProps) => {
  return (
    <div className="flex flex-col items-start w-full  gap-[0.1rem]">
      <label className="text-[#484848] text-[1.4rem]">Amount</label>
      <div className="relative flex w-full">
        <input
          type="text"
          onChange={(e) => {
            setCurrencyFromInput(Number(e.target.value));
          }}
          className=" rounded-[4rem] pl-[2rem]  bg-blue-gray text-[1.4rem]  text-black h-[4.8rem] w-full focus:border-none focus:outline-none"
        />

        <div className="flex items-center top-[1.4rem]  right-[0.4rem] absolute gap-[0.4rem]">
          <div className="rounded-full w-[2rem] h-[2rem] border border-black"></div>
          <h2 className="font-normal text-[#6A6B6D] text-[1.4rem] font-manrope">
            {baseCurrency}
          </h2>
          <TfiAngleDown className="text-[#6A6B6D]" size={14} />
        </div>
      </div>
    </div>
  );
};

interface TargetCurrencyProps {
  exchangeRate: number;
  targetCurrency: string;
  baseCurrencyInput: number;
}
const TargetCurrency = ({
  exchangeRate,
  targetCurrency,
  baseCurrencyInput,
}: TargetCurrencyProps) => {
  return (
    <div className="flex flex-col items-start w-full  gap-[0.1rem]">
      <label className="text-[#484848] text-[1.4rem]">Amount To</label>
      <div className="relative flex w-full">
        <input
          value={(baseCurrencyInput * exchangeRate).toLocaleString(undefined, {
            maximumFractionDigits: 0,
            minimumFractionDigits: 0,
          })}
          disabled
          className=" rounded-[4rem] pl-[2rem]  bg-blue-gray text-[1.4rem]  text-black h-[4.8rem] w-full focus:border-none focus:outline-none"
        />

        <div className="flex items-center top-[1.4rem]  right-[0.4rem] absolute gap-[0.4rem]">
          <div className="rounded-full w-[2rem] h-[2rem] border border-black"></div>
          <h2 className="font-normal text-[#6A6B6D] text-[1.4rem] font-manrope">
            {targetCurrency}
          </h2>
          <TfiAngleDown className="text-[#6A6B6D]" size={14} />
        </div>
      </div>
    </div>
  );
};

export default CurrencyConverter;
