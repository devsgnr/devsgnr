import { gql } from 'graphql-request';

const Posts = gql`
  {
    posts(orderBy: createdAt_DESC) {
      slug
      title
      excerpt
      displayPicture {
        url
      }
      date
      highlight
    }
  }
`;

const Post = gql`
  query PostsQuery($slug: String!) {
    post(where: { slug: $slug }) {
      title
      slug
      excerpt
      highlight
      date
      author {
        name
        picture {
          url
        }
      }
      displayPicture {
        url
      }
      imageCredit {
        html
      }
      theProcess {
        html
      }
    }
  }
`;

export { Posts, Post };
