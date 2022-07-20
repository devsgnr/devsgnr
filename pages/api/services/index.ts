import { IServiceResponse } from '../../../types/response';
import { IServiceProps } from '../../../types/services';
import GraphCMSCLient from '../service';
import { Services } from './queries';

const FetchServicesService = async (params?: {}) => {
  const variable = params;
  const response: IServiceResponse<IServiceProps[]> =
    await GraphCMSCLient.request(Services, variable);
  return response;
};

export { FetchServicesService };
