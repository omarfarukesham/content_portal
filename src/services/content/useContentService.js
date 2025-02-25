import { ENDPOINTS } from '@/configuration/endpoints';
import Content from '@/model/Content';
import PaginatedResponse from '@/model/PaginatedResponse';
import { useMutation, useQuery } from '@tanstack/react-query';
import contentService from './contentService';

export const useContents = (filters) => {
  return useQuery({
    queryKey: [ENDPOINTS.contents, JSON.stringify(filters)],
    queryFn: contentService.getContents,
    select: (response) => new PaginatedResponse(response.data.data, Content),
  });
};

export const useDirectUploadContent = () => {
  return useMutation({
    mutationKey: [ENDPOINTS.directUploadContent],
    mutationFn: contentService.directUploadContent,
  });
};
