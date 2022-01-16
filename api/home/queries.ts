import { gql } from 'graphql-request';

const Homes = gql`
  {
    homes {
      id
      heading {
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
