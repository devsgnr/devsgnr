import { IProjectProps } from '../../../types/project';
import { IProjectResponse } from '../../../types/response';
import GraphCMSCLient from '../service';
import { CaseStudies } from './queries';

const FetchProjectsService = async (params?: {}) => {
  const variable = params;
  const response: IProjectResponse<IProjectProps[]> =
    await GraphCMSCLient.request(CaseStudies, variable);
  return response;
};

export { FetchProjectsService };
