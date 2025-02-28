import {BASE_URL} from '@store/config';
import axios from 'axios';

export const fetchCategories = async () => {
  try {
    console.log('Fetching categories...');

    const response = await axios.get(`${BASE_URL}/category`);

    if (response.status !== 200) {
      throw new Error(`Failed to fetch categories: ${response.statusText}`);
    }

    console.log('Categories fetched:', response.data?.categories);

    return response.data?.categories || []; 
  } catch (error: any) {
    console.error('Error fetching categories:', error?.message || error);

    return null; 
  }
};
