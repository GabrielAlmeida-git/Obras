
import React, { Component } from 'react';
import styled from 'styled-components';
import LogoCerta from '../../assets/logo2.png';

 class SideMenu extends Component {

  constructor(props){
    super(props);
    this.state = {
      url: window.location.href.split(':')
    }
  }

  home = () => {
    let url = '/home';
    window.location.href = url;
  }
  render() {
    return (
      <Wrapper>
        <Geral>
          <User>
            Conta
          </User>
          <NavMenu>
            <div><button onClick={() => this.home()}>Home</button></div>
            <div><button>Tarefas</button></div>
            <div><button>Gastos</button></div>
          </NavMenu>
          <Logo>
            <img src={LogoCerta} alt='logoCerta'/>
          </Logo>
        </Geral>
      </Wrapper>
    )
  }
}

export default SideMenu


const Wrapper = styled.div`
width: 20%;
background: #006666;
position: absolut;
font-family: bree serif;
font-size: 25px;
color: #d9d9d9;
text-align: center;
font-weight: bold;
height: 100vh;
`

const Geral = styled.div`
` 


const User = styled.div`
border-bottom: solid;
border-color: grey;
height: 5rem;
display: flex;
align-items: center;
justify-content: center;
`

const NavMenu = styled.div`
div{
  height: 2.0rem;
  align-items: center;
  padding-top: 3.0rem;
  button{
    background: #006666;
    border: 0; 
    width: 100%;
    height: 100%;
    text-align: center;
    font-family: bree serif;
    font-size: 25px;
    @media(max-width: 800px) {
      width: font-size: 15px;
    }
    color: #d9d9d9;
    font-weight: bold;
  }
  
}
`
const Logo = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: flex-end;
height: 30rem;
img{ 
  background: transparent;
  width: 40%;
  @media(max-width: 800px) {
  width: 80%;
    }
}
`
