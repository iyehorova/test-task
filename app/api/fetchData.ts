import axios from 'axios';
import { BASE_URL } from '../constants';

export async function fetchData(url: string) {
  try {
    const response = await axios.get(`${BASE_URL}url`);
    return response.data;
  } catch {
    const data = await import(`../data${url}`);
    return data.default;
  }
}
