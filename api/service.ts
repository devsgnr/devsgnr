import { GraphQLClient } from 'graphql-request';

declare var process: {
  env: {
    NEXT_PUBLIC_CMS_URL: string;
  };
};

const url = process.env['NEXT_PUBLIC_CMS_URL'];
const GraphCMSCLient = new GraphQLClient(url);

export default GraphCMSCLient;
