import Card from '../card';
import { TfiAngleDown } from 'react-icons/tfi';
import {
  PiArrowLineDownLeftLight,
  PiArrowLineUpRightLight,
  PiPlusLight,
} from 'react-icons/pi';

const BalanceViewCard = () => {
  return (
    <Card className="bg-black flex flex-col  gap-[1rem] w-full xl:w-auto">
      <div className="flex items-center justify-between">
        <Card.Title
          title="Total Balance"
          className="text-white font-manrope font-normal lg:text-[2rem] xl:text-[2.4rem] "
        />
        <Card.Button
          value="Monthly"
          className="text-[1.4rem] gap-[0.5rem] font-manrope flex items-center text-white bg-gray-50 py-[0.5rem] px-[1rem] rounded-[1.6rem] "
        >
          <TfiAngleDown className="self-end mt-[0.4rem]" size={15} />
        </Card.Button>
      </div>

      <Card.Body>
        <Card.Title
          title="$14,242,459"
          className="text-white font-light text-[3.6rem] xl:text-[4.2rem] font-manrope"
        />
      </Card.Body>

      <Card.Body className="flex items-center mt-[1rem] justify-between  gap-[1rem]">
        <div className="flex items-center gap-[0.6rem]">
          <Card.Button
            value="Transfer"
            className="flex font-manrope font-normal text-[1.4rem] xl:text-[1.6rem] items-center gap-[0.5rem] bg-blue-primary rounded-[2.4rem] py-[1rem] px-[2rem] justify-center text-white w-[11rem] xl:w-[13rem]"
            reverseOrder={true}
          >
            <PiArrowLineUpRightLight className="shrink-0" size={20} />
          </Card.Button>
          <Card.Button
            value="Transfer"
            className="flex font-manrope font-normal text-[1.4rem] xl:text-[1.6rem] items-center gap-[0.5rem] bg-gray-50 rounded-[2.4rem] py-[1rem] px-[2rem] justify-center text-white w-[11rem] xl:w-[13rem]"
            reverseOrder={true}
          >
            <PiArrowLineDownLeftLight
              className="rotate-[0deg] shrink-0"
              size={20}
            />
          </Card.Button>
        </div>
        <Card.Button
          className="flex shrink-0 font-manrope font-normal xl:text-[1.6rem] items-center gap-[0.5rem] bg-gray-50 rounded-full h-[4rem] w-[4rem]  xl:w-[5rem] xl:h-[5rem] justify-center text-white"
          reverseOrder={true}
        >
          <PiPlusLight size={20} />
        </Card.Button>
      </Card.Body>
    </Card>
  );
};

export default BalanceViewCard;
