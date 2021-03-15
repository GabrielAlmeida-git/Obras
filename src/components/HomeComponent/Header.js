import React from 'react';
import styled from 'styled-components';

function header() {
  return (
    <div>
      <Container>
          <Titulo>
            Diário de obras
          </Titulo>
      </Container>      
    </div>
  )
}

export default header


const Container = styled.div`

`

const Titulo = styled.div`
background: #009933;
width: 100%;
height: 5.0rem;
text-align: center;
font-size: 35px;
font-family: bree serif;
font-weight: bold;
display: flex;
align-items: center;
justify-content: center;

`


