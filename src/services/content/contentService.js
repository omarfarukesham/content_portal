import {
  CATALOG_SERVICE_BASE_URL,
  CONTENT_SERVICE_BASE_URL,
} from '@/configuration/config';
import { ENDPOINTS } from '@/configuration/endpoints';
import httpService from '../http/httpService';

const config = {
  baseURL: CONTENT_SERVICE_BASE_URL,
};

const config1 = {
  baseURL: CATALOG_SERVICE_BASE_URL,
};

const contentService = {
  getContents: (filters) => {
    return httpService.get(ENDPOINTS.contents, {
      ...config1,
      params: {
        ...filters,
        size: filters ? filters?.perPage : '',
        page: filters ? filters?.page - 1 : '',
      },
    });
  },

  directUploadContent: (data) => {
    return httpService.post(ENDPOINTS.directUploadContent, data, {
      ...config,
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  },
};

export default contentService;
