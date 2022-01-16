import styled from 'styled-components';
import THEME from '../../styles/token/colors';

interface NavigationProps {
  theme: string;
}

export const NavigationFlex = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const NavigationLinks = styled.div`
  display: flex;
  align-item: center;

  * {
    padding: 0 5px;
  }
`;

const Navigation = styled.div<NavigationProps>`
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  padding: 20px 0;
  margin-bottom: 50px;
  background-color: ${(props) =>
    props.theme === 'dark' ? THEME.dark.opaque : THEME.light.opaque};
  backdrop-filter: blur(10px);
`;

export default Navigation;
