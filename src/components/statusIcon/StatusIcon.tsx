import React, { FC, useCallback, useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

const StyledContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-top: 45px;
`;

const StyledIcon = styled(FontAwesomeIcon).attrs({
  color: '#4d4d4d',
})`
  cursor: pointer;
  margin: 0 12px;
  opacity: 0.5;
  &:hover {
    opacity: 0.8;
  }
`;

const StyledCaption = styled.p`
  color: #4d4d4d;
  flex: 1;
  font-size: 12px;
  letter-spacing: 4px;
  font-weight: 800;
  margin-top: 24px;
  text-align: center;
`;

export const StatusIcon: FC<{
  pulse?: boolean;
  icon: IconProp;
  testId?: string;
  text: string;
}> = (props) => {
  const { icon, pulse, testId, text } = props;
  return (
    <StyledContainer data-testid={testId}>
      <StyledIcon icon={icon} pulse={pulse} />
      <StyledCaption>{text}</StyledCaption>
    </StyledContainer>
  );
};
