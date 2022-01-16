import styled from 'styled-components';
import THEME from '../../styles/token/colors';

interface StyledLayoutProps {
  theme: string;
}

export const StyledSplashScreen = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  * {
    text-align: center;
  }
`;

const StyledLayout = styled.div<StyledLayoutProps>`
  width: 100%;
  min-height: 100vh;
  background: ${(props) =>
    props.theme === 'dark' ? THEME.dark.background : THEME.light.background};

  * {
    color: ${(props) =>
      props.theme === 'dark' ? THEME.dark.foreground : THEME.light.foreground};
  }
`;

export default StyledLayout;
