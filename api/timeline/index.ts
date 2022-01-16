import { ITimelineResponse } from '../../types/response';
import { ITimelineProps } from '../../types/timeline';
import GraphCMSCLient from '../service';
import { Timelines } from './queries';

const FetchTimelinesService = async (params?: {}) => {
  const variable = params;
  const response: ITimelineResponse<ITimelineProps[]> =
    await GraphCMSCLient.request(Timelines, variable);
  return response;
};

export { FetchTimelinesService };
