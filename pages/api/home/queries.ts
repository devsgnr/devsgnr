import { gql } from 'graphql-request';

const Homes = gql`
  {
    homes {
      id
      timeline {
        html
      }
      title
      about {
        html
      }
    }
  }
`;

export { Homes };
