/* eslint-disable camelcase */
import axios from 'axios';
import { GraphQLClient } from 'graphql-request';
import { createApi } from 'unsplash-js';

// Reason: For preventing `maybe be undefined error` being thrown on 16:42
export declare const process: {
  env: {
    NEXT_PUBLIC_CMS_URL: string;
    NEXT_PUBLIC_UNSPLASH_API_KEY: string;
    NEXT_PUBLIC_COLLECTION_ID: string;
  };
};

const cms_url = process.env.NEXT_PUBLIC_CMS_URL;
const unsplash_api_key = process.env.NEXT_PUBLIC_UNSPLASH_API_KEY;

const GraphCMSCLient = new GraphQLClient(cms_url);

export const UnsplashAPI = axios.create({
  baseURL: 'https://api.unsplash.com/',
  params: {
    client_id: unsplash_api_key,
  },
  timeout: 10000,
});

export const Unsplash = createApi({
  accessKey: process.env.NEXT_PUBLIC_UNSPLASH_API_KEY,
  fetch,
});

export default GraphCMSCLient;
