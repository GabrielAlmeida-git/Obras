import firebase from 'firebase';
import React, { Component } from 'react';
import styled from 'styled-components';

class DetalhesFotos extends Component{
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
            <Main key={key}>
              <div>Obra: {nome}</div><div>Endereço: {endereco}</div><div>Cliente: {cliente}</div><div>Data de inicio: {dataInicio}</div>
              </Main>
      </Wrapper>
    )
  }
}

export default DetalhesFotos


const Wrapper = styled.div`
width: 80%;
height: auto;
display: flex;
flex-direction: column;
align-items: center;
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
