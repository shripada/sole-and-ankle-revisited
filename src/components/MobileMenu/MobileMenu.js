/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components/macro';
import { DialogOverlay, DialogContent } from '@reach/dialog';

import { COLORS, QUERIES, WEIGHTS } from '../../constants';

import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const MobileMenu = ({ isOpen, onDismiss }) => {
  return (
    <Modal isOpen={isOpen} onDismiss={onDismiss}>
      <Content>
        <CloseButton onClick={onDismiss}>
          <Icon id={'close'} size={24} />
        </CloseButton>
        <Filler />
        <MobileNav>
          <Link href="/sale">Sale</Link>
          <Link href="/new">New&nbsp;Releases</Link>
          <Link href="/men">Men</Link>
          <Link href="/women">Women</Link>
          <Link href="/kids">Kids</Link>
          <Link href="/collections">Collections</Link>
        </MobileNav>

        <Filler>
          <Footer>
            <a href="/terms">Terms and Conditions</a>
            <a href="/privacy">Privacy Policy</a>
            <a href="/contact">Contact Us</a>
          </Footer>
        </Filler>
      </Content>
    </Modal>
  );
};

const Modal = styled(DialogOverlay)`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: hsla(220 5% 40% / 0.8);
`;

const Content = styled(DialogContent)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 20vw;
  background: white;
  height: 100%;
  padding-left: 32px;
  padding-bottom: 32px;
`;
const CloseButton = styled(UnstyledButton)`
  position: absolute;
  top: 10px;
  right: 10px;
  padding: 10px;
`;

const MobileNav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 22px;
  justify-content: flex-end;
  flex: 1;
  text-transform: uppercase;
  text-align: left;
`;

const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  flex: 1;
  height: 100%;
  gap: 14px;
  font-size: ${14 / 16}rem;
  font-weight: ${WEIGHTS.medium};
  & a {
    text-decoration: none;
    color: ${COLORS.gray[700]};
  }
`;

const Link = styled.a`
  text-decoration: none;
  color: ${COLORS.gray[900]};
  &:first-of-type {
    color: ${COLORS.secondary};
  }
`;

const Filler = styled.div`
  flex: 1;
`;
export default MobileMenu;
