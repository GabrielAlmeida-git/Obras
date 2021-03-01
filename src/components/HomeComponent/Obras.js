import firebase from 'firebase';
import React, { Component } from 'react';
import styled from 'styled-components';

class obras extends Component {

  constructor(props){
    super(props);
    this.state = {
      obras:[]
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

    firebase.database().ref('Obras').on('value', (snapshot) =>{
      let state = this.state;
      state.obras = [];
      snapshot.forEach((childItem)=> {
        state.obras.push({
          key: childItem.key,
          nome: childItem.val().nomeObra,
          endereco: childItem.val().endereco,
          cliente: childItem.val().cliente,
          dataInicio: childItem.val().dataInicio
        })
      });
      this.setState(state);
    })
  }

  editar = (id) => {
    let url = 'Obras/:'+id
    window.location = url;
  }

  render(){
    return (
    <div>
      <Container>
        
        {this.state.obras.map((item)=>{
          return(
            <Obras key={item.nome}>
              <InfoObra>
                <NomeObra>
                  <h3>{item.nome} - {item.cliente}</h3>
                </NomeObra>
                <EnderecoObra>
                  <h4>{item.endereco}</h4>
                </EnderecoObra>
              </InfoObra>
              <EditaObra>
                <button onClick={() => this.editar(item.key)}>Editar</button>
              </EditaObra>
            </Obras>
          )
          })}
       
      </Container>

    </div>
    )
  }

}


export default obras

const Container = styled.div`
`

const Obras = styled.div`
padding-left: 1rem;
padding-right: 1rem;
display: grid;
width: 100%;
height: 50px;
border-style: outset;
border-radius: 25px;
margin-top: 1rem;
display: flex;
justify-content: space-between;
align-items: center;
background: white;
`

const InfoObra = styled.div`
`

const NomeObra = styled.div`

`

const EnderecoObra = styled.div`
`

const EditaObra = styled.div`
button{
  border-radius: 2px;
  background: #239C7B;
}
`





