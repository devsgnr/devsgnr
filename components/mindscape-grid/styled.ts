import styled from 'styled-components';

export const StyledMindscapeGrid = styled.div`
  display: grid;
  align-items: flex-start;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 15px;
  row-gap: 15px;
  margin-top: 100px;

  @media (max-width: 568px) {
    grid-template-columns: 1fr;
  }
`;

export const StyledMindscapeGridItemCredit = styled.div`
  position: absolute;
  bottom: 0;
  left: 5.5%;
  opacity: 0;
  transition: all ease-in-out 0.2s;
`;

export const StyledMindscapeGridItem = styled.div`
  overflow: hidden;
  border-radius: 10px;
  position: relative;

  &:hover ${StyledMindscapeGridItemCredit} {
    opacity: 1;
    bottom: 1.5%;
  }
`;
