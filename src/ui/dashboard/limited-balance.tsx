import { Account } from '../../types/types';
import Card from '../card';
import ProgressBar from '../progress-bar';
import Indicator from './indicator';

const LimitedBalance = ({ limitedBalance }: Account) => {
  return (
    <Card className="bg-white flex flex-col gap-[1.4rem]">
      <Card.Title
        title="Limited Balance"
        className="text-[2rem] xl:text-[2.4rem] font-normal tracking-tight text-black-text"
      />

      <Card.Body>
        <div className="flex items-center justify-between">
          <Card.Title
            title={`$${limitedBalance?.toLocaleString()}`}
            className="text-[2.8rem] font-manrope font-normal text-black-text"
          />
          <Indicator value={10} type="increment" />
        </div>
        <ProgressBar
          containerStyle={{ height: '40px', marginTop: '10px' }}
          progressStyle={{
            borderRadius: '1rem',
            padding: '0px 10px',
            color: 'white',
            zIndex: 10000,
          }}
          width={'100%'}
          progressBarWidth={70}
          progressBackgroundColor="var(--blue-primary)"
          progressNumber={70}
        />
      </Card.Body>
    </Card>
  );
};

export default LimitedBalance;
