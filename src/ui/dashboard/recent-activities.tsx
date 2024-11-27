import { TfiAngleDown } from 'react-icons/tfi';
import Card from '../card';
import { transactions } from '../../data/transactions';
import RecentActivityItem from './recent-activity-item';

const RecentActivities = () => {
  return (
    <Card className="bg-white flex flex-col gap-[2rem]">
      <div className="flex items-center justify-between">
        <Card.Title
          title="Recent Activity"
          className="lg:text-[2rem] xl:text-[2.4rem] font-normal tracking-tight text-black-text"
        />
        <Card.Button
          value="Monthly"
          className="text-[1.4rem] gap-[0.5rem] font-manrope flex items-center text-white bg-gray-50 py-[0.5rem] px-[1rem] rounded-[1.6rem] "
        >
          <TfiAngleDown className="self-end mt-[0.4rem]" size={15} />
        </Card.Button>
      </div>

      <Card.Body>
        <ul className="flex flex-col gap-[1.6rem]">
          {transactions.slice(0, 3).map((transaction) => (
            <RecentActivityItem {...transaction} />
          ))}
        </ul>
      </Card.Body>
    </Card>
  );
};

export default RecentActivities;
