import { LuCalendarDays } from 'react-icons/lu';
import Button from '../button';
import { CiExport } from 'react-icons/ci';

const OverviewTop = () => {
  return (
    <section className="flex font-intertight items-center justify-between  self-stretch w-full  lg:self-stretch">
      <div className="flex flex-col gap-[1rem]">
        <header>
          <h1 className="text-[2.4rem] lg:text-[4.8rem] font-medium font-manrope text-black-text">
            Welcome Michael!
          </h1>
        </header>{' '}
      </div>
      <div className="hidden lg:flex items-center gap-[1rem]">
        <Button
          reverseOrder
          value="Export"
          className="flex text-[1.5rem] bg-blue-primary py-[1.4rem] text-white rounded-[3rem] justify-center gap-[0.6rem] font-normal w-[12rem] text-center font-manrope items-center"
        >
          <CiExport size={20} />
        </Button>
        <Button
          reverseOrder
          value="Dec 9, 2024"
          className="flex text-[1.5rem] bg-white py-[1.4rem] text-black-text rounded-[3rem] justify-center gap-[0.6rem]  w-[15rem] text-center font-manrope font-medium items-center"
        >
          <LuCalendarDays size={20} />
        </Button>
      </div>
    </section>
  );
};

export default OverviewTop;
