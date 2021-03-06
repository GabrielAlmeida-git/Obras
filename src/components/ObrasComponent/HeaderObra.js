import firebase from 'firebase';
import React, { Component } from 'react';
import styled from 'styled-components';

 class HeaderObra extends Component {

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
        this.setState(state);
      })
  

  
}

  render() {
    const { nome } = this.state;
    return (
      <Container>
        <Titulo>
          {nome}
        </Titulo>
        
      </Container>
    )
  }
}

export default HeaderObra

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
