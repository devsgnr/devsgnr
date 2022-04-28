import { IHomeProps } from '../../../types/home';
import { IHomeResponse } from '../../../types/response';
import GraphCMSCLient from '../service';
import { Homes } from './queries';

const FetchHomesService = async (params?: {}) => {
  const variable = params;
  const response: IHomeResponse<IHomeProps[]> = await GraphCMSCLient.request(
    Homes,
    variable,
  );
  return response;
};

export { FetchHomesService };
