
import React, { Component } from 'react';
import styled from 'styled-components';

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
        <User>
          Ricardo da Costa
        </User>
        <NavMenu>
          <div><button onClick={() => this.home()}>Home</button></div>
          <div><button>Tarefas</button></div>
          <div><button>Gastos</button></div>
        </NavMenu>
      </Wrapper>
    )
  }
}

export default SideMenu


const Wrapper = styled.div`
width: 20%;
background: #239C7B;

`

const User = styled.div`
border-bottom: solid;
border-color: grey;
height: 3.0rem;

`

const NavMenu = styled.div`
div{
  height: 2.0rem;
  align-items: center;
  padding-top: 1.0rem;
  padding-left: 0.2rem;
  button{
    background: #239C7B;
    border: 0; 
    width: 100%;
    height: 100%;
    text-align: left;
  }
  
}
`
