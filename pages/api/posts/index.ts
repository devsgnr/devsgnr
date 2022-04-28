import { IBlogProps } from '../../../types/blog';
import { IPostResponse, IPostsResponse } from '../../../types/response';
import GraphCMSCLient from '../service';
import { Post, Posts } from './queries';

const FetchPostsService = async (params?: {}) => {
  const variable = params;
  const response: IPostsResponse<IBlogProps[]> = await GraphCMSCLient.request(
    Posts,
    variable,
  );
  return response;
};

const FetchPostService = async (params?: {}) => {
  const variable = params;
  const response: IPostResponse<IBlogProps> = await GraphCMSCLient.request(
    Post,
    variable,
  );
  return response;
};

export { FetchPostsService, FetchPostService };
