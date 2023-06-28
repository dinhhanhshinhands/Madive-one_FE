import { useMutation, UseMutationResult } from '@tanstack/react-query';

import { loginMutation } from '@/apis/auth';
import { LoginDto } from '@/types/dtos/auth';
import { LoginEntity } from '@/types/entities/auth';

export const useLogin = (): UseMutationResult<LoginDto, unknown, LoginEntity, unknown> => {
  return useMutation<LoginDto, unknown, LoginEntity>({
    mutationFn: async (data: LoginEntity) => {
      const res = await loginMutation.fn(data);

      return res;
    },
  });
};
