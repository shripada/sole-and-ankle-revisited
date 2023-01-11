import React from 'react';
import styled from 'styled-components/macro';
import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';

import { COLORS, WEIGHTS, QUERIES } from '../../constants';

const MobileButtons = ({ ...props }) => {
  return (
    <Wrapper>
      <UnstyledButton>
        <Icon id={'shopping-bag'} strokeWidth={1} />
      </UnstyledButton>
      <UnstyledButton>
        <Icon id={'search'} strokeWidth={1} />
      </UnstyledButton>
      <UnstyledButton>
        <Icon id={'menu'} strokeWidth={1} />
      </UnstyledButton>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: none;
  @media ${QUERIES.tabletAndBelow} {
    display: flex;
    gap: 40px;
  }
`;

export default MobileButtons;
