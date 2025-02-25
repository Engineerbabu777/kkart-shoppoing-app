import {GET_HOME_SCREEN} from './constants';

export const getHomeContent = (page: number) => {
  return {
    type: GET_HOME_SCREEN,
    payload: {
      page,
    },
  };
};
