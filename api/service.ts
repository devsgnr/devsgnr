import axios from 'axios';
import { GraphQLClient } from 'graphql-request';

export declare var process: {
  env: {
    NEXT_PUBLIC_CMS_URL: string;
    NEXT_PUBLIC_UNSPLASH_API_KEY: string;
    NEXT_PUBLIC_COLLECTION_ID: string;
  };
};

const cms_url = process.env['NEXT_PUBLIC_CMS_URL'];
const unsplash_api_key = process.env['NEXT_PUBLIC_UNSPLASH_API_KEY'];

const GraphCMSCLient = new GraphQLClient(cms_url);

export const UnsplashAPI = axios.create({
  baseURL: 'https://api.unsplash.com/',
  params: {
    client_id: unsplash_api_key,
  },
  timeout: 10000,
});

export default GraphCMSCLient;
