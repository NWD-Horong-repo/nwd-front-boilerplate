import { Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import React, { ReactElement } from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
  margin-top: 30px;
  background-color: ${({ theme }) => theme.gray};
`;

const CustomButton = styled(Button)`
  color: yellow;
  background-color: skyblue;
`;

function LandingPage(): ReactElement {
  return (
    <div className="App">
      <header className="App-header">
        <Typography variant="h3">test 한글</Typography>
        <p>
          Edit <code>src/pages/Auth/Landing.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <StyledDiv>StyledDiv sample</StyledDiv>
      <Button variant="contained" color="primary">
        Hello World
      </Button>
      <CustomButton variant="contained" color="primary">
        Hello World2
      </CustomButton>
    </div>
  );
}

export default LandingPage;
