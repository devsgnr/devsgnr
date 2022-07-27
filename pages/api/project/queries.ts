import { gql } from 'graphql-request';

const CaseStudies = gql`
  {
    caseStudies(orderBy: fullDate_DESC) {
      id
      slug
      title
      role
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
