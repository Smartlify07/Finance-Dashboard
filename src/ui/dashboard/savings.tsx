import { TfiAngleDown } from 'react-icons/tfi';
import Card from '../card';
import SavingsItem from './savings-item';
import { savings } from '../../data/savings';

const Savings = () => {
  return (
    <Card className="font-manrope  lg:basis-[50%] xl:basis-[40%] bg-white">
      <div className="flex items-center mb-[2rem] w-full justify-between">
        <Card.Title
          title="Savings"
          className="text-[2.4rem] font-normal tracking-tight text-black-text"
        />
        <Card.Button
          value="Monthly"
          className="text-[1.4rem] gap-[0.5rem] font-manrope flex items-center text-white bg-gray-50 py-[0.5rem] px-[1rem] rounded-[1.6rem] "
        >
          <TfiAngleDown className="self-end mt-[0.4rem]" size={15} />
        </Card.Button>
      </div>
      <Card.Body className="flex flex-col gap-[2.4rem]">
        {savings.map((saving, index) => (
          <SavingsItem
            key={saving.id}
            {...saving}
            backgroundColor={`${
              index % 2 === 0 ? `rgba(0,62,255,0.3)` : `rgba(48,197,43,0.3)`
            }`}
            textColor={`${
              index % 2 === 0 ? `rgba(0,62,255)` : `rgba(48,197,43)`
            }`}
          />
        ))}
      </Card.Body>
    </Card>
  );
};

export default Savings;
