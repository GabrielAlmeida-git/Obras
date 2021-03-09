import React from 'react';
import styled from 'styled-components';

function header() {
  return (
    <div>
      <Container>
          <Titulo>
            Diário de obras - Certa Engenharia
          </Titulo>
      </Container>      
    </div>
  )
}

export default header


const Container = styled.div`

`

const Titulo = styled.div`
background: #239C7B;
width: 100%;
height: 3.0rem;
@media(max-width: 800px) {
  height: auto;
}
text-align: center;
padding-top: 1.0rem;
font-size: 1.4em;
`


