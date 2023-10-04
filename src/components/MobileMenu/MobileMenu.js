/* eslint-disable no-unused-vars */
import React from 'react';
import styled, { keyframes } from 'styled-components/macro';
import { DialogOverlay, DialogContent } from '@reach/dialog';

import { QUERIES, WEIGHTS } from '../../constants';

import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const MobileMenu = ({ isOpen, onDismiss }) => {
  return (
    <Overlay 
      isOpen={isOpen} 
      onDismiss={onDismiss}
      style={{'--enter-animation-duration': '300ms'}}>
      <Content aria-label="Menu">
        <CloseButton onClick={onDismiss}>
          <Icon id="close" />
          <VisuallyHidden>Dismiss menu</VisuallyHidden>
        </CloseButton>
        <Filler />
        <Nav>
          <NavLink href="/sale" style={{'--animation-delay': '0ms'}}>Sale</NavLink>
          <NavLink href="/new" style={{'--animation-delay': '50ms'}}>New&nbsp;Releases</NavLink>
          <NavLink href="/men" style={{'--animation-delay': '100ms'}}>Men</NavLink>
          <NavLink href="/women" style={{'--animation-delay': '150ms'}}>Women</NavLink>
          <NavLink href="/kids" style={{'--animation-delay': '200ms'}}>Kids</NavLink>
          <NavLink href="/collections" style={{'--animation-delay': '250ms'}}>Collections</NavLink>
        </Nav>
        <Footer>
          <SubLink href="/terms" style={{'--animation-delay': '300ms'}}>Terms and Conditions</SubLink>
          <SubLink href="/privacy" style={{'--animation-delay': '350ms'}}>Privacy Policy</SubLink>
          <SubLink href="/contact" style={{'--animation-delay': '400ms'}}>Contact Us</SubLink>
        </Footer>
      </Content>
    </Overlay>
  );
};

const OverlayFadeIn = keyframes`
  from {
    background: none;
  }

  to {
    background: var(--color-backdrop);
  }
`;

const ContentSlideIn = keyframes`
  from {
    transform: translateX(100%);
  }

  to {
    transform: translateX(0);
  }
`;

const NavLinkSlideIn = keyframes`
  from {
    transform: translateX(30%);
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const Overlay = styled(DialogOverlay)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: var(--color-backdrop);
  display: flex;
  justify-content: flex-end;

  @media ${QUERIES.prefersReducedMotionNoPref} {
    animation: ${OverlayFadeIn} var(--enter-animation-duration) both ease-out;
  }
`;

const Content = styled(DialogContent)`
  background: white;
  width: 300px;
  height: 100%;
  padding: 24px 32px;
  display: flex;
  flex-direction: column;

  @media ${QUERIES.prefersReducedMotionNoPref} {
    animation: ${ContentSlideIn} var(--enter-animation-duration) both ease-out;
  }
`;

const CloseButton = styled(UnstyledButton)`
  position: absolute;
  top: 10px;
  right: 0;
  padding: 16px;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Link = styled.a`
  @media ${QUERIES.prefersReducedMotionNoPref} {
    animation: ${NavLinkSlideIn} var(--enter-animation-duration) both ease-out;
    animation-delay: calc(200ms + var(--animation-delay));
  }
`;

const NavLink = styled(Link)`
  color: var(--color-gray-900);
  font-weight: ${WEIGHTS.medium};
  text-decoration: none;
  font-size: 1.125rem;
  text-transform: uppercase;

  &:first-of-type {
    color: var(--color-secondary);
  }
`;

const Filler = styled.div`
  flex: 1;
`;
const Footer = styled.footer`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 14px;
  justify-content: flex-end;
`;

const SubLink = styled(Link)`
  color: var(--color-gray-700);
  font-size: 0.875rem;
  text-decoration: none;
`;

export default MobileMenu;
