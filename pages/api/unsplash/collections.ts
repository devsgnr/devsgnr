import { AxiosResponse } from 'axios';
import { CollectionMeta } from '../../../types/unsplash';
import { UnsplashAPI } from '../service';

export const MyUnsplashCollectionsService = async (id: string) => {
  const res: AxiosResponse<CollectionMeta> = await UnsplashAPI.get(
    `/collections/${id}`,
  );
  return res;
};

export const MyUnsplashCollectionsPhotosService = async (
  id: string,
  page: number,
) => {
  const res: AxiosResponse = await UnsplashAPI.get(
    `/collections/${id}/photos`,
    {
      params: {
        page,
      },
    },
  );
  return res;
};
