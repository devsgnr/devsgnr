import { GraphQLClient } from 'graphql-request';

const GraphCMSCLient = new GraphQLClient(process.env.NEXT_PUBLIC_CMS_URL);

export default GraphCMSCLient;
