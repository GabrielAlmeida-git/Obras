import firebase from 'firebase';
import React, { Component } from 'react';
import styled from 'styled-components';
import AdicionarUpdate from './AdicionarUpdate';
import DetalhesFotos from './DetalhesFotos';

class ObraUpdate extends Component {
  constructor(props){
    super(props);
    this.state = {
      url: window.location.href.split(':'),
      updates:[]
    }
    
    let firebaseConfig = {
      apiKey: "AIzaSyDf7uwGiMEoFMvWxmKz04RiI4S390NCaQM",
      authDomain: "certaengenharia-686f0.firebaseapp.com",
      projectId: "certaengenharia-686f0",
      storageBucket: "certaengenharia-686f0.appspot.com",
      messagingSenderId: "802163980988",
      appId: "1:802163980988:web:fc27258d26c36b11246eb9",
      measurementId: "G-LLTNHYXQ83"
    };
    // Initialize Firebase
    if(!firebase.apps.length){
      firebase.initializeApp(firebaseConfig);
    }

  
    
      firebase.database().ref('Obras/'+this.state.url[2]).child('updates').on('value', (snapshot) =>{
        let state = this.state;
        state.updates = [];
        snapshot.forEach((childItem)=> {
          state.updates.push({
            key: childItem.key,
            update: childItem.val().update,
            data: childItem.val().data
          })
        });
        this.setState(state);
      })
}

atualizacoes = () => {
  window.location.href = '/Obras/:'+this.state.url[2];
  }
  
  render() {
    return (
      <Wrapper>
      <NavMenu>
       <div> <button onClick={() => this.atualizacoes()}>Visão Geral</button> </div>  <div><button>Atualizações</button></div>
      </NavMenu>
      <DetalhesFotos/>
      <AdicionarUpdate/>
          <Main>
          {this.state.updates.map((item)=>{
            return(
              <Updates key={item.data}>
                  <div>
                    Dia: {item.data}
                  </div>
                  <div>
                    Descrição: {item.update}
                  </div>
              </Updates>
            )
          })}
            </Main>
    </Wrapper>
     
    )
  }
}

export default ObraUpdate


const Wrapper = styled.div`
width: 100%;
overflow-y: scroll;
height: 85vh;
display: flex;
flex-direction: column;
align-items: center;
`

const NavMenu = styled.div`
width: 80%;
display: flex;
justify-content: space-between;
margin-top: 1.5rem;
button{ 
  background: none;
  border: none;
  font-size: 20px;
  font-family: bree serif;
  font-weight: bold;
  text-decoration: underline;
  cursor: pointer;
}

`

const Main = styled.div`
margin-bottom: 1.5rem;
margin-top: 2rem;
width: 80%;
` 

const Updates = styled.div`
display: flex;
flex-direction: column;
border-radius: 5px;
padding-left: 1rem;
padding-right: 1rem;
margin-top: 1rem;
justify-content: center;
width: 100%;
height: 5.0rem;
background: rgba(0, 102, 102, 0.6);
font-family: bree serif;
font-size: 20;
font-weight: bold;
div{ 
  padding-top: 0.5rem;
}
`

