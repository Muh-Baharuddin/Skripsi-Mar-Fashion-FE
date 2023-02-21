import axios from 'axios';
import { ParamsType } from './types';

export const get = async <T>(url: string, params: ParamsType): Promise<{
  data: T,
  statusCode: number,
}> => {
  const response = await axios.get(url, {
    params,
  });

  return {
    data: response.data,
    statusCode: response.status,
  };
}