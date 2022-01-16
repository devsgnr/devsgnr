import styled from 'styled-components';

const Container = styled.div`
  padding-right: 25px;
  padding-left: 25px;
  margin-right: auto;
  margin-left: auto;

  @media (min-width: 576px) {
    width: 560px;
  }

  @media (min-width: 768px) {
    width: 700px;
  }

  @media (min-width: 992px) {
    width: 750px;
  }

  @media (min-width: 1200px) {
    width: 800px;
  }
`;

export default Container;
