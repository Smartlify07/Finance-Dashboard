import { useRef } from 'react';
import { LuArrowDownUp } from 'react-icons/lu';
import { TfiAngleDown } from 'react-icons/tfi';
import { usePremiumCard } from '../../hooks/usePremiumCard';

const CurrencyConverter = () => {
  return (
    <div className="flex flex-col gap-[2.5rem]">
      <div className="flex gap-[0.1rem]  flex-col">
        <div className="relative">
          <CurrencyToConvertFrom />
          <SwitchButton />
        </div>
        <CurrencyToConvertTo />
      </div>

      <div className="flex flex-col w-full  gap-[2rem]">
        <hr className="border border-[#ccc]" />

        <div className="flex flex-col gap-[0.24rem]">
          <div className="flex items-center self-center">
            <h2 className="text-black font-normal font-manrope text-[1.8rem] whitespace-nowrap">
              1,000 USD =
            </h2>
            <h2 className="text-blue-primary font-normal font-manrope text-[1.8rem] whitespace-nowrap">
              1,000 <span className="text-black">USD</span>
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

const SwitchButton = () => {
  const { isPremiumCardVisible } = usePremiumCard();
  return (
    <button
      className={`bg-blue-primary absolute rounded-full w-[4.5rem] h-[4.5rem] z-[100] flex items-center justify-center  ${
        isPremiumCardVisible
          ? 'right-[45%] xl:right-[8rem] xxl:right-[45%]'
          : 'right-[45%]'
      } top-[6rem] gap-[0.1rem]`}
    >
      <LuArrowDownUp className="text-white" size={30} />
    </button>
  );
};

const CurrencyToConvertFrom = () => {
  const inputRef = useRef(null);

  return (
    <div className="flex flex-col items-start w-full  gap-[0.1rem]">
      <label className="text-[#484848] lg:text-[1.4rem] xl:text-[1.4rem]">
        Amount
      </label>
      <div className="relative flex w-full">
        <input
          type="text"
          ref={inputRef}
          className=" rounded-[4rem] pl-[2rem]  bg-blue-gray text-[1.4rem]  text-black h-[4.8rem] w-full focus:border-none focus:outline-none"
        />

        <div className="flex items-center top-[1.4rem]  right-[0.4rem] absolute gap-[0.4rem]">
          <div className="rounded-full w-[2rem] h-[2rem] border border-black"></div>
          <h2 className="font-normal text-[#6A6B6D] text-[1.4rem] font-manrope">
            USD
          </h2>
          <TfiAngleDown className="text-[#6A6B6D]" size={14} />
        </div>
      </div>
    </div>
  );
};

const CurrencyToConvertTo = () => {
  const inputRef = useRef(null);

  return (
    <div className="flex flex-col items-start w-full  gap-[0.1rem]">
      <label className="text-[#484848] lg:text-[1.4rem] xl:text-[1.4rem]">
        To
      </label>
      <div className="relative flex w-full">
        <input
          type="text"
          ref={inputRef}
          className=" rounded-[4rem] pl-[2rem]  bg-blue-gray text-[1.4rem]  text-black h-[4.8rem] w-full focus:border-none focus:outline-none"
        />

        <div className="flex items-center top-[1.4rem]  right-[0.4rem] absolute gap-[0.4rem]">
          <div className="rounded-full w-[2rem] h-[2rem] border border-black"></div>
          <h2 className="font-normal text-[#6A6B6D] text-[1.4rem] font-manrope">
            USD
          </h2>
          <TfiAngleDown className="text-[#6A6B6D]" size={14} />
        </div>
      </div>
    </div>
  );
};

export default CurrencyConverter;
