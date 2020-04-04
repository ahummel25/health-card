import React, { FC } from 'react';
import Button from '@material-ui/core/Button';
import styled from '@emotion/styled';

import { IButtonForId } from '../interfaces';

const ButtonStyled = styled(({ ...rest }) => <Button {...rest} />)`
  position: relative !important;
  top: 150px !important;
`;

const ButtonForId: FC<IButtonForId> = ({ setMemberId }): JSX.Element => {
  const handleOnClick = (): void => {
    const generatedId = new Date()
      .valueOf()
      .toString()
      .slice(-8);

    setMemberId(Number(generatedId));
  };
  return (
    <ButtonStyled onClick={handleOnClick} variant="contained" color="primary">
      Member ID
    </ButtonStyled>
  );
};

export default ButtonForId;
