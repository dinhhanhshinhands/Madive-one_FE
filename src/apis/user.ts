import { getAxiosInstance, getResponseData } from '@/configs/axios';
import { UserInfoDto } from '@/types/dtos/user';

import { USER } from '@/constants/endpoints';

export const getMyProfile = {
  name: 'getMyProfile',
  fn: async (): Promise<UserInfoDto> => {
    const responseData = getResponseData<UserInfoDto>(await getAxiosInstance().get(USER.myProfile));
    return responseData;
  },
};
