import firebase from 'firebase';
import React, { Component } from 'react';
import styled from 'styled-components';
import ListarFotos from './ListarFotos';

class ObraDetail extends Component{
  constructor(props){
    super(props);
    this.state = {
      url: window.location.href.split(':')
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


    
      firebase.database().ref('Obras/'+this.state.url[2]).on('value', (snapshot) =>{
        let state = this.state;
        state.key = snapshot.key;
        state.nome = snapshot.val().nomeObra;
        state.endereco = snapshot.val().endereco;
        state.cliente = snapshot.val().cliente;
        state.dataInicio = snapshot.val().dataInicio;
        this.setState(state);
      })
  

  
}
    atualizacoes = (id) => {
      window.location.href = '/update/:'+id
      }
  
  render(){
    const { key, nome, endereco, cliente, dataInicio} = this.state;
    return(
      <Wrapper>
        <NavMenu>
          <div> <button>Visão Geral</button></div> <div> <button onClick={() => this.atualizacoes(key)}>Atualizações</button></div>
        </NavMenu>
        <Geral>
            <Main key={key}>
              <div>id: {key} </div><div>Obra: {nome}</div><div>Endereço: {endereco}</div><div>Cliente: {cliente}</div><div>Data de inicio: {dataInicio}</div>
              </Main>
              <FotoSection>
                <ListarFotos/>
              </FotoSection>
            </Geral>
      </Wrapper>
    )
  }
}

export default ObraDetail


const Wrapper = styled.div`
width: 100%;
overflow-y: scroll;
height: 85vh;
display: flex;
flex-direction: column;
align-items: center;
`

const Geral = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 80%;
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
margin-top: 0.5rem;
background: #a6a6a6;
width: 100%;
padding-left: 1.5rem;
font-family: bree serif;
font-size: 18px;
font-weight: bold;

` 


const FotoSection = styled.div`
width: 100%;
padding-right: 1.5rem;`


