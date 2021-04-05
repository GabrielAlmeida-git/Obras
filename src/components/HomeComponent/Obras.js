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
                  {item.nome} - {item.cliente}
                </NomeObra>
                <EnderecoObra>
                  {item.endereco}
                </EnderecoObra>
              </InfoObra>
              <EditaObra>
                <button onClick={() => this.editar(item.key)}>👁</button>
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
display: flex;
flex-direction: column;
align-items: center;
flex-flow: row wrap;
@media(max-width: 800px) {
flex-flow: column nowrap;
}
justify-content: space-between;
position: relative;
overflow-y: scroll;
height: 70vh;
`

const Obras = styled.div`
margin-left: 4.0rem;
margin-right: 4.0rem;
width: 30%;
@media(max-width: 800px) {
  width: 80%;
  margin-left: 1.0rem;
  margin-right: 1.0rem;
}
height: 20vh;
border-radius: 5px;
margin-top: 1rem;
background: white;
display: flex;
flex-direction: column;
`

const InfoObra = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
height: 100%;
`

const NomeObra = styled.div`
font-family: bree serif;
font-weight: bold;
font-size: 25px;
color: #006666;

`

const EnderecoObra = styled.div`
color: #009933;
font-family: bree serif;
font-weight: bold;
font-size: 15px;
text-align: center;

`

const EditaObra = styled.div`
button{
  background: #FFF;
  font-size: 25px;
  border: none;
  color: #006666;
}
display: flex;
justify-content: flex-end;
text-align: right;
`





