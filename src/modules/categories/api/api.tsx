import {BASE_URL} from '@store/config';
import axios from 'axios';

export const fetchCategories = async () => {
  const response = await axios.get(`${BASE_URL}/categories`);
  return response.data?.categories;
};
