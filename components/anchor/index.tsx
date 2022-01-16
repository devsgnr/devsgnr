import Link from 'next/link';
import React, { AnchorHTMLAttributes, ReactChild } from 'react';
import { StyledInternalA } from './styled';

interface AnchorProps {
  href: string;
  title?: string;
  children?: ReactChild | ReactChild[];
}

const Anchor = ({
  href,
  title,
  children,
  ...props
}: AnchorProps & AnchorHTMLAttributes<HTMLAnchorElement>) => {
  return (
    <Link href={href} passHref {...props}>
      <StyledInternalA title={title} {...props}>
        {title || children}
      </StyledInternalA>
    </Link>
  );
};

export default Anchor;
