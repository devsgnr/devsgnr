import styled from 'styled-components';

const BlogItem = styled.div`
  padding: 15px 20px;
  margin: 10px 0;
  width: 100%;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  &:hover {
    background-color: rgba(196, 196, 196, 0.1);
  }
`;

export default BlogItem;
