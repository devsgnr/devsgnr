import { gql } from 'graphql-request';

const CaseStudies = gql`
  {
    caseStudies {
      id
      slug
      title
      coverPicture {
        url
      }
      coverPictureTwo {
        url
      }
      mainContent {
        html
      }
    }
  }
`;

export { CaseStudies };