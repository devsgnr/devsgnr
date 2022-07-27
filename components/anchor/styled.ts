import { styled } from '../../stitches.config';
import THEME from '../../styles/token/colors';
import TYPOGRAPHY from '../../styles/token/typography';

export const StyledInternalA = styled('a', {
  textDecoration: 'none !important',
  opacity: '1 !important',
  color: THEME.light.background,
  fontWeight: TYPOGRAPHY.weight.normal,
});
