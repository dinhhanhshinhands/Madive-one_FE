import { getAxiosInstance, getResponseData } from '@/configs/axios';
import { LoginDto } from '@/types/dtos/auth';
import { LoginEntity } from '@/types/entities/auth';

import { AUTHENTICATION } from '@/constants/endpoints';

export const loginMutation = {
  name: 'login',
  fn: async (data: LoginEntity): Promise<LoginDto> => {
    const responseData = getResponseData<LoginDto>(await getAxiosInstance().post(AUTHENTICATION.login, { ...data }));

    return responseData;
  },
};
