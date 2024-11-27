import { Transaction } from '../../types/types';
import { formatDate } from '../../utils/formatDate';
import Avatar from '../avatar';

const RecentActivityItem = ({
  beneficiary,
  id,
  transactionDetails,
}: Transaction) => {
  const date = formatDate(transactionDetails?.transactionTime);
  return (
    <div key={id} className="flex items-center font-manrope justify-between">
      <div className="flex items-center gap-[1rem]">
        <Avatar
          width="40px"
          height="40px"
          image={
            beneficiary?.beneficiaryProfileImage
              ? beneficiary.beneficiaryProfileImage
              : ''
          }
          altText={
            beneficiary?.beneficiaryName
              ? beneficiary.beneficiaryName
              : 'profile'
          }
        />
        <div className="flex flex-col gap-[0.1rem]">
          <h1 className="text-[1.8rem] text-black-text font-medium">
            {beneficiary?.beneficiaryName}
          </h1>
          <p className="text-gray-50 text-[1.2rem]">{date}</p>
        </div>
      </div>

      <h1 className="text-black-text tracking-tighter text-[2.2rem] font-normal">
        {transactionDetails.transactionType === 'credit' ? '+' : '-'}$
        {transactionDetails.transactionAmount.toLocaleString()}
      </h1>
    </div>
  );
};

export default RecentActivityItem;
