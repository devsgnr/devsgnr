import { gql } from 'graphql-request';

const Timelines = gql`
  {
    timelines {
      timeline {
        html
      }
      resumeLink
      darkResumeLink
    }
  }
`;

export { Timelines };
