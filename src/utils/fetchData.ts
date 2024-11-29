import { CurrencyConverterResponse } from '../types/types';
import { API_KEY, API_URL } from './constants';

export const fetchExchangeRate = async (
  baseCurrency: string,
  currency: string
): Promise<number> => {
  const response = await fetch(
    `${API_URL}?apikey=${API_KEY}&currencies=${currency}&base_currency=${baseCurrency}`
  );
  const data: CurrencyConverterResponse = await response.json();
  return data.data[`${currency}`].value;
};
