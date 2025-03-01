import {BASE_URL} from '@store/config';
import axios from 'axios';

export const loginOrSignUp = async (phone: string, address: string) => {
  try {
    const res = axios.post(`${BASE_URL}/user/login`, {
      phone,
      address,
    });
    return (await res).data.user;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const getOrderByUserId = async (userId: string) => {
  try {
    const res = axios.get(`${BASE_URL}/order/${userId}`);
    return (await res).data.order;
  } catch (error) {
    console.log(error);
    return [];
  }
};
