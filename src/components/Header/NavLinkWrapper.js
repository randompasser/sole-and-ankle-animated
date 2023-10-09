import React from 'react';
import styled from 'styled-components/macro';
import { QUERIES, WEIGHTS } from '../../constants';

function NavLinkWrapper({ children, ...props }) {
  return (
    <Link { ...props }>
        <HoverBorder />
        <Text>{ children }</Text>
    </Link>
  );
}

const Link = styled.a`
  position: relative;
  overflow: hidden;
`;

const Text = styled.p`
  padding: 8px;
`;

const HoverBorder = styled.span`
  --border-width: 2px;
  
  position: absolute;
  left: 0;
  top: var(--border-width);
  width: 100%;
  height: 100%;
  border: var(--border-width) var(--color-gray-900) solid;
  border-top: 0;
  border-right: 0;

  transform: translateY(-100%);
  @media ${QUERIES.prefersReducedMotionNoPref} {
    transition: transform 300ms ease-in;
  }

  ${Link}:hover & {
    transform: translateY(calc(0px - var(--border-width)));
    @media ${QUERIES.prefersReducedMotionNoPref} {
      transition: 200ms ease-out;
    }
  }
`;

export default NavLinkWrapper;