import { useQuery, UseQueryResult } from '@tanstack/react-query';

import { getMyProfile } from '@/apis/user';
import { UserInfoDto } from '@/types/dtos/user';

export const useGetMyProfile = (): UseQueryResult<UserInfoDto, unknown> => {
  return useQuery<UserInfoDto, unknown>({
    queryKey: [getMyProfile.name],
    queryFn: async () => {
      return getMyProfile.fn();
    },
  });
};
