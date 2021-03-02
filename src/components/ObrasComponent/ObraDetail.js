import firebase from 'firebase';
import React, { Component } from 'react';
import styled from 'styled-components';

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


    
      firebase.database().ref('Obras/'+this.state.url[3]).on('value', (snapshot) =>{
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
        <div>Visão Geral / <button onClick={() => this.atualizacoes(key)}>Atualizações</button></div>
            <Main key={key}>
              <div>id: {key} </div><div>Obra: {nome}</div><div>Endereço: {endereco}</div><div>Cliente: {cliente}</div><div>Data de inicio: {dataInicio}</div>
              </Main>
      </Wrapper>
    )
  }
}

export default ObraDetail


const Wrapper = styled.div`
`

const Main = styled.div`
margin-bottom: 1.5rem;
margin-top: 2rem;
` 

