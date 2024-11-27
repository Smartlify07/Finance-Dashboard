import moment from 'moment';

export const formatDate = (date: Date) => {
  const formattedDate = moment(date).calendar();
  return formattedDate;
};
