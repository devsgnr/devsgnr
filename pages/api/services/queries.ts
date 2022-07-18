import { gql } from 'graphql-request';

const Services = gql`
  {
    services {
      id
      title
      description {
        html
      }
    }
  }
`;

export { Services };
