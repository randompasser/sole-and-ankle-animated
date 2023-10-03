import React from 'react';
import styled from 'styled-components/macro';
import { QUERIES, WEIGHTS } from '../../constants';

function NavLinkWrapper({ children, ...props }) {
  return (
    <Link { ...props }>
      <ChildrenWrapper>
        <Text>{ children }</Text>
        <HoverText aria-hidden={true}>{ children }</HoverText>
      </ChildrenWrapper>
    </Link>
  );
}

const Link = styled.a`
  --hover-duration: 200ms;
  overflow: hidden;
`;

const ChildrenWrapper = styled.span`
  position: relative;
`

const Text = styled.p`
  @media ${QUERIES.prefersReducedMotionNoPref} {
    transition: transform var(--hover-duration);
  }

  ${Link}:hover & {
    transform: translateY(-100%);
  }
`;

const HoverText = styled(Text)`
  position: absolute;
  font-weight: ${WEIGHTS.bold};
`;

export default NavLinkWrapper;