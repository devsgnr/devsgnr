import { gql } from 'graphql-request';

const CaseStudies = gql`
  {
    caseStudies(orderBy: fullDate_DESC) {
      id
      slug
      title
      date
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
