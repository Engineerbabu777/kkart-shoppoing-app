import {navigate} from '@navigation/NavigationUtil';
import {BASE_URL} from '@store/config';
import axios from 'axios';

export const createTransaction = async (
  amount: number | string,
  userId: string,
) => {
  try {
    const res = await axios.post(`${BASE_URL}/order/transactions`, {
      userId,
      amount: Number(amount) * 100,
    });
    return res.data;
  } catch (error) {
    return null;
  }
};

export const createOrder = async (
  key: string,
  amount: number,
  order_id: string,
  cart: any,
  userId: string,
  address: string,
) => {
  try {
    let options = {
      description: '',
      image: '',
      currency: '',
      key: key,
      amount: amount,
      name: 'Kart',
      order_id: order_id,
      theme: {
        color: '#4ecc',
      },
    };

    // RazorParCheckout.open(options).then(async(data)=> {
    //     /// after doing!
    /*
       const today = new Date();
       const sevenDaysFromNow = new Date();
       sevenDaysFromNow.setDate(sevenDaysFromNow.getDate()

       const res = await axios.post(``,{
       
       })
    */
    // })

    navigate('PaymentSuccess', {price: amount / 100, address: address});
  } catch (error) {
    console.log('Error creating order', error);
    return {type: 'error', message: 'Error'};
  }
};
